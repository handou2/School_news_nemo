import React, { useEffect } from "react";
import { SideMenu, TopHeader, NewsRouter } from "../../components";
import "./SandBox.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Layout } from "antd";
import { Home } from "../home/Home";
import { UserList } from "../user-manage";

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
          {/* <UserList /> */}
          <NewsRouter></NewsRouter>
        </Content>
      </Layout>
    </Layout>
  );
};
