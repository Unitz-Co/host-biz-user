// import React from 'react';

// import { ctx } from '@vl/redata';
// import DIV from '@vl/redata/DIV.macro';

// import App from '@uz/unitz-app-web/UserApp';
// import SEO from '@uz/unitz-layout-web/SEO';
// import { useStaticQuery, graphql } from 'gatsby';
// import Layout from '@uz/unitz-layout-web/LayoutMain';
// import useRoute from '@vl/hooks/useGbRoute';
// import withPageContext from '@uz/unitz-pages/withPageContext';
// import _ from 'lodash';
// import BlogTemplate from '@uz/unitz-pages-biz/BlogTemplate';
// import PageData from '../../data/PageDataQuery';

// export const component = withPageContext((props) => {
//   const pageContext = useRoute().getPageContext();
//   const allBlogs = useStaticQuery(graphql`
//     query BlogIndex {
//       allContentfulBizBlog {
//         nodes {
//           node_locale
//           id: contentful_id
//           title
//           author {
//             name
//           }
//           description {
//             description
//           }
//           publishDate
//           heroImage {
//             fluid {
//               src
//             }
//           }
//           slug
//         }
//       }
//     }
//   `);
//   const blogs = _.get(allBlogs, 'allContentfulBizBlog.nodes', []);
//   return (
//     <App>
//       <Layout location={props.location} PageData={PageData}>
//         <DIV>
//           <SEO
//             pageData={{
//               seoTitle: _.get(pageContext, 'params.title', ''),
//               seoMetaDescription: {
//                 seoMetaDescription: _.get(pageContext, 'params.description.description', ''),
//               },
//               siteImage: _.get(pageContext, 'params.heroImage.fluid.src', ''),
//             }}
//           />
//           <Layout.POS name="app-header">{ctx.apply('ctf.renderSection', { name: 'HomeBizNavbarSection' })}</Layout.POS>
//           <Layout.POS name="app-body">
//             <DIV forceCtx>
//               {ctx.debug(() => {
//                 ctx.set('blogs', blogs);
//               })}
//               <BlogTemplate />
//             </DIV>
//           </Layout.POS>
//           <Layout.POS name="app-footer">{ctx.apply('ctf.renderSection', { name: 'BizFooterSection' })}</Layout.POS>
//         </DIV>
//       </Layout>
//     </App>
//   );
// });

// export default component;
