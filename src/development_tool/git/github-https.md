---
title: 本地 Git 基于 HTTPS 连接 Github
category:
  - Git
---



# 本地 Git 基于 HTTPS 连接 Github

## 前提

Git 版本（版本号≥2.29，内置Credential Manager Core）

```
PS G:\ git --version
git version 2.45.2.windows.1
```



## 代理设置（Clash, port 7890）

```
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890

# 查看全局配置
git config --global --list
# 取消全局配置
git config --global --unset 配置
```



##  个人访问令牌（Personal Access Token）

- 登录GitHub → Settings → Developer settings → Personal access tokens；
- 勾选 repo 和 workflow 权限；
- 生成后复制token字符串（只显示一次）。



## 使用 Git Credential Manager 存储 Github 凭据

```
git config --global credential.helper manager-core

# 若是报错 git: 'credential-manager-core' is not a git command. See 'git --help'
git config --global --unset credential.helper
git config --global credential.helper manager
```



## 触发凭据存储过程

```
git clone xxx
git push origin main
...
```

弹出认证窗口 ，输入 Github Token。



## 凭证存储

- 打开控制面板 → 用户账户 → 凭据管理器 → Windows凭据；
- 查找 git:https://github.com 条目。



## 刷新或删除凭据

```
git credential-manager delete https://github.com
```

或通过Windows凭据管理器手动删除对应条目。



## 注意事项

个人访问令牌有过期时间，过期后需要重新生成并更新存储的凭据。
