# SpringSecurity

## 相关链接

[SpringBoot 场景开发多面手成长手册 - LinkedBear - 掘金小册](https://juejin.cn/book/7163911983304015909/section/7163940120549130276?enter_from=course_center&utm_source=course_center)

[01 复杂商城项目介绍 | Java项目实战网站 - Java突击队](http://www.susan.net.cn/project/mall/1.intro.html)



## 术语

认证（Authentication）：验证用户信息是否合法。



鉴权（Authorization）：验证通过认证的用户是否拥有访问某资源的权限。



## SpringSecurity原理

通过 Servlet Filter Chain 进行请求过滤；

通过 AOP 进行方法级别的鉴权。



## SpringSecurity实践

传统的表单登录（Form Login）首次认证：

request→UsernamePasswordAuthenticationFilter→AuthenticationManager→UserDetailService→认证成功→写入 HttpSession→返回 Cookie

<br>

前后端分离 JWT 首次认证：

request→controller→AuthenticationManager.authenticate→ProviderManager→DaoAuthenticationProvider→UserDetailService→BCryptPasswordEncoder→认证成功→生成 JWT→Redis 存储→response

<br>

非首次认证 + 鉴权：

request→JwtAuthenticationFilter→Redis→SecurityContextHolder→@PreAuthorize



