---
title: Redis + Lua 限流（令牌桶算法）
category:
  - 开源框架

---

# Redis + Lua 限流（令牌桶算法）

## 参考链接

[SpringBoot+Redis Lua限流最佳实践这是我参与8月更文挑战的第26天，活动详情查看：8月更文挑战 常见的 - 掘金](https://juejin.cn/post/7000520310189457439)

[spring-cloud-gateway/spring-cloud-gateway-server/src/main/resources/META-INF/scripts/request_rate_limiter.lua at main · spring-cloud/spring-cloud-gateway](https://github.com/spring-cloud/spring-cloud-gateway/blob/main/spring-cloud-gateway-server/src/main/resources/META-INF/scripts/request_rate_limiter.lua)

[26 | 微服务网关：如何设置请求转发、跨域和限流规则？-Spring Cloud 微服务项目实战-极客时间](https://time.geekbang.org/column/article/485746)



个人对于令牌桶算法的思路梳理：

Redis，Hash数据结构

1、获取剩余Token（如果过期或未初始化则为最大容量）；

2、获取上次刷新时间（如果过期或未初始化则为0）

3、计算时间差（now - 上次刷新时间）；

4、newToken = 时间差 × 生成速率 + remainingToken；

5、newToken  >  maxToken  ?  maxToken :  newToken ；

6、result = （newToken >= required ?  1 : 0）；

7、存储请求后剩余Token及本次刷新时间；

