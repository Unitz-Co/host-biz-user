import React from 'react';

import { ctx } from '@vl/redata';
import DIV from '@vl/redata/DIV.macro';

import HomePage from '@uz/unitz-pages-biz/CFHomeUnitzBiz';
// import FacebookMessenger from '@uz/unitz-components-web/FacebookMessenger';
import withPageContext from '@uz/unitz-pages-biz/withPageContext';
import App from '@uz/unitz-app-web/BizApp';

import Layout from '@uz/unitz-layout-web/LayoutMain';
import SEO from '@uz/unitz-layout-web/SEO';

import PageData from '../data/PageDataQuery';

const HomeIndex = withPageContext((props) => {
  return (
    <App>
      <Layout location={props.location} PageData={PageData}>
        <DIV>
          <SEO pageData={ctx.apply('ctf.findPage', { name: 'HomeUnitzBiz' })} />
          <Layout.POS name="app-header">{ctx.apply('ctf.renderSection', { name: 'HomeBizNavbarSection' })}</Layout.POS>
          <Layout.POS name="app-body">
            <HomePage />
            {/* <FacebookMessenger /> */}
          </Layout.POS>
          <Layout.POS name="app-footer">{ctx.apply('ctf.renderSection', { name: 'BizFooterSection' })}</Layout.POS>
        </DIV>
      </Layout>
    </App>
  );
});

export default HomeIndex;
