import React from 'react';

import { ctx } from '@vl/redata';
import DIV from '@vl/redata/DIV.macro';

import App from '@uz/unitz-app-web/BizApp';
import SEO from '@uz/unitz-layout-web/SEO';

import Layout from '@uz/unitz-layout-web/LayoutMain';
import ContentPageLayout from '@uz/unitz-ctf-theme/layouts/ContentPageDELayout';
import useRoute from '@vl/hooks/useGbRouteDe';
import withPageContext from '@uz/unitz-pages-biz/withPageContext';
import _ from 'lodash';
import PageData from '../../data/PageDataQuery';

const PageComponents = {
  ContentPageLayout,
};

export const component = withPageContext((props) => {
  const pageContext = useRoute().getPageContext();
  const pageLayout = _.get(pageContext, 'params.pageLayout');
  const PageComponent = _.get(PageComponents, pageLayout);

  return (
    <App>
      <Layout location={props.location} PageData={PageData}>
        <DIV>
          <SEO pageData={ctx.apply('ctf.findPage', { name: _.get(pageContext, 'params.name', '') })} />
          <Layout.POS name="app-header">{ctx.apply('ctf.renderSection', { name: 'HomeBizNavbarSection' })}</Layout.POS>
          <Layout.POS name="app-body">{PageComponent ? <PageComponent /> : null}</Layout.POS>
          <Layout.POS name="app-footer">{ctx.apply('ctf.renderSection', { name: 'BizFooterSection' })}</Layout.POS>
        </DIV>
      </Layout>
    </App>
  );
});

export default component;
