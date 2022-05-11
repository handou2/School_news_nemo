import React, { useEffect, useState } from "react";
import styles from "./SideMenu.module.scss";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      // console.log(res?.data);
      setMeun(res?.data);
    });
  }, []);
  const token: any = localStorage.getItem("token");

  const {
    role: { rights },
  } = JSON.parse(token);
  const checkPagePermission = (item: any) => {
    return item.pagepermisson && rights.includes(item.key);
  };
  const renderMenu = (menuList: any) => {
    return menuList.map((item: any) => {
      if (item.children?.length > 0 && checkPagePermission(item)) {
        return (
          <SubMenu key={item.key} icon={iconList[item.key]} title={item.title}>
            {renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        checkPagePermission(item) && (
          <Menu.Item
            icon={iconList[item.key]}
            key={item.key}
            onClick={() => {
              navigate(item.key);
            }}
          >
            {item.title}
          </Menu.Item>
        )
      );
    });
  };
  //找到之前高亮的侧边栏板块
  const selectKeys = [window.location.pathname];
  //展开菜单项
  const openKeys = ["/" + window.location.pathname.split("/")[1]];
  return (
    <Sider trigger={null} collapsible>
      <div style={{ display: "flex", height: "100%", flexDirection: "column" }}>
        <div className={styles.logo}>校园新闻发布管理系统</div>
        <div style={{ flex: 1, overflow: "auto" }}>
          <Menu
            theme="dark"
            mode="inline"
            className="aaaaaaa"
            selectedKeys={selectKeys}
            //初始展开的菜单项
            defaultOpenKeys={openKeys}
            // items={meun}
          >
            {renderMenu(meun)}
          </Menu>
        </div>
      </div>
    </Sider>
  );
};
