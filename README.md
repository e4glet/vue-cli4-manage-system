

# Vue4 manager system

<a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-4.4.6-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/ElemeFE/element">
    <img src="https://img.shields.io/badge/element--ui-2.13.2-brightgreen.svg" alt="element-ui">
  </a>
  <a href="https://gitee.com/e4glet/vue-cli4-framwork/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>

### 介绍
基于 Vue4 + Element UI 的后台管理系统模版，参考了其他项目的特点，综合功能。
数据操作使用async await进行异步处理。


### 效果展示
![输入图片说明](https://images.gitee.com/uploads/images/2020/0725/224122_a4b9836a_1651640.png "QQ图片20200725214713.png")

### 框架版本
1. nodejs v12.16.1
2. vue/cli 4.4.6
3. element-ui/2.13.2


### 框架结构

```c
    src             --  资源目录
        api         --  请求接口
        axios       --  封装axios
        assets      --  静态资源文件
        components  --  组件
        router      --  路由，负责指定页面链接
        service     --  服务层，数据联调，引入请求
        store       --  Vuex
        views       --  视图页面
        main.js     --  入口文件
```


## 项目安装
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### 默认项目访问入口
http://localhost:8080/

### 修改vue默认端口方法  
在“nodemodules文件夹”→“@vue”→“@cli-service”→“lib”→“commands”→“serve.js”中，修改默认端口
```c
const defaults = {
  host: '0.0.0.0',
  port: 8089,               -- 这里修改
  https: false
}
```

### 参考项目
1. https://github.com/lin-xin/vue-manage-system
2. https://github.com/yqrong/vvproject


### 更新日志
- 2020年7月25日
1. 增加tags标签功能
2. 增加全屏显示功能

- 2020年7月21日
1. 扩展了后台管理模版

- 2020年7月13日
1. 精简完善axios示例，与后端SpringMVC对接
2. 增加Qs引入并配置全局方法

- 2020年7月12日
1. 安装axios，并对axios模块进行封装
2. 增加使用axios示例

- 2020年7月9日
1. 上传vuecli4基础框架，包含router，vuex；
2. 增加登录验证示例，使用localStorage存储本地用户信息
