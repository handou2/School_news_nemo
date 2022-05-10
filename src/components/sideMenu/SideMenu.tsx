import React, { useEffect, useState } from "react";
import styles from "./SideMenu.module.scss";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

const iconList: any = {
  "/home": <UserOutlined />,
  "/user-manage": <UserOutlined />,
  "/user-manage/list": <UserOutlined />,
  "/right-manage": <UserOutlined />,
  "/right-manage/role/list": <UserOutlined />,
  "/right-manage/right/list": <UserOutlined />,
  //.......
};
export const SideMenu = () => {
  const [meun, setMeun] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("/rights?_embed=children").then((res) => {
      console.log(res?.data);
      setMeun(res?.data);
    });
  }, []);
  const token: any = localStorage.getItem("token");

  const {
    role: { rights },
  } = JSON.parse(token);
  const renderMenu = (meun: any) => {
    return meun.map((item: any) => {
      if (item.children) {
        return (
          // 用路径作为key值
          <SubMenu key={item.key} icon={iconList[item.key]} title={item.title}>
            {/* //这里可以选择再次map遍历item.children */}
            {renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item
          icon={iconList[item.key]}
          key={item.key}
          onClick={() => {
            navigate(item.key);
          }}
        >
          {item.title}
        </Menu.Item>
      );
    });
  };
  return (
    <Sider trigger={null} collapsible>
      <div style={{ display: "flex", height: "100%", flexDirection: "column" }}>
        <div className={styles.logo}>校园新闻发布管理系统</div>
        <div style={{ flex: 1, overflow: "auto" }}>
          <Menu theme="dark" mode="inline" className="aaaaaaa">
            {renderMenu(meun)}
          </Menu>
        </div>
      </div>
    </Sider>
  );
};
