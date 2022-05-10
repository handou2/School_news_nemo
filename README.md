# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

[![登录页面]("http://bytes.isekko.cn/FluQihAicVJYPMMNwQEYtPuVKIff").\

启动项目前别忘了安装依赖:npm i.\
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `ts重构项目-first day`

安装各种包哈哈.\

因为我们需要模块化添加样式,本项目采用 sass.\

npm 命令:npm i sass.\

下一步:安装我们的样式文件.\

antd:npm add antd (别忘了在 src/App.css 文件顶部引入 @import '~antd/dist/antd.css';).\

我们看到 antd 里面还有一些高级配置:自定义主题 本项目就不再配置,采用默认主题.\

好的现在来看一下本项目的架构:.\
--src

---components(这里放我们的组件)

---pages(这里放我们的页面)

关于路由:我们的侧边栏路由由后端传入(动态路由).\
npm install react-router-dom

安装 redux:npm install redux --save.\

安装 axios:npm i axios.\

这里给大家推荐一个动态背景库:https://github.com/lindelof/particles-bg 地址在这里.\

显示进度条的插件:npm i --save-dev @types/nprogress.\

这里推荐一个消息弹出提示库,地址:https://github.com/fkhadra/react-toastify.\

为了方便使用我们这里需要对 toastify 进行一些封装:npm install --save react-toastify.\

本项目将封装成一个组件,并在 index.tsx 中引入
