---
title: WSL 安装 Redis、MySQL、MongoDB、Nacos
category:
  - 开发工具
---

# WSL 安装 Redis、MySQL、MongoDB、Nacos

## 背景

本机环境：Windows 11

把 WSL 当成虚拟的远程 Linux 服务器，在 WSL 中安装 数据库、Nacos 等组件；

- 传输文件时，只需通过 Windows 的文件夹复制、粘贴；
- 连接时只需通过 127.0.0.1 连接即可；
- 修改配置文件时，只需通过 VSCode WSL 插件连接 WSL，随后打开需要编辑的文件进行修改。



## Redis

[Install Redis on Linux | Docs](https://redis.io/docs/latest/operate/oss_and_stack/install/archive/install-redis/install-redis-on-linux/)

```Bash
sudo apt-get install lsb-release curl gpg
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
sudo chmod 644 /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
sudo apt-get update
sudo apt-get install redis
```



## MySQL

[MySQL :: MySQL 8.4 Reference Manual :: 2.5.2 Installing MySQL on Linux Using the MySQL APT Repository](https://dev.mysql.com/doc/refman/8.4/en/linux-installation-apt-repo.html)

[MySQL :: Download MySQL APT Repository](https://dev.mysql.com/downloads/repo/apt/)

1、从 Windows 下载 deb 包传输到 WSL 中；

2、Install the package

```Bash
sudo dpkg -i mysql-apt-config_*.deb
```

3、更新包信息

```Bash
sudo apt-get update
```

4、安装 mysql-server

```Bash
sudo apt-get install mysql-server
```

During the installation, you are asked to supply a password for the root user for your MySQL installation.



## Nacos

[Nacos 快速开始 | Nacos 官网](https://nacos.io/docs/latest/quickstart/quick-start/?spm=5238cd80.2a90516.0.0.618967897LLs5q)

[Nacos Server 下载 | Nacos 官网](https://nacos.io/download/nacos-server/?spm=5238cd80.2a90516.0.0.618967897LLs5q#稳定版本)

1、从 Windows 复制 二进制包 到 WSL；

2、sudo apt install unzip

3、unzip nacos-server-$version.zip

4、cd nacos/conf

5、编辑 application.properties 文件

```Properties
### The two properties is the white list for auth and used by identity the request from other server.
nacos.core.auth.server.identity.key=
nacos.core.auth.server.identity.value=

### The default token (Base64 string):
#nacos.core.auth.plugin.nacos.token.secret.key=VGhpc0lzTXlDdXN0b21TZWNyZXRLZXkwMTIzNDU2Nzg=
nacos.core.auth.plugin.nacos.token.secret.key=

#*************** Datasource Related Configurations ***************#
### nacos.plugin.datasource.log.enabled=true
spring.sql.init.platform=mysql
### Count of DB:
db.num=1

### Connect URL of DB:
db.url.0=jdbc:mysql://127.0.0.1:3306/nacos?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useUnicode=true&useSSL=false&serverTimezone=UTC
db.user=
db.password=
```

6、MySQL 新建 nacos 数据库，并执行 conf/mysql-schema.sql 建表语句；

7、安装 jdk 17+；

```Bash
sudo apt update
sudo apt install default-jdk
java -version
```

8、启动单机 Nacos

```Bash
 bash startup.sh -m standalone
```

9、http://127.0.0.1:8080/index.htm 设置控制台密码。



### Nacos 作为 Ubuntu 系统服务并开机自启

创建系统服务文件

```Bash
sudo nano /etc/systemd/system/nacos.service
```

创建专用用户

```Bash
# 创建 nacos 用户和组
sudo useradd -r -s /bin/false nacos

# 设置目录权限
sudo chown -R nacos:nacos /opt/nacos
```

nacos.service

```YAML
[Unit]
Description=Nacos Server
After=network.target

[Service]
Type=forking
# 创建专用用户运行服务
User=nacos
Group=nacos
# Nacos 安装目录的 bin 文件夹
WorkingDirectory=/opt/nacos
# 单机模式
ExecStart=/opt/nacos/bin/startup.sh -m standalone
ExecStop=/opt/nacos/bin/shutdown.sh
Restart=always
RestartSec=10
# 初始堆 最大堆 新生代
Environment="CUSTOM_NACOS_MEMORY=-Xms256m -Xmx256m -Xmn128m"

[Install]
WantedBy=multi-user.target
```

启用和启动服务

```Bash
# 重新加载 systemd 配置
sudo systemctl daemon-reload

# 启用服务（开机自启）
sudo systemctl enable nacos.service

# 启动服务
sudo systemctl start nacos.service

# 查看服务状态
sudo systemctl status nacos.service
```

常用管理命令

```Bash
# 启动服务
sudo systemctl start nacos

# 停止服务
sudo systemctl stop nacos

# 重启服务
sudo systemctl restart nacos

# 查看日志
sudo journalctl -u nacos.service -f

# 查看服务状态
sudo systemctl status nacos
```



## MongoDB

[在 Ubuntu 上安装 MongoDB Community Edition - 数据库手册 - MongoDB Docs](https://www.mongodb.com/zh-cn/docs/manual/tutorial/install-mongodb-on-ubuntu/#overview)

1、导入公钥

```Bash
sudo apt-get install gnupg curl
curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg --dearmor
```

2、创建列表文件 & 重新加载包数据库 & 安装 MongoDB Community Server

```Bash
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
```

3、启动 MongoDB

> 配置文件位置：/etc/mongod.conf

```Bash
sudo systemctl start mongod
```

4、验证 MongoDB 是否启动成功

```Bash
sudo systemctl status mongod
```

5、使用 MongoDB Shell

```Bash
mongosh
```

6、停止

```Bash
sudo systemctl stop mongod
```



### 设置 MongoDB 作为 Ubuntu 系统服务并开机自启

[MongoDB开机自启动（Linux环境） - eiSouthBoy - 博客园](https://www.cnblogs.com/caojun97/p/16915506.html)

[mongodb设置system开机自启_mongodb开机自启动-CSDN博客](https://blog.csdn.net/xjxy52o/article/details/125899534)

```Bash
# 创建 systemd 服务文件
sudo nano /etc/systemd/system/mongodb.service
```

mongodb.service

```Bash
[Unit]
Description=MongoDB Database Server
Documentation=https://docs.mongodb.org/manual
After=network.target
Wants=network.target

[Service]
# 如果 mongod.conf 中设置了 fork: true，使用 Type=forking
# 如果 mongod 在前台运行（默认），使用 Type=simple
Type=simple

# 运行用户和组
User=mongodb
Group=mongodb

# 启动命令
ExecStart=/usr/bin/mongod --config /etc/mongod.conf

# 重载信号
ExecReload=/bin/kill -HUP $MAINPID

# 停止命令 - 使用 SIGTERM 信号优雅关闭
ExecStop=/bin/kill -TERM $MAINPID

# 重启策略
Restart=on-failure
RestartSec=10

# 私有临时目录
PrivateTmp=true

# 资源限制
LimitNOFILE=64000      # 文件描述符限制
LimitNPROC=64000       # 进程数限制
LimitMEMLOCK=infinity  # 允许锁定无限内存

# 任务限制
TasksMax=infinity
TasksAccounting=false

# 超时设置
TimeoutStartSec=180
TimeoutStopSec=120

[Install]
WantedBy=multi-user.target
```

检查用户和组

```Bash
id mongodb
# uid=107(mongodb) gid=65534(nogroup) groups=65534(nogroup),110(mongodb)

# 将 mongodb 用户的主组改为 mongodb
sudo usermod -g mongodb mongodb
id mongodb
# uid=107(mongodb) gid=110(mongodb) groups=110(mongodb)
```

数据和日志文件

```Bash
# 数据和日志文件
sudo mkdir -p /var/lib/mongodb
sudo mkdir -p /var/log/mongodb

# 设置权限
sudo chown -R mongodb:mongodb /var/lib/mongodb
sudo chown -R mongodb:mongodb /var/log/mongodb
```

配置文件

```Bash
# 配置文件检查
sudo nano /etc/mongod.conf
```

启用和启动服务

```Bash
# 重新加载 systemd 配置
sudo systemctl daemon-reload

# 启用开机自启
sudo systemctl enable mongodb.service

# 启动 MongoDB 服务
sudo systemctl start mongodb.service

# 检查服务状态
sudo systemctl status mongodb.service
```