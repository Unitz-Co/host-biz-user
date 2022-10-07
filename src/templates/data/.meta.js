const path = require('path');
const _ = require('lodash');
// const { routeStore } = require('@vl/mod-utils/gatsbyRouteStore');
const { withLocale } = require('@uz/mod-translations/utils-biz');

require('@vl/mod-config/web');

// const hasuraClient = require('@vl/mod-clients/hasuraCtf');

exports.createPages = withLocale(async function(item, gatsby) {
  const localeConfig = this;
  // @update query
  const allNodes = await gatsby.graphql(`
  query DataQuery {
    allContentfulPage(filter: { node_locale: { eq: "${localeConfig.get('locale')}" } }) {
      nodes {
        id
        name
        sections {
          ... on ContentfulSection {
            id
            name
            sys {
              type
              contentType {
                sys {
                  type
                  linkType
                  id
                }
              }
            }
          }
        }
      }
    }
    allContentfulPage_de: allContentfulPage(filter: { node_locale: { eq: "de" } }) {
      nodes {
        id
        name
        sections {
          ... on ContentfulSection {
            id
            name
            sys {
              type
              contentType {
                sys {
                  type
                  linkType
                  id
                }
              }
            }
          }
        }
      }
    }
    allContentfulPage_en_US: allContentfulPage(filter: { node_locale: { eq: "en-US" } }) {
      nodes {
        id
        name
        sections {
          ... on ContentfulSection {
            id
            name
            sys {
              type
              contentType {
                sys {
                  type
                  linkType
                  id
                }
              }
            }
          }
        }
      }
    }
    allContentfulSection(filter: { node_locale: { eq: "en-US" } }) {
      nodes {
        id
        name
        shortText
        longText {
          longText
        }
        images {
          fixed(width: 1600) {
            width
            height
            src
            srcSet
          }
        }
        image {
          fixed(width: 1600) {
            width
            height
            src
            srcSet
          }
        }
        sections {
          ... on ContentfulSection {
            id
            name
            sys {
              type
              contentType {
                sys {
                  type
                  linkType
                  id
                }
              }
            }
          }
          ... on ContentfulItem {
            id
            name
            sys {
              type
              contentType {
                sys {
                  type
                  linkType
                  id
                }
              }
            }
            component {
              id
              name
            }
          }
        }
        layout {
          id
          name
        }
        enhancers {
          id
          name
        }
      }
    }
    allContentfulSection_en_US: allContentfulSection(filter: { node_locale: { eq: "en-US" } }) {
      nodes {
        id
        name
        shortText
        longText {
          longText
        }
        images {
          fixed(width: 1600) {
            width
            height
            src
            srcSet
          }
        }
        image {
          fixed(width: 1600) {
            width
            height
            src
            srcSet
          }
        }
        sections {
          ... on ContentfulSection {
            id
            name
            sys {
              type
              contentType {
                sys {
                  type
                  linkType
                  id
                }
              }
            }
          }
          ... on ContentfulItem {
            id
            name
            sys {
              type
              contentType {
                sys {
                  type
                  linkType
                  id
                }
              }
            }
            component {
              id
              name
            }
          }
        }
        layout {
          id
          name
        }
        enhancers {
          id
          name
        }
      }
    }
    allContentfulSection_de: allContentfulSection(filter: { node_locale: { eq: "de" } }) {
      nodes {
        id
        name
        shortText
        longText {
          longText
        }
        images {
          fixed(width: 1600) {
            width
            height
            src
            srcSet
          }
        }
        image {
          fixed(width: 1600) {
            width
            height
            src
            srcSet
          }
        }
        sections {
          ... on ContentfulSection {
            id
            name
            sys {
              type
              contentType {
                sys {
                  type
                  linkType
                  id
                }
              }
            }
          }
          ... on ContentfulItem {
            id
            name
            sys {
              type
              contentType {
                sys {
                  type
                  linkType
                  id
                }
              }
            }
            component {
              id
              name
            }
          }
        }
        layout {
          id
          name
        }
        enhancers {
          id
          name
        }
      }
    }
    allContentfulItem(filter: { node_locale: { eq: "en-US" } }) {
      nodes {
        id
        name
        shortText
        longText {
          longText
        }
        detailText {
          detailText
        }
        action
        linkHref
        images {
          fixed(width: 1600) {
            width
            height
            src
            srcSet
          }
        }
        image {
          fixed(width: 1600) {
            width
            height
            src
            srcSet
          }
        }
        component {
          id
          name
        }
        enhancers {
          id
          name
        }
      }
    }
    allContentfulItem_en_US: allContentfulItem(filter: { node_locale: { eq: "en-US" } }) {
      nodes {
        id
        name
        shortText
        longText {
          longText
        }
        detailText {
          detailText
        }
        action
        linkHref
        images {
          fixed(width: 1600) {
            width
            height
            src
            srcSet
          }
        }
        image {
          fixed(width: 1600) {
            width
            height
            src
            srcSet
          }
        }
        component {
          id
          name
        }
        enhancers {
          id
          name
        }
      }
    }
    allContentfulItem_de: allContentfulItem(filter: { node_locale: { eq: "de" } }) {
      nodes {
        id
        name
        shortText
        longText {
          longText
        }
        detailText {
          detailText
        }
        action
        linkHref
        images {
          fixed(width: 1600) {
            width
            height
            src
            srcSet
          }
        }
        image {
          fixed(width: 1600) {
            width
            height
            src
            srcSet
          }
        }
        component {
          id
          name
        }
        enhancers {
          id
          name
        }
      }
    }
  }`);

  const data = _.get(allNodes, 'data', {});
  const slug = localeConfig.langSlug('/data');
  const pageContext = _.cloneDeep({
    data,
  });

  return gatsby.actions.createPage({
    path: slug,
    component: item.resolvers.component(gatsby),
    context: pageContext,
  });
});
