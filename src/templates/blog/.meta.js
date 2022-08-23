const path = require('path');
const _ = require('lodash');
const { routeStore } = require('@vl/mod-utils/gatsbyRouteStore');
const { withLocale } = require('@uz/mod-translations/utils-biz');

exports.createPages = withLocale(async function(item, gatsby) {
  const localeConfig = this;
  // @update query
  const allNodes = await gatsby.graphql(`
  query blogPagesQuery {
    allContentfulBizBlog(filter: { node_locale: { eq: "${localeConfig.get('locale')}"} }) 
    {
      nodes {
        id : contentful_id
        title
        author {
          name
        }
        publishDate
        description {
          description
        }
        heroImage {
          file {
            url
          }
        }
        content {
          raw
        }
        slug
      }
    }
  }
`);

  const pages = _.get(allNodes, 'data.allContentfulBizBlog.nodes', []);
  return Promise.all(
    pages.map((page) => {
      const pageSlug = routeStore.toUrl('page', page);
      const pagePath = localeConfig.langSlug(path.join('/blog/', pageSlug));

      console.log('creating page', pagePath);
      return gatsby.actions.createPage({
        path: pagePath,
        component: item.resolvers.component(gatsby),
        context: {
          id: _.get(page, 'id', 'id'),
          slug: pageSlug,
          lang: localeConfig.get('lang'),
          params: {
            ...page,
          },
        },
      });
    })
  );
});
