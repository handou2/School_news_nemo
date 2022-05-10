import React from "react";
import styles from "./SignIn.module.scss";
import { Form, Button, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import ParticlesBg from "particles-bg";
import { useNavigate } from "react-router-dom";
import { NotifyError, NotifySuccess } from "../../components";

export const SignIn = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    axios
      .get(
        `/users?username=${values.username}&password=${values.password}&roleState=true&_expand=role`
      )
      .then((res) => {
        console.log(res.data);
        if (res?.data?.length === 0) {
          NotifyError("用户名或密码不匹配");
        } else {
          localStorage.setItem("token", JSON.stringify(res?.data[0]));
          NotifySuccess("登录成功");
          setTimeout(() => {
            navigate("/");
          }, 200);
        }
      });
  };
  let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    // body: "./img/icon.png", // Whether to render pictures
    // rotate: [0, 20],
    alpha: [0.6, 0],
    scale: [1, 0.1],
    position: "center", // all or center or {x:1,y:1,width:100,height:100}
    color: ["random", "#ff0000"],
    cross: "dead", // cross or bround
    random: 15, // or null,
    g: 5, // gravity
    // f: [2, -1], // force
    onParticleUpdate: (ctx: any, particle: any) => {
      ctx.beginPath();
      ctx.rect(
        particle.p.x,
        particle.p.y,
        particle.radius * 2,
        particle.radius * 2
      );
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();
    },
  };
  return (
    <div style={{ height: "100%", overflow: "hidden" }}>
      <ParticlesBg type="circle" bg={true} config={config} />
      <div className={styles.formContainer}>
        <div className={styles.logintitle}>校园新闻发布管理系统</div>
        <Form
          name="normal_login"
          className={styles["login-form"]}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles["login-form-button"]}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
