# Java8 新特性



## Lambda表达式

[Java Lambda 表达式 | 菜鸟教程](https://www.runoob.com/java/java8-lambda-expressions.html)

Java8 发布的新特性

Lambda 允许把**函数**作为**方法的参数**

Lambda表达式使得代码变得简洁紧凑



个人对 Lambda表达式 用于 函数式接口 的理解：

接口——抽象方法 需要实现

Lambda表达式传递函数——实现抽象方法





## 接口中的default方法

[Java 8 默认方法 | 菜鸟教程](https://www.runoob.com/java/java8-default-methods.html)

接口中存在已实现的方法，不需要实现类实现该方法

关键字：default

缺点：当需要修改接口时候，需要修改全部实现该接口的类 ？

作用：目前的 java 8 之前的集合框架没有 foreach 方法，通常能想到的解决办法是在JDK里给相关的接口添加新的方法及实现。然而，对于已经发布的版本，没法在给接口添加新方法的同时不影响已有的实现。所以引进的默认方法，目的是为了解决接口的修改与现有的实现不兼容的问题。