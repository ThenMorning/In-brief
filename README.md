# In-brief

* > 简说
* > 一个使用mpvue构建的小程序
* > 旨在学习全栈式开发

# Function

* 发布，点赞，评论的一整套流程
* 登录校验
* 即围绕"`动态`"这一实体的CURD

# Doc
[[实践]mpvue及koa2全栈开发小程序](https://segmentfault.com/a/1190000016354488)

# Server

To run the server , look at it [In-brief-server](https://github.com/WinwardZ/In-brief-server)

# Build Setup

``` bash
# install dependencies
npm install

# run Server and Client
运行好服务端和客户端，你需要去微信申请一个小程序的appid，具体请自行查询
之后在微信的ide中打开本项目的dist文件夹作为小程序的项目目录
电脑和手机保持在同一个局域网下
`ipconfig` 查看无线网适配器的 Ipv4的地址作为下方的Server ip

# config base url
edit src/utils/fetchData.js
const getBaseUrl = () => {
  return 'http://192.168.123.1:3000/api/' => 这里替换成你的Server ip
}

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# Rendering

 <img width="300" src="https://github.com/WinwardZ/In-brief/blob/master/rendering/index.PNG"/>
 <img width="300" src="https://github.com/WinwardZ/In-brief/blob/master/rendering/publish.PNG"/>
  <img width="300" src="https://github.com/WinwardZ/In-brief/blob/master/rendering/me.PNG"/>
  <img width="300" src="https://github.com/WinwardZ/In-brief/blob/master/rendering/detail.PNG"/>
  <img width="300" src="https://github.com/WinwardZ/In-brief/blob/master/rendering/comment.PNG"/>
  <img width="300" src="https://github.com/WinwardZ/In-brief/blob/master/rendering/comment_success.PNG"/>

