import React from "react";
import { BackTop, Layout } from "antd";
import LayoutHeader from "./header";
import LayoutSider from "./sider";
import LayoutContent from "./content";

import "../styles/layout.less";

function BaseLayout() {
  return (
    <Layout>
      <LayoutSider />
      <Layout className="gc-layout" id="g-layout">
        <LayoutHeader />
        <LayoutContent />
        <BackTop className="back-top" target={() => document.querySelector("#g-layout")} />
      </Layout>
    </Layout>
  );
}

export default BaseLayout;
