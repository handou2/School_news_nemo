![project demo](http://bytes.isekko.cn/Fk2Dna8A48M0fXmCHhh3std_wnGe)

## Available Scripts

In the project directory, you can run:

### `npm start`

启动项目前别忘了安装依赖: `npm i`

### `ts重构项目`

安装各种包哈哈.

因为我们需要模块化添加样式,本项目采用 sass.

npm 命令:`npm i sass`.

下一步:安装我们的样式文件.

antd:`npm add antd` (别忘了在 src/App.css 文件顶部引入 `@import '~antd/dist/antd.css';`).

我们看到 antd 里面还有一些高级配置:自定义主题 本项目就不再配置,采用默认主题.

好的现在来看一下本项目的架构:.

```
--src
    ---components(这里放我们的组件)
    ---pages(这里放我们的页面)
```

关于路由:我们的侧边栏路由由后端传入(动态渲染).

```
npm install react-router-dom
```

安装 redux: `npm install redux --save.`

安装 axios: `npm i axios.`

这里给大家推荐一个动态背景库: https://github.com/lindelof/particles-bg 地址在这里.

显示进度条的插件: `npm i --save-dev @types/nprogress`.

关于 toastify:

这里推荐一个消息弹出提示库,地址:https://github.com/fkhadra/react-toastify.
为了方便使用我们这里需要对 toastify 进行一些封装:npm install --save react-toastify.
本项目将封装成一个组件,并在 index.tsx 中引入.

这里有个小技巧:  
component 和 page,为了避免引入组件和页面造成过多杂乱代码的问题.
我们可以在每一个组件和页面中新建一个 index.ts 文件,作为我们的统一导出文件夹,然后在 components 和 pages 文件夹下新建一个 index.ts 文件,作为每一个小文件夹的导出文件.
如下我们就可以轻松引入 component 和 page：

```
import { SignIn, SandBox } from "../pages";
import { SideMenu, TopHeader, NewsRouter } from "../../components";
```

解决 react-router-dom V6 路由嵌套时子路由无法显示的问题：

在 v6 中，所有路由路径始终是完全匹配,不再像 v4/5 中那样匹配路径前缀.父/根路径需要指定 _ 通配符,以便它们现在可以进行"前缀"匹配,所以解决办法是加上通配符_

`<Route path="/*" element={<NewsSandBox />} />`

我们将采用 Redux Toolkit 来管理我们的全局状态,这里附上官网地址：http://cn.redux.js.org/redux-toolkit/overview/,其中有介绍相比于直接使用redux带给我们的好处

首页中我们需要引入 Echarts,展示数据(ps:由于没有找到 Echarts 关于 ts 的官方文档,这里还是采用 js 的写法)

TS 项目中引入 lodash 库的正确姿势:

```
npm i lodash
npm i -D @types/lodash
```
