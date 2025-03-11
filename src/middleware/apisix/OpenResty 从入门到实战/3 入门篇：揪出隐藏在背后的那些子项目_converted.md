---
title: 3 入门篇：揪出隐藏在背后的那些子项目
category:
  - Gateway
order: 3
---

## 思维导图
![](./images/20250311_2336144171.png)



## 把 Lua 代码从 nginx.conf 中抽取出来
创建 hello.lua 文件：

```bash
root@DESKTOP-42B4J2H:~/geektime# cd lua
root@DESKTOP-42B4J2H:~/geektime/lua# ls
root@DESKTOP-42B4J2H:~/geektime/lua# vi hello.lua
root@DESKTOP-42B4J2H:~/geektime/lua# ls
hello.lua
root@DESKTOP-42B4J2H:~/geektime/lua# cat hello.lua
ngx.say("hello, world")
```

修改 nginx.conf 文件：

```bash
root@DESKTOP-42B4J2H:~/geektime/lua# cd ..
root@DESKTOP-42B4J2H:~/geektime# cd conf
root@DESKTOP-42B4J2H:~/geektime/conf# vi nginx.conf
root@DESKTOP-42B4J2H:~/geektime/conf# cat nginx.conf
events {
    worker_connections 1024;
}

http {
    server {
        listen 8080;
        location / {
            content_by_lua_file lua/hello.lua;
        }
    }
}
```

重启 OpenResty 服务：

```bash
root@DESKTOP-42B4J2H:~/geektime/conf# sudo kill -HUP `cat logs/nginx.pid`
cat: logs/nginx.pid: No such file or directory

Usage:
 kill [options] <pid> [...]

Options:
 <pid> [...]            send signal to every <pid> listed
 -<signal>, -s, --signal <signal>
                        specify the <signal> to be sent
 -q, --queue <value>    integer value to be sent with the signal
 -l, --list=[<signal>]  list all signal names, or convert one to a name
 -L, --table            list all signal names in a nice table

 -h, --help     display this help and exit
 -V, --version  output version information and exit

For more details see kill(1).

root@DESKTOP-42B4J2H:~/geektime/conf# cat logs/nginx.pid
cat: logs/nginx.pid: No such file or directory

root@DESKTOP-42B4J2H:~/geektime/conf# cd ..

root@DESKTOP-42B4J2H:~/geektime# cat logs/nginx.pid
12988

root@DESKTOP-42B4J2H:~/geektime# sudo kill -HUP `cat logs/nginx.pid`
kill: (12988): No such process
```

```bash
root@DESKTOP-42B4J2H:~/geektime# openresty -p `pwd` -c conf/nginx.conf

root@DESKTOP-42B4J2H:~/geektime# curl -i 127.0.0.1:8080
HTTP/1.1 503 Service Temporarily Unavailable
Server: openresty/1.27.1.1
Date: Sat, 25 Jan 2025 03:00:46 GMT
Content-Type: text/html
Content-Length: 203
Connection: keep-alive

<html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>openresty/1.27.1.1</center>
</body>
</html>
```

```bash
root@DESKTOP-42B4J2H:~/geektime# cd logs

root@DESKTOP-42B4J2H:~/geektime/logs# ls
access.log  error.log  nginx.pid

root@DESKTOP-42B4J2H:~/geektime/logs# cat access.log
127.0.0.1 - - [23/Jan/2025:22:16:05 +0800] "GET / HTTP/1.1" 200 23 "-" "curl/7.81.0"
127.0.0.1 - - [25/Jan/2025:11:00:46 +0800] "GET / HTTP/1.1" 503 203 "-" "curl/7.81.0"
127.0.0.1 - - [25/Jan/2025:11:03:07 +0800] "GET / HTTP/1.1" 503 203 "-" "curl/7.81.0"
```

```bash
root@DESKTOP-42B4J2H:~/geektime/logs# cat error.log
2025/01/25 11:00:46 [error] 3492#3492: *1 failed to load external Lua file "/root/geektime/lua/hello.lua": cannot open /root/geektime/lua/hello.lua: Permission denied, client: 127.0.0.1, server: , request: "GET / HTTP/1.1", host: "127.0.0.1:8080"
2025/01/25 11:03:07 [error] 3977#3977: *2 failed to load external Lua file "/root/geektime/lua/hello.lua": cannot open /root/geektime/lua/hello.lua: Permission denied, client: 127.0.0.1, server: , request: "GET / HTTP/1.1", host: "127.0.0.1:8080"
2025/01/25 11:09:01 [error] 3977#3977: *3 failed to load external Lua file "/root/geektime/lua/hello.lua": cannot open /root/geektime/lua/hello.lua: Permission denied, client: 127.0.0.1, server: , request: "GET / HTTP/1.1", host: "127.0.0.1:8080"
```

```bash
root@DESKTOP-42B4J2H:~/geektime/lua# namei -l /root/geektime/lua/hello.lua
f: /root/geektime/lua/hello.lua
drwxr-xr-x root   root    /
drwx------ root   root    root
drwxr-xr-x root   root    geektime
drwxr-xr-x root   root    lua
-rwxrwxrwx nobody nogroup hello.lua
```

从 `nami -l`输出可以看到`/root`目录的权限是`drwx------`，只有`root`用户能访问该目录及其下文件；OpenResty 的 worker 进程是以`nobody`用户运行，无法穿过`/root`目录访问`/root/geektime/lua/hello.lua`。



在原有`/root/geektime`目录关闭原有 OpenResty 相关进程：

`openresty -s quit -p `pwd` -c conf/nginx.conf` 

并使用`ps aux | grep nginx`确认是否全部关闭，

若没有则使用`kill -QUIT <pid>`；



将原有文件移动到更加合适的位置，这里移动到：`/opt`；

重新创建：

`/opt/logs`、`/opt/conf/nginx.conf`、`/opt/lua/hello.lua`

使用`openresty -p `pwd` -c conf/nginx.conf`启动 OpenResty 服务；

```bash
root@DESKTOP-42B4J2H:/opt/geektime/conf# cat nginx.conf
events {
    worker_connections 1024;
}

http {
    server {
        listen 8080;
        lua_code_cache off; # 开发环境
        location / {
            content_by_lua_file lua/hello.lua;
        }
    }
}
```

使用 curl 验证 Lua 代码是否已成功从 nginx.conf 抽取出来：

```bash
curl -i http://127.0.0.1:8080
```

```bash
root@DESKTOP-42B4J2H:/opt/geektime/lua# curl -i http://127.0.0.1:8080
HTTP/1.1 200 OK
Server: openresty/1.27.1.1
Date: Sat, 25 Jan 2025 06:28:59 GMT
Content-Type: text/plain
Transfer-Encoding: chunked
Connection: keep-alive

hello, world
```



## OpenResty 目录结构
`openresty -V`

```bash
root@DESKTOP-42B4J2H:/opt/geektime/conf# openresty -V 2>&1 | sed 's/--/\n--/g'
nginx version: openresty/1.27.1.1
built with OpenSSL 3.0.15 3 Sep 2024
TLS SNI support enabled
configure arguments:
--prefix=/usr/local/openresty/nginx
--with-cc-opt='-O2 -DNGX_LUA_ABORT_AT_PANIC -I/usr/local/openresty/zlib/include -I/usr/local/openresty/pcre2/include -I/usr/local/openresty/openssl3/include'
--add-module=../ngx_devel_kit-0.3.3
--add-module=../echo-nginx-module-0.63
--add-module=../xss-nginx-module-0.06
--add-module=../ngx_coolkit-0.2
--add-module=../set-misc-nginx-module-0.33
--add-module=../form-input-nginx-module-0.12
--add-module=../encrypted-session-nginx-module-0.09
--add-module=../srcache-nginx-module-0.33
--add-module=../ngx_lua-0.10.27
--add-module=../ngx_lua_upstream-0.07
--add-module=../headers-more-nginx-module-0.37
--add-module=../array-var-nginx-module-0.06
--add-module=../memc-nginx-module-0.20
--add-module=../redis2-nginx-module-0.15
--add-module=../redis-nginx-module-0.3.9
--add-module=../ngx_stream_lua-0.0.15
--with-ld-opt='-Wl,-rpath,/usr/local/openresty/luajit/lib -L/usr/local/openresty/zlib/lib -L/usr/local/openresty/pcre2/lib -L/usr/local/openresty/openssl3/lib -Wl,-rpath,/usr/local/openresty/zlib/lib:/usr/local/openresty/pcre2/lib:/usr/local/openresty/openssl3/lib'
--with-pcre-jit
--with-stream
--with-stream_ssl_module
--with-stream_ssl_preread_module
--with-http_v2_module
--with-http_v3_module
--without-mail_pop3_module
--without-mail_imap_module
--without-mail_smtp_module
--with-http_stub_status_module
--with-http_realip_module
--with-http_addition_module
--with-http_auth_request_module
--with-http_secure_link_module
--with-http_random_index_module
--with-http_gzip_static_module
--with-http_sub_module
--with-http_dav_module
--with-http_flv_module
--with-http_mp4_module
--with-http_slice_module
--with-http_gunzip_module
--with-threads
--with-compat
--with-stream
--with-http_ssl_module
```

```bash
root@DESKTOP-42B4J2H:/opt/geektime/conf# cd /usr/local/openresty
root@DESKTOP-42B4J2H:/usr/local/openresty# ls
bin  luajit  lualib  nginx  openssl3  pcre2  site  zlib
```

