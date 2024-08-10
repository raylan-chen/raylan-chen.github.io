# Thymeleaf模板引擎

## 参考链接
<https://javabetter.cn/springboot/thymeleaf.html>

---

**Thymeleaf**

面向Java的HTML页面模板，具有丰富的标签语言和函数，在JSP被淘汰后，成为Spring Boot推荐的模板引擎



**模板引擎**（Template Engine）？

用于生成动态网页内容的工具；它允许开发人员定义HTML页面模板，并将动态数据插入这些模板中，从而生成最终的HTML页面；分离视图和业务逻辑，增加代码的可维护性和可读性



**依赖**

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
```



**配置**

```yml
spring:
  thymeleaf:
    cache: false # 开发时关闭缓存，不然看不到实时页面
```





**存放位置**

resources/templates



**示例**

```html
<!DOCTYPE html>
<html lang="zh" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta http-equiv="content-type" content="text/html;charset=utf-8">
    <title>Thymeleaf</title>
</head>
<body>
    <table>
        <tr>
            <td>用户名</td>
            <td>密码</td>
        </tr>
        <tr th:each="user:${users}">
            <td th:text="${user.name}"></td>
            <td th:text="${user.password}"></td>
        </tr>
    </table>
</body>
</html>

```

