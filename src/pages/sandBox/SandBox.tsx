import React, { useEffect } from "react";
import { SideMenu, TopHeader } from "../../components";
import { NewsRouter } from "../../components/newsRouter/NewsRouter";
import "./SandBox.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Layout } from "antd";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../home";
import { UserList } from "../user-manage";
import { RoleList } from "../right-manage";
import { RightList } from "../right-manage";

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
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/user-manage/list" element={<UserList />} />
            <Route path="/right-manage/role/list" element={<RoleList />} />
            <Route path="/right-manage/right/list" element={<RightList />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="*" element={<div>none</div>} />
          </Routes>
          {/* <NewsRouter></NewsRouter> */}
        </Content>
      </Layout>
    </Layout>
  );
};
