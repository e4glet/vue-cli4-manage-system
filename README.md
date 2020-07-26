

# Vue4 manager system

<a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-4.4.6-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/ElemeFE/element">
    <img src="https://img.shields.io/badge/element--ui-2.13.2-brightgreen.svg" alt="element-ui">
  </a>
  <a href="https://github.com/e4glet/vue-cli4-manage-system/blob/master/LICENSE">
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


### 项目打包
```
npm run build
```
vue.config.js为打包配置文件。
打包生成的dist目录为最终生成的vue应用目录，将其放置服务器即可。


### Docker部署
1. 编写docker-compose.yaml  
```c
version: '2.1'
services:
  nginx:
    restart: always
    image: nginx
    volumes:
      #~ /var/local/nginx/nginx.conf为本机目录, /etc/nginx为容器目录
      - /var/local/nginx/nginx.conf:/etc/nginx/nginx.conf
      #~ /var/local/app/dist 为本机 build 后的dist目录, /usr/src/app为容器目录,
      - /var/local/app/dist:/usr/src/app
    ports:
      - 80:80
    privileged: true
```

2. 编写 nginx.conf 配置  
```c
#user  nobody;

worker_processes  2;

#工作模式及连接数上线
events {
    worker_connections  1024;   #单个工作进程 处理进程的最大并发数
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    #sendfile 指令指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，对于普通应用，
    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    # 开启GZIP
    gzip  on;

    # # 监听 80 端口，转发请求到 3000 端口
    server {
        #监听端口
        listen      80;
        #编码格式
        charset utf-8;

        # 前端静态文件资源
        location / {
        root  /usr/src/app;
            index index.html index.htm;
            try_files $uri $uri/ @rewrites;
        }
        # 配置如果匹配不到资源，将url指向 index.html， 在 vue-router 的 history 模式下使用，就不会显示404
        location @rewrites {
            rewrite ^(.*)$ /index.html last;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}
```

3. 执行 docker-compose
```c
docker-compose -d up
```

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
