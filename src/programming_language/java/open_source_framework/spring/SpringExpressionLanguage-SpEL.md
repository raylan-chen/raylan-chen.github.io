---
title: Spring Expression Language—Spring表达语言
category:
  - 开源框架
---



# Spring Expression Language—Spring表达语言

## 参考链接

<https://jishu.dev/2021/05/23/spring-expression-language/#>

<http://masikkk.com/article/Spring-SpEL/#>

<https://juejin.cn/post/7117839866523549710>

---

**SpEL**

一个支持运行时查询和操作对象图的强大的表达式语言

可以与XML或基于注释的Spring配置一起使用



```java
// 1、构造解析器
ExpressionParser parser = new SpelExpressionParser();
// 2、解析表达式
Expression expression = parser.parseExpression("'this is a str'");
// 3、获取结果
String strVaue = (String) expression.getValue();
// String strValue = expression.getValue(String.class);
// System.out.println(strValue); // 输出: this is a str
```



```java
// 定义变量
String name = "Tom";
EvaluationContext context = new StandardEvaluationContext();  // 表达式的上下文,
context.setVariable("myName", name);        // 为了让表达式可以访问该对象, 先把对象放到上下文中
ExpressionParser parser = new SpelExpressionParser();
// 访问变量
parser.parseExpression("#myName").getValue(context, String.class);   // Tom , 使用变量
```

