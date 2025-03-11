---
title: 3 APISIX 安装指南
category:
  - Gateway
---



## 实验环境

+ Ubuntu 22.04.3 LTS (GNU/Linux 5.15.167.4-microsoft-standard-WSL2 x86_64)
+ docker desktop（Windows）



## 安装 APISIX
通过`git clone`拉取仓库

```bash
root@DESKTOP-42B4J2H:~# git clone https://github.com/apache/apisix-docker.git
Cloning into 'apisix-docker'...
remote: Enumerating objects: 2528, done.
remote: Counting objects: 100% (390/390), done.
remote: Compressing objects: 100% (131/131), done.
remote: Total 2528 (delta 352), reused 259 (delta 258), pack-reused 2138 (from 3)
Receiving objects: 100% (2528/2528), 473.72 KiB | 1.42 MiB/s, done.
Resolving deltas: 100% (1370/1370), done.
```

通过`docker compose`管理和操作 docker 容器组合

```bash
root@DESKTOP-42B4J2H:~/apisix-docker/example# docker-compose -p docker-apisix up -d
WARN[0000] /root/apisix-docker/example/docker-compose.yml: the attribute `version` is obsolete, it will be ignored, please remove it to avoid potential confusion
[+] Running 31/31
 ✔ web2 Pulled                                                                                                                                  32.7s
 ✔ prometheus Pulled                                                                                                                            41.7s
   ✔ e5d9363303dd Pull complete                                                                                                                 12.2s
   ✔ 3430c2c42129 Pull complete                                                                                                                 13.2s
   ✔ 2bfce3fbbe89 Pull complete                                                                                                                 19.2s
   ✔ 15a994fbbcfe Pull complete                                                                                                                 19.8s
   ✔ fbaf3df466ad Pull complete                                                                                                                 19.9s
   ✔ 783f8704483c Pull complete                                                                                                                 19.9s
   ✔ 9521b00d1968 Pull complete                                                                                                                 20.0s
   ✔ 0c8d377aea78 Pull complete                                                                                                                 20.0s
   ✔ dda53f010c34 Pull complete                                                                                                                 20.0s
   ✔ e3f24c1b9efe Pull complete                                                                                                                 20.1s
   ✔ bc4648b14506 Pull complete                                                                                                                 20.2s
   ✔ 4b1496283cf8 Pull complete                                                                                                                 20.3s
 ✔ etcd Pulled                                                                                                                                  50.2s
   ✔ 3bd5d758f760 Pull complete                                                                                                                 26.8s
 ✔ grafana Pulled                                                                                                                               34.6s
   ✔ 801bfaa63ef2 Pull complete                                                                                                                  3.0s
   ✔ efdb3434c59e Pull complete                                                                                                                  6.3s
   ✔ 8cbdb3f56d34 Pull complete                                                                                                                  7.0s
   ✔ 34f82d4bd2ec Pull complete                                                                                                                  7.4s
   ✔ af445b3382af Pull complete                                                                                                                 15.7s
   ✔ 4f4fb700ef54 Pull complete                                                                                                                 15.8s
   ✔ 8aab09bbec8e Pull complete                                                                                                                 15.8s
   ✔ 9e81c23e3db5 Pull complete                                                                                                                 15.9s
 ✔ web1 Pulled                                                                                                                                  32.7s
   ✔ cbdbe7a5bc2a Pull complete                                                                                                                 11.7s
   ✔ 10c113fb0c77 Pull complete                                                                                                                 12.6s
   ✔ 9ba64393807b Pull complete                                                                                                                 12.7s
   ✔ 262f9908119d Pull complete                                                                                                                 12.7s
   ✔ c4a057508f96 Pull complete                                                                                                                 13.2s
[+] Running 8/8
 ✔ Network docker-apisix_apisix          Created                                                                                                 0.1s
 ✔ Volume "docker-apisix_etcd_data"      Created                                                                                                 0.0s
 ✔ Container docker-apisix-prometheus-1  Started                                                                                                 4.4s
 ✔ Container docker-apisix-etcd-1        Started                                                                                                 4.1s
 ✔ Container docker-apisix-web1-1        Started                                                                                                 4.4s
 ✔ Container docker-apisix-web2-1        Started                                                                                                 4.5s
 ✔ Container docker-apisix-grafana-1     Started                                                                                                 4.5s
 ✔ Container docker-apisix-apisix-1      Started
```

验证：

```bash
root@DESKTOP-42B4J2H:~/apisix-docker/example# curl http://127.0.0.1:9080 -i
HTTP/1.1 404 Not Found
Date: Fri, 24 Jan 2025 07:50:30 GMT
Content-Type: text/plain; charset=utf-8
Transfer-Encoding: chunked
Connection: keep-alive
Server: APISIX/3.11.0

{"error_msg":"404 Route Not Found"}
```



## dashboard
VSCode 打开`\\wsl.localhost\Ubuntu-22.04\root\apisix-docker`；

`./compose/apisix_conf/dashboard-compose.yaml`文件中的内容复制到

`./example/docker-compose.yml`文件，并进行部分修改；

```yaml
dashboard:
    image: "apache/apisix-dashboard"
    restart: always
    volumes:
      - ./dashboard_conf/conf.yaml:/usr/local/apisix-dashboard/conf/conf.yaml:ro
    depends_on:
      - etcd
    ports:
      - "9093:9093/tcp"
    networks:
      - apisix
```

![](./images/20250311_2316031321.png)

随后，将`./all-in-one/apisix-dashboard`文件内容复制到`./example`并改名为`dashboard_conf`：

![](./images/20250311_2316037686.png)

修改`./example/dashboard_conf/conf.yaml`内容：

```bash
conf:
  listen:
    host: 0.0.0.0     # `manager api` listening ip or host name
    port: 9000          # `manager api` listening port
    # port: 9093
  etcd:
    endpoints:          # supports defining multiple etcd host addresses for an etcd cluster
      # - 127.0.0.1:2379
      - etcd:2379
```

Ubuntu 22.04.3 LTS 目录切换到`cd /root/apisix-docker/example`；

运行：`docker-compose -p docker-apisix-with-dashboard up -d`

```bash
root@DESKTOP-42B4J2H:~/apisix-docker/example# docker-compose -p docker-apisix-with-dashboard up -d
WARN[0000] /root/apisix-docker/example/docker-compose.yml: the attribute `version` is obsolete, it will be ignored, please remove it to avoid potential confusion
[+] Running 6/6
 ✔ dashboard Pulled                                                                                                                             27.2s
   ✔ a1d0c7532777 Pull complete                                                                                                                 19.0s
   ✔ ccf94a580e14 Pull complete                                                                                                                 19.0s
   ✔ 779bc280dd86 Pull complete                                                                                                                 19.3s
   ✔ 149e8bbdbe8b Pull complete                                                                                                                 20.8s
   ✔ 3a16dd913396 Pull complete                                                                                                                 20.8s
[+] Running 8/8
 ✔ Network docker-apisix-with-dashboard_apisix          Created                                                                                  0.1s
 ✔ Container docker-apisix-with-dashboard-web2-1        Started                                                                                  8.0s
 ✔ Container docker-apisix-with-dashboard-prometheus-1  Started                                                                                  8.0s
 ✔ Container docker-apisix-with-dashboard-etcd-1        Started                                                                                  7.0s
 ✔ Container docker-apisix-with-dashboard-grafana-1     Started                                                                                  7.5s
 ✔ Container docker-apisix-with-dashboard-web1-1        Started                                                                                  8.0s
 ✔ Container docker-apisix-with-dashboard-apisix-1      Started                                                                                  2.8s
 ✔ Container docker-apisix-with-dashboard-dashboard-1   Started                                                                                  2.5s
```

测试：

```bash
root@DESKTOP-42B4J2H:~/apisix-docker/example# curl http://127.0.0.1:9093 --head
HTTP/1.1 200 OK
Accept-Ranges: bytes
Content-Length: 6712
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:
Content-Type: text/html; charset=utf-8
Last-Modified: Wed, 12 Apr 2023 02:49:17 GMT
X-Frame-Options: deny
X-Request-Id: a79b03da-ee54-45fd-8bba-70191ac5fdc5
Date: Fri, 24 Jan 2025 09:56:14 GMT
```

Windows 使用浏览器访问`127.0.0.1:9093`：

![](./images/20250311_2316034064.png)

账户：admin，密码：admin

![](./images/20250311_2316045394.png)

点击插件出现空白页？

![](./images/20250311_2316047892.png)

![](./images/20250311_2316049567.png)

![](./images/20250311_2316047521.png)

![](./images/20250311_2316058655.png)

# 
