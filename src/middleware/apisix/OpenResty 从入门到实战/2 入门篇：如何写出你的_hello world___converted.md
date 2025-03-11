---
title: 2 入门篇：如何写出你的 hello world
category:
  - Gateway
order: 2
---

## 专业名词

🔶zlib

🔶PCRE

🔶OpenSSL

🔶CLI

命令行界面（Command Line Interface）


## 思维导图
![](./images/20250311_2335394305.png)



## 实验环境
+ Windows
+ Ubuntu 22.04.3 LTS (GNU/Linux 5.15.167.4-microsoft-standard-WSL2 x86_64)



## OpenResty 安装
[OpenResty - OpenResty® Linux Packages](https://openresty.org/en/linux-packages.html)

[OpenResty - OpenResty® Linux 包](https://openresty.org/cn/linux-packages.html#ubuntu)	

```bash
root@DESKTOP-42B4J2H:~# sudo apt-get -y install --no-install-recommends wget gnupg ca-certificates lsb-release
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
lsb-release is already the newest version (11.1.0ubuntu4).
lsb-release set to manually installed.
ca-certificates is already the newest version (20240203~22.04.1).
ca-certificates set to manually installed.
gnupg is already the newest version (2.2.27-3ubuntu2.1).
gnupg set to manually installed.
wget is already the newest version (1.21.2-2ubuntu1.1).
wget set to manually installed.
0 upgraded, 0 newly installed, 0 to remove and 69 not upgraded.
```

```bash
root@DESKTOP-42B4J2H:~# wget -O - https://openresty.org/package/pubkey.gpg | sudo gpg --dearmor -o /usr/share/keyrings/openresty.gpg
--2025-01-23 21:29:25--  https://openresty.org/package/pubkey.gpg
Resolving openresty.org (openresty.org)... 121.40.24.190
Connecting to openresty.org (openresty.org)|121.40.24.190|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 1688 (1.6K) [text/plain]
Saving to: ‘STDOUT’

-                                     100%[=======================================================================>]   1.65K  --.-KB/s    in 0s

2025-01-23 21:29:26 (168 MB/s) - written to stdout [1688/1688]
```

```bash
root@DESKTOP-42B4J2H:~# echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/openresty.gpg] http://openresty.org/package/ubuntu $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/openresty.list > /dev/null
```

```bash
root@DESKTOP-42B4J2H:~# sudo apt-get update
Hit:1 http://archive.ubuntu.com/ubuntu jammy InRelease
Get:2 http://archive.ubuntu.com/ubuntu jammy-updates InRelease [128 kB]
Get:3 http://openresty.org/package/ubuntu jammy InRelease [4720 B]
Get:4 http://openresty.org/package/ubuntu jammy/main amd64 Packages [35.7 kB]
Get:5 http://security.ubuntu.com/ubuntu jammy-security InRelease [129 kB]
Get:6 http://security.ubuntu.com/ubuntu jammy-security/main amd64 Packages [2041 kB]
Get:7 http://security.ubuntu.com/ubuntu jammy-security/universe amd64 Packages [960 kB]
Get:8 http://archive.ubuntu.com/ubuntu jammy-backports InRelease [127 kB]
Get:9 http://archive.ubuntu.com/ubuntu jammy-updates/main amd64 Packages [2277 kB]
Get:10 http://archive.ubuntu.com/ubuntu jammy-updates/main Translation-en [382 kB]
Get:11 http://archive.ubuntu.com/ubuntu jammy-updates/universe amd64 Packages [1183 kB]
Get:12 http://archive.ubuntu.com/ubuntu jammy-backports/universe amd64 Packages [30.0 kB]
Get:13 http://archive.ubuntu.com/ubuntu jammy-backports/universe Translation-en [16.6 kB]
Fetched 7314 kB in 30s (246 kB/s)
Reading package lists... Done
```

```bash
root@DESKTOP-42B4J2H:~# sudo apt-get -y install openresty
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  openresty-openssl3 openresty-opm openresty-pcre2 openresty-resty openresty-zlib
Suggested packages:
  openresty-restydoc
The following NEW packages will be installed:
  openresty openresty-openssl3 openresty-opm openresty-pcre2 openresty-resty openresty-zlib
0 upgraded, 6 newly installed, 0 to remove and 69 not upgraded.
Need to get 4169 kB of archives.
After this operation, 13.3 MB of additional disk space will be used.
Get:1 http://openresty.org/package/ubuntu jammy/main amd64 openresty-zlib amd64 1.3.1-1~jammy1 [57.9 kB]
Get:2 http://openresty.org/package/ubuntu jammy/main amd64 openresty-openssl3 amd64 3.0.15-1~jammy1 [2192 kB]
Get:3 http://openresty.org/package/ubuntu jammy/main amd64 openresty-pcre2 amd64 10.44-1~jammy1 [513 kB]
Get:4 http://openresty.org/package/ubuntu jammy/main amd64 openresty amd64 1.27.1.1-1~jammy1 [1372 kB]
Get:5 http://openresty.org/package/ubuntu jammy/main amd64 openresty-resty all 1.27.1.1-1~jammy1 [14.3 kB]
Get:6 http://openresty.org/package/ubuntu jammy/main amd64 openresty-opm amd64 1.27.1.1-1~jammy1 [19.8 kB]
Fetched 4169 kB in 9s (467 kB/s)
Selecting previously unselected package openresty-zlib.
(Reading database ... 24289 files and directories currently installed.)
Preparing to unpack .../0-openresty-zlib_1.3.1-1~jammy1_amd64.deb ...
Unpacking openresty-zlib (1.3.1-1~jammy1) ...
Selecting previously unselected package openresty-openssl3.
Preparing to unpack .../1-openresty-openssl3_3.0.15-1~jammy1_amd64.deb ...
Unpacking openresty-openssl3 (3.0.15-1~jammy1) ...
Selecting previously unselected package openresty-pcre2.
Preparing to unpack .../2-openresty-pcre2_10.44-1~jammy1_amd64.deb ...
Unpacking openresty-pcre2 (10.44-1~jammy1) ...
Selecting previously unselected package openresty.
Preparing to unpack .../3-openresty_1.27.1.1-1~jammy1_amd64.deb ...
Unpacking openresty (1.27.1.1-1~jammy1) ...
Selecting previously unselected package openresty-resty.
Preparing to unpack .../4-openresty-resty_1.27.1.1-1~jammy1_all.deb ...
Unpacking openresty-resty (1.27.1.1-1~jammy1) ...
Selecting previously unselected package openresty-opm.
Preparing to unpack .../5-openresty-opm_1.27.1.1-1~jammy1_amd64.deb ...
Unpacking openresty-opm (1.27.1.1-1~jammy1) ...
Setting up openresty-zlib (1.3.1-1~jammy1) ...
Setting up openresty-pcre2 (10.44-1~jammy1) ...
Setting up openresty-openssl3 (3.0.15-1~jammy1) ...
Setting up openresty (1.27.1.1-1~jammy1) ...
Created symlink /etc/systemd/system/multi-user.target.wants/openresty.service → /lib/systemd/system/openresty.service.
Setting up openresty-resty (1.27.1.1-1~jammy1) ...
Setting up openresty-opm (1.27.1.1-1~jammy1) ...
Processing triggers for libc-bin (2.35-0ubuntu3.8) ...
```



## OpenResty CLI
🔶`which resty`

```bash
root@DESKTOP-42B4J2H:~# which resty
/usr/bin/resty
```

🔶NGINX 配置 + Lua 代码==>共享内存字典的设置和查询？

```bash
resty --shdict='dogs 1m' -e 'local dict = ngx.shared.dogs
dict:set("Tom", 56)
print(dict:get("Tom"))'
```

```bash
root@DESKTOP-42B4J2H:~# resty --shdict='dogs 1m' -e 'local dict = ngx.shared.dogs
> dict:set("Tom", 56)
> print(dict:get("Tom"))'
56
```

🔶调试工具：gbd、valgrind、systemtap、Mozilla rr



## hello world
🔶方式一

```bash
root@DESKTOP-42B4J2H:~# resty -e "ngx.say('hello world')"
hello world
```

🔶方式二

创建工作目录及配置文件

```bash
root@DESKTOP-42B4J2H:~/geektime# ls
conf  logs
root@DESKTOP-42B4J2H:~/geektime# cd conf/
root@DESKTOP-42B4J2H:~/geektime/conf# ls
nginx.conf
root@DESKTOP-42B4J2H:~/geektime/conf# cat nginx.conf
events {
    worker_connections 1024;
}

http {
    server {
        listen 8080;
        location / {
            content_by_lua '
                    ngx.say("hello, world")
                    ';
        }
    }
}
```

测试 openresty 是否加入到 PATH 环境：

```bash
root@DESKTOP-42B4J2H:~/geektime/conf# openresty -v
nginx version: openresty/1.27.1.1
```

启动 OpenResty 服务：

```bash
root@DESKTOP-42B4J2H:~/geektime# ls
conf  logs
root@DESKTOP-42B4J2H:~/geektime# openresty -p 'pwd' -c conf/nginx.conf
nginx: [alert] could not open error log file: open() "pwd/logs/error.log" failed (2: No such file or directory)
2025/01/23 22:13:49 [emerg] 12899#12899: open() "pwd/conf/nginx.conf" failed (2: No such file or directory)
root@DESKTOP-42B4J2H:~/geektime# openresty -p `pwd` -c conf/nginx.conf
```

curl 测试返回结果：

```bash
root@DESKTOP-42B4J2H:~/geektime# curl -i 127.0.0.1:8080
HTTP/1.1 200 OK
Server: openresty/1.27.1.1
Date: Thu, 23 Jan 2025 14:16:05 GMT
Content-Type: text/plain
Transfer-Encoding: chunked
Connection: keep-alive

hello, world
```

# 
