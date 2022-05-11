import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  RightList,
  RoleList,
  NewsDraft,
  NewsCategory,
  Audit,
  AuditList,
  Unpublished,
  Published,
  Sunset,
  NewsPreview,
  NewsUpdate,
  NewsAdd,
} from "../../pages";
import { Spin } from "antd";
import axios from "axios";
import { Home } from "../../pages/home/Home";
import { UserList } from "../../pages/user-manage/UserList";
const LocalRouterMap: any = {
  "/home": Home,
  "/user-manage/list": UserList,
  // "/right-manage/role/list": RoleList,
  // "/right-manage/right/list": RightList,
  // "/news-manage/add": NewsAdd,
  // "/news-manage/draft": NewsDraft,
  // "/news-manage/category": NewsCategory,
  // "/news-manage/preview/:id": NewsPreview,
  // "/news-manage/update/:id": NewsUpdate,
  // "/audit-manage/audit": Audit,
  // "/audit-manage/list": AuditList,
  // "/publish-manage/unpublished": Unpublished,
  // "/publish-manage/published": Published,
  // "/publish-manage/sunset": Sunset,
};

export const NewsRouter = () => {
  const [BackRouteList, setBackRouteList] = useState<any>([]);
  useEffect(() => {
    Promise.all([axios.get("/rights"), axios.get("/children")]).then((res) => {
      console.log("res", res);
      setBackRouteList([...res[0]?.data, ...res[1]?.data]);
      // console.log(BackRouteList, "BackRouteList");
    });
  }, []);
  const token: any = localStorage.getItem("token");
  const {
    role: { rights },
  } = JSON.parse(token);
  // console.log(rights, "rights");
  const checkRoute = (item: any) => {
    return (
      LocalRouterMap[item.key] && (item.pagepermisson || item.routepermisson)
    );
  };
  const checkUserPermission = (item: any) => {
    return rights.includes(item.key);
  };
  return (
    <Routes>
      {BackRouteList.map((item: any) => {
        if (checkRoute(item) && checkUserPermission(item)) {
          return (
            <Route
              path={item.key}
              key={item.key}
              element={LocalRouterMap[item.key]}
            />
          );
        }
        return null;
      })}
      <Route path="/" element={<Navigate replace to="/home" />} />
      {BackRouteList.length > 0 && <Route path="*" element={<div>none</div>} />}
    </Routes>
  );
};
