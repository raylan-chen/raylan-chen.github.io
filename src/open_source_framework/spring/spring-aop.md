# Spring AOP初探

## 参考链接

<https://javabetter.cn/springboot/aop-log.html>

<https://pdai.tech/md/spring/spring-x-framework-aop.html#aop%E6%9C%AF%E8%AF%AD>

<https://www.liaoxuefeng.com/wiki/1252599548343744/1310052352786466>

<黑马苍穹外卖>

---

**面向切面编程（Aspect-oriented Programming，AOP）**：通过  切面技术  为业务主体添加额外的通知？操作？（Advice），从而对声明为  切点（Pointcut） 的代码块进行统一管理和装饰

* 将与核心业务没有密切关联的功能添加到程序中，例如  日志功能
* 对  面向对象编程  的一种补充？，面向切面编程？
* 对业务逻辑的各个部分进行隔离，降低耦合度，**提高程序的可重用性**，提高了开发效率
* 可应用于： 方法执行前、执行时、执行后、返回值后、抛出异常后



**代码示例**

```java
/**
 * 统一日志处理切面
 * Created by 石磊
 */
@Aspect
@Component
@Order(1)
public class WebLogAspect {
    private static final Logger LOGGER = LoggerFactory.getLogger(WebLogAspect.class);

    @Pointcut("execution(public * com.codingmore.controller.*.*(..))")
    public void webLog() {
    }
    //Pointcut weblog()
    @Before("webLog()")
    public void doBefore(JoinPoint joinPoint) throws Throwable {
    }

    @AfterReturning(value = "webLog()", returning = "ret")
    public void doAfterReturning(Object ret) throws Throwable {
    }

    @Around("webLog()")
    public Object doAround(ProceedingJoinPoint joinPoint) throws Throwable {
        long startTime = System.currentTimeMillis();
        //获取当前请求对象
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = attributes.getRequest();
        //记录请求信息(通过Logstash传入Elasticsearch)
        WebLog webLog = new WebLog();
        Object result = joinPoint.proceed();
        Signature signature = joinPoint.getSignature();
        MethodSignature methodSignature = (MethodSignature) signature;
        Method method = methodSignature.getMethod();
        if (method.isAnnotationPresent(ApiOperation.class)) {
            ApiOperation log = method.getAnnotation(ApiOperation.class);
            webLog.setDescription(log.value());
        }
        long endTime = System.currentTimeMillis();
        String urlStr = request.getRequestURL().toString();
        webLog.setBasePath(StrUtil.removeSuffix(urlStr, URLUtil.url(urlStr).getPath()));
        webLog.setIp(request.getRemoteUser());
        Map<String,Object> logMap = new HashMap<>();
        logMap.put("spendTime",webLog.getSpendTime());
        logMap.put("description",webLog.getDescription());
        LOGGER.info("{}", JSONUtil.parse(webLog));
        return result;
    }
}
```



**关键术语**

1) **切面（Aspect）**： 通常使用**注解**`@Aspect` 定义切面，将**横切关注点**封装成**类**，每个关注点体现为  连接点？
2) **切点（Pointcut）**：连接点的集合

```java
//语法规范
execution(modifiers-pattern? //访问权限修饰符，？ 表示可选
          ret-type-pattern //返回类型，*表示任意
          declaring-type-pattern? //包名
		 name-pattern(param-pattern) //方法名（参数），（..）表示0/任意参数
          throws-pattern? //异常类型
         )
/*
* 例子
*	com.codingmore.controller	//包名
*	.*	//所有类
*	.*	//所有方法
*/
@Pointcut("execution(public * com.codingmore.controller.*.*(..))")
```

3. **通知（Advice）**： 连接点 前后所需执行的操作？
   * @Before：在  连接点  前  执行
   
   * @After
   
   * @AfterReturning
   
   * @AfterThrowing：抛出异常后执行
   
   * @Around： 连接点  **前后**  分别执行操作
   
4. **连接点（JointPoint）**： 表示在何处执行操作？
   * `getArgs()`: 返回方法参数的数组
   * `getThis()`: 返回AOP代理对象？
   * `getTarget()`: 返回目标对象？（被代理的原始对象？）
   * `getSignature()`: 返回连接点签名，即方法的描述符？
   * `toString()`: 放回连接点的字符串表示