import React from "react";
import styles from "./TopHeader.module.scss";
import { Layout, Dropdown, Menu, Avatar, Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";
const { Header } = Layout;

export const TopHeader = () => {
  const navigate = useNavigate();
  const token: any = localStorage.getItem("token");
  const {
    role: { roleName },
    username,
  } = JSON.parse(token);
  const menu = (
    <Menu>
      <Menu.Item>{roleName}</Menu.Item>
      <Menu.Item
        danger
        onClick={() => {
          localStorage.removeItem("token");
          // console.log(props.history)
          navigate("/login");
        }}
      >
        退出
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="site-layout-background" style={{ padding: "0 16px" }}>
      {/* {
        props.isCollapsed ? <MenuUnfoldOutlined onClick={changeCollapsed} /> : <MenuFoldOutlined onClick={changeCollapsed} />
    } */}

      <div style={{ float: "right" }}>
        <span>
          欢迎<span style={{ color: "#1890ff" }}>{username}</span>回来
        </span>
        <Dropdown overlay={menu}>
          <Avatar size="large" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>
  );
};
