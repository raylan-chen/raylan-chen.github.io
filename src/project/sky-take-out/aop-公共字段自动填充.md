# 公共字段填充——面向切面编程

## 参考链接

<黑马苍穹外卖>

---

**AspectJ 引入依赖**

**自定义注解**

```java
@Target(ElementType.METHOD)
@Rentention(RetentionPolicy.RUNTIME)
public @interface AytoFill {
    类型 value();
}
```



**自定义切面类**

```java
@Component  //交由Spring进行管理
@Aspect
public class AutoFillAspect {}
```



**切入点**：连接点的集合

```java
@Pointcut("execution(* com.sky.mapper.*.*(..)) && annotation(com.sky.annotation.AutoFill)")
public void autoFillPointCut() {}
```



**前置通知**

​	在Mapper.java？SQL？执行前，进行公共字段自动填充

​	通知：在连接点上执行的行为？

​	连接点：表示在何处执行操作？

```java
@Before("autoFillPointCut")
public void autoFillAdvice(JointPoint jointPoint) {}

@Before("execution(public * com.it.learnjava.service.UserService.*(..))")  //UserService类中所有方法
```

