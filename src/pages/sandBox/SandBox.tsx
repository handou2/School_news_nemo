import React, { useEffect } from "react";
import { SideMenu, TopHeader } from "../../components";
import styles from "./SandBox.module.scss";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Layout } from "antd";

const { Content } = Layout;

export const SandBox = () => {
  NProgress.start();
  useEffect(() => {
    NProgress.done();
  });
  return (
    <Layout>
      <SideMenu></SideMenu>
      <Layout className="site-layout">
        <TopHeader></TopHeader>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            overflow: "auto",
          }}
        >
          {/* <NewsRouter></NewsRouter> */}
        </Content>
      </Layout>
    </Layout>
  );
};
