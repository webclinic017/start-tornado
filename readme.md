# 阿里云函数计算：Tornado 框架

## 本地快速体验

通过该应用，您可以简单快速的创建一个 Tornado 框架到阿里云函数计算服务。

- 下载命令行工具：`npm install -g @serverless-devs/s`
- 初始化一个模版项目：`s init devsapp/start-tornado`
- 进入项目后部署项目：`cd start-tornado && s deploy`

## 阿里云在线体验

[点击此处可以在线体验通过Serverless Devs部署 Tornado 框架到阿里云函数计算](https://api.aliyun.com/new#/tutorial?action=git_open&git_repo=https://github.com/devsapp/devsapp-cloudshell-example.git&tutorial=tutorial/start-tornado.md)

## 额外说明

该框架部署会支持两种模式：
- NAS+Container的模式：这种模式是默认的模式，也可以通过`s cli fc-default set web-framework nas`指定   
  这种模式的好处是，可以尽可能的0改造，包括一些存在当前目录的缓存，上传等，实际的逻辑是函数计算仅作为一个运行环境，代码全部放在NAS中。坏处是，没办法更好的使用函数计算的灰度功能，因为代码存放在nas中，所以灰度会受影响，但是预留不会受到影响；  
- Container的模式：可以通过`s cli fc-default set web-framework container`指定   
  这种模式相对上一个的好处是，代码和环境都会放在函数计算的容器中，相对来说可以更好的支持灰度发布，但是可能涉及到函数的一些改造，例如持久化某些资源等；

-----

> - Serverless Devs 项目：https://www.github.com/serverless-devs/serverless-devs   
> - Serverless Devs 文档：https://www.github.com/serverless-devs/docs   
> - Serverless Devs 钉钉交流群：33947367    
