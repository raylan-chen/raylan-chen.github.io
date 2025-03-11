---
title: 5 Tutorial
category:
  - Gateway
---



## 发布 API

### 思维导图
![](./images/20250311_2311093256.png)



### 概念介绍
🔶上游（Upstream）

上游：应用层服务 / 节点 的抽象；

路由 / 服务 与 上游 对应关系可以为：多对一。



🔶服务（Service）

服务：某类 API 的抽象？（一组 路由 的抽象？）

对应关系：服务与上游 通常是 一对一，路由与服务 通常是 多对一。

![](./images/20250311_2311106990.png)



🔶路由（Route）

路由包含：匹配规则、插件配置、上游信息；

APISIX 通过 路由定义规则 来匹配客户端请求，根据匹配结果加载并执行相应的 插件，最后把请求转发给指定的 上游服务。



## 保护 API
### 思维导图
![画板](./images/20250311_2311104442.png)



### 概念介绍
🔶插件（Plugin）

插件，在 HTTP 请求 或 响应生命周期期间执行的、针对请求的个性化策略；

插件是扩展 APISIX 应用层能力的关键机制，也是使用 APISIX 时最常用的资源对象；



插件可以与 路由、服务、消费者 绑定；

插件配置生效优先级：消费者，路由，插件配置，服务；

插件执行过程：rewrite, access, before_proxy, header_filter, body_filter, log。



## Observability（可观测性）
APISIX 通过 可观测性插件 来了解 API 行为，进而使得整个业务流程更加清晰。

### 监控 API
#### 思维导图
![画板](./images/20250311_2311109775.png)

#### API 可观测性
可观测性可分为三个关键部分：日志（Logging）、指标（Metrics）、链路追踪（Tracing）。



### 健康检查
健康检查：可以在上游节点发生故障 / 迁移时，将请求代理到健康节点上，最大程度避免服务不可用问题；其通过 `lua-resty-healthcheck` 实现，分为主动检查和被动检查。

#### 思维导图
![画板](./images/20250311_2311102233.png)



### Monitor API Health Check with Prometheus
#### 思维导图
![画板](./images/20250311_2311103264.png)



## Manage API Consumers
### 思维导图
![画板](./images/20250311_2311103068.png)

### 消费者（Consumer）/ 消费者组（Consumer Groups）
Consumer 是 某类服务 / 上游 的消费者，需要与用户认证配合使用。



Consumer 配置地址：

```bash
http://127.0.0.1:9180/apisix/admin/consumers
```



不同的 Consumer 请求同一个 API 时，APISIX 会根据当前请求的用户信息，对应不同的 Plugin 或 Upstream 配置。



插件配置优先级：Consumer > Route > Plugin Config > Service。



Consumer Groups ，通过其可以在同一个消费者组中启用任意数量的插件，并在一个或多个消费者中引用该消费者组。



Consumer Groups 配置地址：

```bash
http://127.0.0.1:9180/apisix/admin/consumer_groups
```



## Cache API response
### 思维导图
![画板](./images/20250311_2311118156.png)



## Add multiple API versions
### 思维导图
![画板](./images/20250311_2311119763.png)



## 配置客户端与 APISIX 之间的双向认证(mTLS)
mTLS 是一种双向身份认证的方式，其只有受信任的客户端才可以访问服务端。

### 思维导图
![画板](./images/20250311_2311115721.png)



## WebSocket Authentication
通过 APISIX 的插件在进行 WebSocket 通信之前，进行鉴权。

### 思维导图
![画板](./images/20250311_2311116735.png)

### 相关概念
#### WebSocket
定义：WebSocket 是一种全双工通信协议，允许客户端和服务端在单个 TCP 连接上进行双向实时通信。（双向通信）



工作方式：通过 HTTP 协议升级为 WebSocket 连接。



#### HTTP 长连接
定义：HTTP 长连接（Keep-Alive）允许在 单个 TCP 连接上发送多个 HTTP 请求和响应，减少频繁建立和连接的开销。（请求-响应模式）



工作方式：客户端发送请求，服务器响应后，连接保持打开。

