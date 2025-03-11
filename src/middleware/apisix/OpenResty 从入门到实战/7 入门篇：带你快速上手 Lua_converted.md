---
title: 7 入门篇：带你快速上手 Lua
category:
  - Gateway
order: 7
---

## 思维导图
![](./images/20250311_2337017487.png)


## 环境
使用`openresty -V`查看 OpenResty 安装位置：

```bash
root@DESKTOP-42B4J2H:/opt/lua# openresty -V
nginx version: openresty/1.27.1.1
built with OpenSSL 3.0.15 3 Sep 2024
TLS SNI support enabled
configure arguments: --prefix=/usr/local/openresty/nginx...
```

切换到`usr/local/openresty`可以看到`luajit`目录，将其路径加入到环境变量：

```bash
export PATH=/usr/local/openresty/luajit/bin:$PATH
```

接下来便可以使用`luajit`命令。

