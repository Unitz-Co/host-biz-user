import React from 'react';

import { ctx } from '@vl/redata';
import DIV from '@vl/redata/DIV.macro';
import { graphql, useStaticQuery } from 'gatsby';
import withPageContext, { provideData } from '@uz/unitz-pages/withPageContext';
import HomePage from '@uz/unitz-pages-biz/Blogs';
import App from '@uz/unitz-app-web/UserApp';
import Layout from '@uz/unitz-layout-web/LayoutMain';
import SEO from '@uz/unitz-layout-web/SEO';
import useRoute from '@vl/hooks/useGbRoute';
import PageData from '../data/PageDataQuery';
import _ from 'lodash';

const BlogIndex = withPageContext((props) => {
  const route = useRoute();
  const pageContext = route.getPageContext();

  const allBlogs = useStaticQuery(graphql`
    query Blogs {
      allContentfulBizBlog {
        nodes {
          node_locale
          id: contentful_id
          title
          author {
            name
          }
          body {
            body
          }
          description {
            description
          }
          publishDate
          heroImage {
            fluid {
              src
            }
          }
          slug
        }
      }
    }
  `);
  const blogs = _.get(allBlogs, 'allContentfulBizBlog.nodes', []);
  const locales = {
    vi: 'vi-VN',
    en: 'en-US',
  };
  provideData('blogs', _.filter(blogs, { node_locale: _.get(locales, pageContext.locale, 'vi-VN') }));

  return (
    <App>
      <Layout location={props.location} PageData={PageData}>
        <DIV>
          <SEO pageData={ctx.apply('ctf.findPage', { name: 'HomeUnitzBiz' })} />
          <Layout.POS name="app-header">{ctx.apply('ctf.renderSection', { name: 'HomeBizNavbarSection' })}</Layout.POS>
          <Layout.POS name="app-body">
            <DIV forceCtx>
              {ctx.debug(() => {
                ctx.set('blogs', blogs);
              })}
              <HomePage />
            </DIV>
          </Layout.POS>
          <Layout.POS name="app-footer">{ctx.apply('ctf.renderSection', { name: 'BizFooterSection' })}</Layout.POS>
        </DIV>
      </Layout>
    </App>
  );
});

export default BlogIndex;
