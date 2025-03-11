---
title: 2 Getting Started
category:
  - Gateway
---



## 实验环境

+ Windows
+ docker desktop（WSL2）

```plain
Windows
  └── WSL2（Linux 内核环境）
        └── Docker 容器
```



## 入门指南
### 安装 APISIX
```bash
curl -sL https://run.api7.ai/apisix/quickstart | sh
```

qucikstart 文件内容：

```bash
#!/bin/bash

#
# Licensed to the Apache Software Foundation (ASF) under one or more
# contributor license agreements.  See the NOTICE file distributed with
# this work for additional information regarding copyright ownership.
# The ASF licenses this file to You under the Apache License, Version 2.0
# (the "License"); you may not use this file except in compliance with
# the License.  You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

DEFAULT_ETCD_IMAGE_NAME="bitnami/etcd"
DEFAULT_ETCD_IMAGE_TAG="3.5.7"

DEFAULT_APISIX_IMAGE_NAME="apache/apisix"
DEFAULT_APISIX_IMAGE_TAG="3.11.0-debian"

DEFAULT_ETCD_LISTEN_PORT=2379
DEFAULT_APISIX_PORT=9180

DEFAULT_ETCD_NAME="etcd-quickstart"
DEFAULT_APP_NAME="apisix-quickstart"
DEFAULT_NET_NAME="apisix-quickstart-net"

usage() {
  echo "Runs a Docker based Apache APISIX."
  echo
  echo "See the document for more information:"
  echo "  https://docs.api7.ai/apisix/getting-started"
  exit 0
}

echo_fail() {
  printf "\e[31m✘ \e[0m$@\n"
}

echo_pass() {
  printf "\e[32m✔ \e[0m$@\n"
}

echo_warning() {
  printf "\e[33m⚠ $@\e[0m\n"
}

ensure_docker() {
  {
    docker ps -q >/dev/null 2>&1
  } || {
    return 1
  }
}

ensure_curl() {
  {
    curl -h >/dev/null 2>&1
  } || {
    return 1
  }
}

install_apisix() {

  echo "Installing APISIX with the quickstart options."
  echo ""

  echo "Creating bridge network ${DEFAULT_NET_NAME}."

  docker network create -d bridge $DEFAULT_NET_NAME && echo_pass "network ${DEFAULT_NET_NAME} created" || {
    echo_fail "Create network failed!"
    return 1
  }

  echo ""

  echo "Starting the container ${DEFAULT_ETCD_NAME}."
  docker run -d \
    --name ${DEFAULT_ETCD_NAME} \
    --network=$DEFAULT_NET_NAME \
    -e ALLOW_NONE_AUTHENTICATION=yes \
    -e ETCD_ADVERTISE_CLIENT_URLS=http://${DEFAULT_ETCD_NAME}:${DEFAULT_ETCD_LISTEN_PORT} \
    ${DEFAULT_ETCD_IMAGE_NAME}:${DEFAULT_ETCD_IMAGE_TAG} && echo_pass "etcd is listening on ${DEFAULT_ETCD_NAME}:${DEFAULT_ETCD_LISTEN_PORT}" || {
    echo_fail "Start etcd failed!"
    return 1
  }

  echo ""

  APISIX_DEPLOYMENT_ETCD_HOST="[\"http://${DEFAULT_ETCD_NAME}:${DEFAULT_ETCD_LISTEN_PORT}\"]"

  echo "Starting the container ${DEFAULT_APP_NAME}."
  docker run -d \
    --name ${DEFAULT_APP_NAME} \
    --network=$DEFAULT_NET_NAME \
    -p9080:9080 -p9180:9180 -p9443:9443/tcp -p9443:9443/udp -p9090:9092 -p9100:9100 -p9091:9091 \
    -e APISIX_DEPLOYMENT_ETCD_HOST=${APISIX_DEPLOYMENT_ETCD_HOST} \
    ${DEFAULT_APISIX_IMAGE_NAME}:${DEFAULT_APISIX_IMAGE_TAG} && validate_apisix && sleep 2 || {
    echo_fail "Start APISIX failed!"
    return 1
  }

  docker exec ${DEFAULT_APP_NAME} /bin/bash -c "echo '
apisix:
  enable_control: true
  control:
    ip: "0.0.0.0"
    port: 9092
deployment:
  role: traditional
  role_traditional:
    config_provider: etcd
  admin:
    admin_key_required: false
    allow_admin:
      - 0.0.0.0/0
plugin_attr:
  prometheus:
    export_addr:
      ip: 0.0.0.0
      port: 9091
  ' > /usr/local/apisix/conf/config.yaml"
  docker exec ${DEFAULT_APP_NAME} apisix reload >>/dev/null 2>&1

  echo_warning "WARNING: The Admin API key is currently disabled. You should turn on admin_key_required and set a strong Admin API key in production for security."

  echo ""
}

destroy_apisix() {
  echo "Destroying existing ${DEFAULT_APP_NAME} container, if any."
  echo ""
  docker rm -f $DEFAULT_APP_NAME >>/dev/null 2>&1
  docker rm -f $DEFAULT_ETCD_NAME >>/dev/null 2>&1
  docker network rm $DEFAULT_NET_NAME >>/dev/null 2>&1
  sleep 2
}

validate_apisix() {
  local rv=0
  retry 30 curl "http://localhost:${DEFAULT_APISIX_PORT}/apisix/admin/services" >>/dev/null 2>&1 && echo_pass "APISIX is up" || rv=$?
}

main() {
  ensure_docker || {
    echo_fail "Docker is not available, please install it first"
    exit 1
  }

  ensure_curl || {
    echo_fail "curl is not available, please install it first"
    exit 1
  }

  destroy_apisix

  install_apisix || {
    exit 1
  }

  echo_pass "APISIX is ready!"
}

main "$@"

```

输出信息：

```bash
$ curl -sL https://run.api7.ai/apisix/quickstart | sh
Destroying existing apisix-quickstart container, if any.

Installing APISIX with the quickstart options.

Creating bridge network apisix-quickstart-net.
d1a32b7f4e21cccafee35888eef75a8fd347a6361ff4ef540dcffd1655a7a8de
✔ network apisix-quickstart-net created

Starting the container etcd-quickstart.
Unable to find image 'bitnami/etcd:3.5.7' locally
3.5.7: Pulling from bitnami/etcd
c9a9b67eb7a5: Pull complete
Digest: sha256:4189bbeb7d0a7cc0f7becc729163b904342b86195cfc3eabee10f14f5549a719
Status: Downloaded newer image for bitnami/etcd:3.5.7
7aa9ccac5099ae165935b8072ee73a3a8449f9b2fe8c34303b18d315568c29ac
✔ etcd is listening on etcd-quickstart:2379
6dce3b49cfe6: Pull complete
92a185f0e03a: Pull complete
689c65e7f30c: Pull complete
a870fa0fd983: Pull complete
b1b6481d87b0: Pull complete
4f4fb700ef54: Pull complete
31d60ea3b2ce: Pull complete
fef7b8759f39: Pull complete
d5859aa240d7: Pull complete
Digest: sha256:178d1f79c2c39834f50213bf6ace90284f6b985dc8189cc50f3666d9fb1037ad
Status: Downloaded newer image for apache/apisix:3.11.0-debian
63377a158e400ac96c9bec16e0339b281e6070b75ff319f23e5beadfb1404061
OCI runtime exec failed: exec failed: unable to start container process: exec: "G:/Software/Git/usr/bin/bash": stat G:/Software/Git/usr/bin/bash: no such file or directory: unknown
⚠ WARNING: The Admin API key is currently disabled. You should turn on admin_key_required and set a strong Admin API key in production for security.

✔ APISIX is ready!
```

### 验证
```bash
curl "http://127.0.0.1:9080" --head | grep Server
```

输出信息：

```bash
$ curl "http://127.0.0.1:9080" --head | grep Server
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
Server: APISIX/3.11.0
```



## 配置路由
### 创建路由
```bash
curl -i "http://127.0.0.1:9180/apisix/admin/routes" -X PUT -d '
{
  "id": "getting-started-ip",
  "uri": "/ip",
  "upstream": {
    "type": "roundrobin",
    "nodes": {
      "httpbin.org:80": 1
    }
  }
}'
```

输出信息：

```bash
$ curl -i "http://127.0.0.1:9180/apisix/admin/routes" -X PUT -d '
{
  "id": "getting-started-ip",
  "uri": "/ip",
  "upstream": {
    "type": "roundrobin",
    "nodes": {
      "httpbin.org:80": 1
    }
  }
}'
HTTP/1.1 403 Forbidden
Server: openresty
Date: Sun, 19 Jan 2025 09:07:45 GMT
Content-Type: text/html; charset=utf-8
Content-Length: 225
Connection: keep-alive

<html>
<head><title>403 Forbidden</title></head>
<body>
<center><h1>403 Forbidden</h1></center>
<hr><center>openresty</center>
<p><em>Powered by <a href="https://apisix.apache.org/">APISIX</a>.</em></p></body>
</html>
```

响应消息为 `403 Forbidden`?

docker desktop 中的 Containers 信息：

![](./images/20250311_2312419078.png)

docker Containers 中 apisix-quickstart 中的 Logs 信息：

```bash
2025-01-19 17:13:36 2025/01/19 09:13:36 [error] 105#105: *13107 access forbidden by rule, client: 172.19.0.1, server: , request: "PUT /apisix/admin/routes HTTP/1.1", host: "127.0.0.1:9180"
2025-01-19 17:13:39 172.19.0.1 - - [19/Jan/2025:09:13:36 +0000] 127.0.0.1:9180 "PUT /apisix/admin/routes HTTP/1.1" 403 225 0.000 "-" "curl/8.8.0" - - - "http://127.0.0.1:9180"
```

尝试在请求头加上`X-API-KEY`：

```bash
curl -i "http://127.0.0.1:9180/apisix/admin/routes" \
-H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" \
-X PUT -d '{
    "id": "getting-started-ip",
    "uri": "/ip",
    "upstream": {
        "type": "roundrobin",
        "nodes": {
            "httpbin.org:80": 1
        }
    }
}'
```

输出信息依然为 403 ？

```bash
$ curl -i "http://127.0.0.1:9180/apisix/admin/routes" \
-H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" \
-X PUT -d '{
    "id": "getting-started-ip",
    "uri": "/ip",
    "upstream": {
        "type": "roundrobin",
        "nodes": {
            "httpbin.org:80": 1
        }
    }
}'
HTTP/1.1 403 Forbidden
Server: openresty
Date: Sun, 19 Jan 2025 09:26:01 GMT
Date: Sun, 19 Jan 2025 09:26:01 GMT
Content-Type: text/html; charset=utf-8
Content-Length: 225
Connection: keep-alive

<html>
<head><title>403 Forbidden</title></head>
<body>
<center><h1>403 Forbidden</h1></center>
<hr><center>openresty</center>
<p><em>Powered by <a href="https://apisix.apache.org/">APISIX</a>.</em></p></body>
</html>
```

docker Logs：「access forbidden by rule, client: 172.19.0.1」

```bash
2025-01-19 17:26:01 2025/01/19 09:26:01 [error] 101#101: *24939 access forbidden by rule, client: 172.19.0.1, server: , request: "PUT /apisix/admin/routes HTTP/1.1", host: "127.0.0.1:9180"
2025-01-19 17:26:04 172.19.0.1 - - [19/Jan/2025:09:26:01 +0000] 127.0.0.1:9180 "PUT /apisix/admin/routes HTTP/1.1" 403 225 0.000 "-" "curl/8.8.0" - - - "http://127.0.0.1:9180"
```

#### 解决方式一
查看正在运行的 APISIX 容器 ID：`docker ps`

输出信息：

```bash
$ docker ps
CONTAINER ID   IMAGE                         COMMAND                   CREATED       STATUS          PORTS                              
                                                                                                                                      NAMES
63377a158e40   apache/apisix:3.11.0-debian   "/docker-entrypoint.…"   4 hours ago   Up 42 minutes   0.0.0.0:9080->9080/tcp, 0.0.0.0:9091six-quickstart
7aa9ccac5099   bitnami/etcd:3.5.7            "/opt/bitnami/script…"   4 hours ago   Up 4 hours      2379-2380/tcp                                                                                                                                                            etcd-quickstart
```

在 ubuntu 22.04.5 LTS 运行以下命令，将 APISIX 容器中的配置文件复制到 Ubuntu 宿主机的当前目录下（可以使用`pwd`查看目前目录）：

```bash
docker cp 63377a158e40:/usr/local/apisix/conf/config.yaml ./
```

回到 Windows 文件资源管理器，输入`\\wsl$`进入 ubuntu 22.04.5 LTS 文件系统并切换到对应目录查找复制的`config.yaml`文件，文件内容：

![](./images/20250311_2312411869.png)

在 ubuntu 22.04.5 LTS 运行以下命令，采用管理员身份进入 APISIX 容器，并安装 vim （编辑文本）：

```bash
docker exec -it -u root 63377a158e40 /bin/bash
apt update && apt install -y vim
```

随后，`cd conf`切换到：/usr/local/apisix/conf

`vi config.yaml`编辑文件，通过 Page Down / Up 找到：

![](./images/20250311_2312412831.png)

按下`i`修改`allow_admin`文件内容`127.0.0.0/24`为：`0.0.0.0/0`，ESC  + `:wq`写入并退出；

输入`apisix reload`：

```bash
root@63377a158e40:/usr/local/apisix/conf# apisix reload
/usr/local/openresty//luajit/bin/luajit /usr/local/apisix/apisix/cli/apisix.lua reload
2025/01/19 14:04:39 [notice] 676#676: signal process started
```

`exit`退出 APISIX 容器；

在 Windows 终端 / ubuntu 22.04.5 LTS 输入以下内容，添加路由规则：

```bash
curl -i -v "http://127.0.0.1:9180/apisix/admin/routes" \
-H "X-API-KEY: CNFneQYYeMpcffsDaezVmnetcNQKDHsY" \
-X PUT -d '{
  "id": "getting-started-ip",
  "uri": "/ip",
  "upstream": {
    "type": "roundrobin",
    "scheme": "https",
    "nodes": {
      "httpbin.org:443": 1
    }
  }
}'
```

输出信息：

```bash
root@DESKTOP-42B4J2H:/usr# curl -i -v "http://127.0.0.1:9180/apisix/admin/routes" \
> -H "X-API-KEY: CNFneQYYeMpcffsDaezVmnetcNQKDHsY" \
> -X PUT -d '{
>   "id": "getting-started-ip",
>   "uri": "/ip",
>   "upstream": {
>     "type": "roundrobin",
>     "nodes": {
>       "httpbin.org:80": 1
>     }
>   }
> }'
*   Trying 127.0.0.1:9180...
* Connected to 127.0.0.1 (127.0.0.1) port 9180 (#0)
> PUT /apisix/admin/routes HTTP/1.1
> Host: 127.0.0.1:9180
> User-Agent: curl/7.81.0
> Accept: */*
> X-API-KEY: CNFneQYYeMpcffsDaezVmnetcNQKDHsY
> Content-Length: 142
> Content-Type: application/x-www-form-urlencoded
>
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
HTTP/1.1 200 OK
< Date: Sun, 19 Jan 2025 13:59:27 GMT
Date: Sun, 19 Jan 2025 13:59:27 GMT
< Content-Type: application/json
Content-Type: application/json
< Transfer-Encoding: chunked
Transfer-Encoding: chunked
< Connection: keep-alive
Connection: keep-alive
< Server: APISIX/3.11.0
Server: APISIX/3.11.0
< Access-Control-Allow-Origin: *
Access-Control-Allow-Origin: *
< Access-Control-Allow-Credentials: true
Access-Control-Allow-Credentials: true
< Access-Control-Expose-Headers: *
Access-Control-Expose-Headers: *
< Access-Control-Max-Age: 3600
Access-Control-Max-Age: 3600
< X-API-VERSION: v3
X-API-VERSION: v3

<
{"key":"/apisix/routes/getting-started-ip","value":{"status":1,"priority":0,"uri":"/ip","id":"getting-started-ip","upstream":{"hash_on":"vars","pass_host":"pass","type":"roundrobin","nodes":{"httpbin.org:80":1},"scheme":"http"},"create_time":1737287790,"update_time":1737295167}}
* Connection #0 to host 127.0.0.1 left intact
```



#### 解决方式二
直接采用 docker desktop 的图形用户界面修改：

![](./images/20250311_2312418051.png)

ctrl + F 寻找「allow_admin」键，并将其值修改为：0.0.0.0/0

![](./images/20250311_2312428031.png)

在「exec」中输入`apisix reload`

![](./images/20250311_2312427816.png)

随后，通过终端测试：

```bash
curl -i "http://127.0.0.1:9180/apisix/admin/routes" \
-H "X-API-KEY: CNFneQYYeMpcffsDaezVmnetcNQKDHsY" \
-X PUT -d '{
  "id": "getting-started-ip",
  "uri": "/ip",
  "upstream": {
    "type": "roundrobin",
    "nodes": {
      "httpbin.org:80": 1
    }
  }
}'
```

输出结果：

```bash
$ curl -i "http://127.0.0.1:9180/apisix/admin/routes" \
-H "X-API-KEY: CNFneQYYeMpcffsDaezVmnetcNQKDHsY" \
-X PUT -d '{
  "id": "getting-started-ip",
  "uri": "/ip",
  "upstream": {
    "type": "roundrobin",
    "nodes": {
      "httpbin.org:80": 1
    }
  }
}'
HTTP/1.1 200 OK
Date: Mon, 20 Jan 2025 08:08:02 GMT
Content-Type: application/json
Transfer-Encoding: chunked
Connection: keep-alive
Server: APISIX/3.11.0
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: *
Access-Control-Max-Age: 3600
X-API-VERSION: v3

{"value":{"update_time":1737360482,"status":1,"create_time":1737287790,"uri":"/ip","upstream":{"hash_on":"vars","type":"roundrobin","pass_host":"pass","nodes":{"httpbin.org:80":1},"scheme":"http"},"priority":0,"id":"getting-started-ip"},"key":"/apisix/routes/getting-started-ip"}
```



### 验证
验证配置的路由规则：

```bash
curl "http://127.0.0.1:9080/ip"
```

输出结果：？

```bash
$ curl "http://127.0.0.1:9080/ip"
<html>
<head><title>400 Request Header Or Cookie Too Large</title></head>
<body>
<center><h1>400 Bad Request</h1></center>
<center>Request Header Or Cookie Too Large</center>
<hr><center>openresty</center>
<p><em>Powered by <a href="https://apisix.apache.org/">APISIX</a>.</em></p></body>
</html>
```

docker 日志：？

```bash
2025-01-20 16:10:10 172.19.0.1 - - [20/Jan/2025:08:10:08 +0000] 127.0.0.1:9080 "GET /ip HTTP/1.1" 400 305 4.922 "-" "curl/8.8.0" 3.210.86.191:80 400 4.921 "http://127.0.0.1:9080"
2025-01-20 16:10:10 172.19.0.1 - - [20/Jan/2025:08:10:08 +0000] 127.0.0.1:9080 "GET /ip HTTP/1.1" 400 305 4.989 "-" "curl/8.8.0" 52.203.38.8:80 400 4.988 "http://127.0.0.1:9080"
2025-01-20 16:10:10 172.19.0.1 - - [20/Jan/2025:08:10:08 +0000] 127.0.0.1:9080 "GET /ip HTTP/1.1" 400 305 5.034 "-" "curl/8.8.0" 52.203.38.8:80 400 5.033 "http://127.0.0.1:9080"
2025-01-20 16:10:10 172.19.0.1 - - [20/Jan/2025:08:10:08 +0000] 127.0.0.1:9080 "GET /ip HTTP/1.1" 400 305 5.050 "-" "curl/8.8.0" 3.210.86.191:80 400 5.050 "http://127.0.0.1:9080"
2025-01-20 16:10:10 172.19.0.1 - - [20/Jan/2025:08:10:08 +0000] 127.0.0.1:9080 "GET /ip HTTP/1.1" 400 305 5.090 "-" "curl/8.8.0" 50.19.58.113:80 400 5.088 "http://127.0.0.1:9080"
```

重新配置路由规则？

```bash
curl -i "http://127.0.0.1:9180/apisix/admin/routes" \
-H "X-API-KEY: CNFneQYYeMpcffsDaezVmnetcNQKDHsY" \
-X PUT -d '{
  "id": "getting-started-ip",
  "uri": "/ip",
  "upstream": {
    "type": "roundrobin",
    "scheme": "https",
    "nodes": {
      "httpbin.org:443": 1
    }
  }
}'
```

输出信息：

```bash
$ curl -i "http://127.0.0.1:9180/apisix/admin/routes" \
-H "X-API-KEY: CNFneQYYeMpcffsDaezVmnetcNQKDHsY" \
-X PUT -d '{
  "id": "getting-started-ip",
  "uri": "/ip",
  "upstream": {
    "type": "roundrobin",
    "scheme": "https",
    "nodes": {
      "httpbin.org:443": 1
    }
  }
}'
HTTP/1.1 200 OK
Date: Mon, 20 Jan 2025 08:14:25 GMT
Content-Type: application/json
Transfer-Encoding: chunked
Connection: keep-alive
Server: APISIX/3.11.0
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: *
Access-Control-Max-Age: 3600
X-API-VERSION: v3

{"value":{"update_time":1737360865,"status":1,"create_time":1737287790,"uri":"/ip","upstream":{"hash_on":"vars","type":"roundrobin","pass_host":"pass","nodes":{"httpbin.org:443":1},"scheme":"https"},"priority":0,"id":"getting-started-ip"},"key":"/apisix/routes/getting-started-ip"}
```

测试配置的路由：

```bash
curl "http://127.0.0.1:9080/ip"
```

输出信息：

```bash
$ curl "http://127.0.0.1:9080/ip"
{
  "origin": "172.19.0.1, 46.232.121.32"
}
```



## 负载均衡
创建一个新的路由规则，采用两个上游服务进行负载均衡：

```bash
curl -i "http://127.0.0.1:9180/apisix/admin/routes" \
-H "X-API-KEY: CNFneQYYeMpcffsDaezVmnetcNQKDHsY" \
-X PUT -d '{
  "id": "getting-started-headers",
  "uri": "/headers",
  "upstream": {
    "type": "roundrobin",
    "nodes": {
      "httpbin.org:443": 1,
      "mock.api7.ai:443": 1
    },
    "pass_host": "node",
    "scheme": "https"
  }
}'
```

输出信息：

```bash
$ curl -i "http://127.0.0.1:9180/apisix/admin/routes" \
-H "X-API-KEY: CNFneQYYeMpcffsDaezVmnetcNQKDHsY" \
-X PUT -d '{
  "id": "getting-started-headers",
  "uri": "/headers",
  "upstream": {
    "type": "roundrobin",
    "nodes": {
      "httpbin.org:443": 1,
      "mock.api7.ai:443": 1
    },
    "pass_host": "node",
    "scheme": "https"
  }
}'
HTTP/1.1 200 OK
Date: Mon, 20 Jan 2025 09:50:50 GMT
Content-Type: application/json
Transfer-Encoding: chunked
Connection: keep-alive
Server: APISIX/3.11.0
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: *
Access-Control-Max-Age: 3600
X-API-VERSION: v3

{"value":{"update_time":1737366650,"status":1,"create_time":1737366188,"uri":"/headers","upstream":{"pass_host":"node","type":"roundrobin","hash_on":"vars","nodes":{"httpbin.org:443":1,"mock.api7.ai:443":1},"scheme":"https"},"priority":0,"id":"getting-started-headers"},"key":"/apisix/routes/getting-started-headers"}
```

通过访问`http://127.0.0.1:9080/headers`来测试效果：

```bash
curl http://127.0.0.1:9080/headers
```

输出结果：

```bash
$ curl http://127.0.0.1:9080/headers
{
  "headers": {
    "accept": "*/*",
    "accept-encoding": "gzip, br",
    "cf-connecting-ip": "46.232.121.32",
    "cf-ipcountry": "HK",
    "cf-ray": "904e2bbdfefce2e7",
    "cf-visitor": "{\"scheme\":\"https\"}",
    "connection": "Keep-Alive",
    "content-type": "application/json",
    "host": "mock.api7.ai",
    "user-agent": "curl/8.8.0",
    "x-application-owner": "API7.ai",
    "x-forwarded-for": "172.19.0.1",
    "x-forwarded-host": "127.0.0.1",
    "x-forwarded-port": "9080",
    "x-forwarded-proto": "https",
    "x-real-ip": "46.232.121.32",
    "X-Application-Owner": "API7.ai",
    "Content-Type": "application/json"
  }
}

$ curl http://127.0.0.1:9080/headers
{
  "headers": {
    "Accept": "*/*",
    "Host": "httpbin.org",
    "User-Agent": "curl/8.8.0",
    "X-Amzn-Trace-Id": "Root=1-678e1cdb-7576c4ef75b578e07c754158",
    "X-Forwarded-Host": "127.0.0.1"
  }
}
```

构造100个请求测试：

```bash
hc=$(seq 100 | xargs -I {} curl "http://127.0.0.1:9080/headers" -sL | grep "httpbin" | wc -l); echo httpbin.org: $hc, mock.api7.ai: $((100 - $hc))
```

输出结果：

```bash
$ hc=$(seq 100 | xargs -I {} curl "http://127.0.0.1:9080/headers" -sL | grep "httpbin" | wc -l); echo httpbin.org: $hc, mock.api7.ai: $((100 - $hc))
httpbin.org: 49, mock.api7.ai: 51
```



## 密钥验证
### 创建消费者
```bash
curl -i "http://127.0.0.1:9180/apisix/admin/consumers" -X PUT -d '
{
  "username": "tom",
  "plugins": {
    "key-auth": {
      "key": "secret-key"
    }
  }
}'
```

输出信息：

```bash
$ curl -i "http://127.0.0.1:9180/apisix/admin/consumers" -X PUT -d '
{
  "username": "tom",
  "plugins": {
    "key-auth": {
      "key": "secret-key"
    }
  }
}'
HTTP/1.1 401 Unauthorized
Date: Tue, 21 Jan 2025 09:23:57 GMT
Content-Type: application/json
Transfer-Encoding: chunked
Connection: keep-alive
Server: APISIX/3.11.0
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: *
Access-Control-Max-Age: 3600

{"description":"missing apikey","error_msg":"failed to check token"}
```

消息头添加 X-API-KEY 字段：

```bash
curl -i "http://127.0.0.1:9180/apisix/admin/consumers" \
-H "X-API-KEY: CNFneQYYeMpcffsDaezVmnetcNQKDHsY" \
-X PUT -d '{
  "username": "tom",
  "plugins": {
    "key-auth": {
      "key": "secret-key"
    }
  }
}'
```

输出信息：

```bash
$ curl -i "http://127.0.0.1:9180/apisix/admin/consumers" \
-H "X-API-KEY: CNFneQYYeMpcffsDaezVmnetcNQKDHsY" \
-X PUT -d '{
  "username": "tom",
  "plugins": {
    "key-auth": {
      "key": "secret-key"
    }
  }
}'
HTTP/1.1 201 Created
Date: Tue, 21 Jan 2025 09:26:09 GMT
Content-Type: application/json
Transfer-Encoding: chunked
Connection: keep-alive
Server: APISIX/3.11.0
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: *
Access-Control-Max-Age: 3600
X-API-VERSION: v3

{"value":{"plugins":{"key-auth":{"key":"0x1PpfmlMIj3CIq4xdd42A=="}},"username":"tom","update_time":1737451569,"create_time":1737451569},"key":"/apisix/consumers/tom"}
```



### 启用 Authentication
通过`PATCH`方法为「配置路由」中的`getting-started-ip`路由添加`key-auth`插件：

```bash
curl -i "http://127.0.0.1:9180/apisix/admin/routes/getting-started-ip" \
-H "X-API-KEY: CNFneQYYeMpcffsDaezVmnetcNQKDHsY" \
-X PATCH -d '{
  "plugins": {
    "key-auth": {}
  }
}'
```

输出信息：

```bash
$ curl -i "http://127.0.0.1:9180/apisix/admin/routes/getting-started-ip" \
-H "X-API-KEY: CNFneQYYeMpcffsDaezVmnetcNQKDHsY" \
-X PATCH -d '{
  "plugins": {
    "key-auth": {}
  }
}'
HTTP/1.1 200 OK
Date: Tue, 21 Jan 2025 09:32:10 GMT
Content-Type: application/json
Transfer-Encoding: chunked
Connection: keep-alive
Server: APISIX/3.11.0
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: *
Access-Control-Max-Age: 3600
X-API-VERSION: v3

{"value":{"uri":"/ip","status":1,"update_time":1737451930,"create_time":1737287790,"plugins":{"key-auth":{"hide_credentials":false,"query":"apikey","header":"apikey"}},"priority":0,"upstream":{"nodes":{"httpbin.org:443":1},"hash_on":"vars","type":"roundrobin","scheme":"https","pass_host":"pass"},"id":"getting-started-ip"},"key":"/apisix/routes/getting-started-ip"}
```



### 验证
1、测试密钥插件，发送请求头不带`apikey`的请求

```bash
curl -i "http://127.0.0.1:9080/ip"
```

输出信息：

```bash
$ curl -i "http://127.0.0.1:9080/ip"
HTTP/1.1 401 Unauthorized
Date: Tue, 21 Jan 2025 09:33:50 GMT
Content-Type: text/plain; charset=utf-8
Transfer-Encoding: chunked
Connection: keep-alive
Server: APISIX/3.11.0

{"message":"Missing API key in request"}
```

2、发送请求头携带错误密钥的请求：

```bash
curl -i "http://127.0.0.1:9080/ip" -H "apikey: wrong-key"
```

输出信息：

```bash
$ curl -i "http://127.0.0.1:9080/ip" -H "apikey: wrong-key"
HTTP/1.1 401 Unauthorized
Date: Tue, 21 Jan 2025 09:41:24 GMT
Content-Type: text/plain; charset=utf-8
Transfer-Encoding: chunked
Connection: keep-alive
Server: APISIX/3.11.0

{"message":"Invalid API key in request"}
```

3、发送请求头携带正确密码的请求：

```bash
curl -i "http://127.0.0.1:9080/ip" -H "apikey: secret-key"
```

输出信息：

```bash
$ curl -i "http://127.0.0.1:9080/ip" -H "apikey: secret-key"
HTTP/1.1 502 Bad Gateway
Date: Tue, 21 Jan 2025 09:44:05 GMT
Content-Type: text/html; charset=utf-8
Content-Length: 229
Connection: keep-alive
Server: APISIX/3.11.0
X-APISIX-Upstream-Status: 502

<html>
<head><title>502 Bad Gateway</title></head>
<body>
<center><h1>502 Bad Gateway</h1></center>
<hr><center>openresty</center>
<p><em>Powered by <a href="https://apisix.apache.org/">APISIX</a>.</em></p></body>
</html>

$ curl -i "http://127.0.0.1:9080/ip" -H "apikey: secret-key"
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 44
Connection: keep-alive
Date: Tue, 21 Jan 2025 09:44:18 GMT
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true
Server: APISIX/3.11.0

{
  "origin": "172.19.0.1, 46.232.121.32"
}
```



### 禁用 Authentication
```bash
curl -i "http://127.0.0.1:9180/apisix/admin/routes/getting-started-ip"  \
-H "X-API-KEY: CNFneQYYeMpcffsDaezVmnetcNQKDHsY" \
-X PATCH -d '{
  "plugins": {
    "key-auth": {
      "_meta": {
        "disable": true
      }
    }
  }
}'
```

输出信息：

```bash
$ curl -i "http://127.0.0.1:9180/apisix/admin/routes/getting-started-ip"  \
-H "X-API-KEY: CNFneQYYeMpcffsDaezVmnetcNQKDHsY" \
-X PATCH -d '{
  "plugins": {
    "key-auth": {
      "_meta": {
        "disable": true
      }
    }
  }
}'
HTTP/1.1 200 OK
Date: Tue, 21 Jan 2025 09:49:38 GMT
Content-Type: application/json
Transfer-Encoding: chunked
Connection: keep-alive
Server: APISIX/3.11.0
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: *
Access-Control-Max-Age: 3600
X-API-VERSION: v3

{"value":{"id":"getting-started-ip","status":1,"update_time":1737452978,"create_time":1737287790,"plugins":{"key-auth":{"header":"apikey","hide_credentials":false,"query":"apikey","_meta":{"disable":true}}},"priority":0,"upstream":{"nodes":{"httpbin.org:443":1},"type":"roundrobin","hash_on":"vars","scheme":"https","pass_host":"pass"},"uri":"/ip"},"key":"/apisix/routes/getting-started-ip"}
```

测试插件是否被禁用：

```bash
curl -i "http://127.0.0.1:9080/ip"
```

输出信息：

```bash
$ curl -i "http://127.0.0.1:9080/ip"
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 44
Connection: keep-alive
Date: Tue, 21 Jan 2025 09:52:32 GMT
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true
Server: APISIX/3.11.0

{
  "origin": "172.19.0.1, 46.232.121.32"
}
```



## 限速
### 启用 Rate Limiting
对已存在的路由`getting-started-ip`规则，添加`limit-count`插件，请求速率限制：每10s 只允许最多2个请求：

```bash
curl -i "http://127.0.0.1:9180/apisix/admin/routes/getting-started-ip" \
-H "X-API-KEY: CNFneQYYeMpcffsDaezVmnetcNQKDHsY" \
-X PATCH -d '{
  "plugins": {
    "limit-count": {
        "count": 2,
        "time_window": 10,
        "rejected_code": 503
     }
  }
}'
```

输出信息：

```bash
$ curl -i "http://127.0.0.1:9180/apisix/admin/routes/getting-started-ip" \
-H "X-API-KEY: CNFneQYYeMpcffsDaezVmnetcNQKDHsY" \
-X PATCH -d '{
  "plugins": {
    "limit-count": {
        "count": 2,
        "time_window": 10,
        "rejected_code": 503
     }
  }
}'
HTTP/1.1 200 OK
Date: Wed, 22 Jan 2025 09:48:25 GMT
Content-Type: application/json
Transfer-Encoding: chunked
Connection: keep-alive
Server: APISIX/3.11.0
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: *
Access-Control-Max-Age: 3600
X-API-VERSION: v3

{"key":"/apisix/routes/getting-started-ip","value":{"uri":"/ip","id":"getting-started-ip","upstream":{"pass_host":"pass","nodes":{"httpbin.org:443":1},"scheme":"https","hash_on":"vars","type":"roundrobin"},"create_time":1737287790,"status":1,"update_time":1737539305,"priority":0,"plugins":{"key-auth":{"hide_credentials":false,"query":"apikey","_meta":{"disable":true},"header":"apikey"},"limit-count":{"key_type":"var","time_window":10,"rejected_code":503,"count":2,"key":"remote_addr","policy":"local","allow_degradation":false,"show_limit_quota_header":true}}}}
```



### 验证
对已添加`limit-count`插件的请求路径进行测试，发起100个请求：

```bash
count=$(seq 100 | xargs -I {} curl "http://127.0.0.1:9080/ip" -I -sL | grep "503" | wc -l); echo \"200\": $((100 - $count)), \"503\": $count
```

输出结果：

```bash
$ count=$(seq 100 | xargs -I {} curl "http://127.0.0.1:9080/ip" -I -sL | grep "503" | wc -l); echo \"200\": $((100 - $count)), \"503\": $count
"200": 4, "503": 96
```



### 禁用 Rate Limiting
```bash
curl -i "http://127.0.0.1:9180/apisix/admin/routes/getting-started-ip" \
-H "X-API-KEY: CNFneQYYeMpcffsDaezVmnetcNQKDHsY" \
-X PATCH -d '{
  "plugins": {
    "limit-count": {
      "_meta": {
        "disable": true
      }
    }
  }
}'
```

输出信息：

```bash
$ curl -i "http://127.0.0.1:9180/apisix/admin/routes/getting-started-ip" \
-H "X-API-KEY: CNFneQYYeMpcffsDaezVmnetcNQKDHsY" \
-X PATCH -d '{
  "plugins": {
    "limit-count": {
      "_meta": {
        "disable": true
      }
    }
  }
}'
HTTP/1.1 200 OK
Date: Wed, 22 Jan 2025 09:56:19 GMT
Content-Type: application/json
Transfer-Encoding: chunked
Connection: keep-alive
Server: APISIX/3.11.0
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: *
Access-Control-Max-Age: 3600
X-API-VERSION: v3

{"key":"/apisix/routes/getting-started-ip","value":{"plugins":{"key-auth":{"header":"apikey","query":"apikey","_meta":{"disable":true},"hide_credentials":false},"limit-count":{"time_window":10,"key_type":"var","show_limit_quota_header":true,"count":2,"rejected_code":503,"key":"remote_addr","policy":"local","allow_degradation":false,"_meta":{"disable":true}}},"priority":0,"upstream":{"pass_host":"pass","nodes":{"httpbin.org:443":1},"scheme":"https","hash_on":"vars","type":"roundrobin"},"id":"getting-started-ip","create_time":1737287790,"update_time":1737539779,"status":1,"uri":"/ip"}} 
```



### 验证
再次验证「禁用插件」后的请求路径是否受到限制：

```bash
count=$(seq 100 | xargs -I {} curl "http://127.0.0.1:9080/ip" -I -sL | grep "503" | wc -l); echo \"200\": $((100 - $count)), \"503\": $count
```

输出信息：

```bash
$ count=$(seq 100 | xargs -I {} curl "http://127.0.0.1:9080/ip" -I -sL | grep "503" | wc -l); echo \"200\": $((100 - $count)), \"503\": $count
"200": 100, "503": 0
```

