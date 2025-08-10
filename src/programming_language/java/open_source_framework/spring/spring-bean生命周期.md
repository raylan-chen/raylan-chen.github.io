---
title: Spring Bean 生命周期
category:
  - 开源框架

---

# Spring Bean 生命周期

## 参考链接

[小白也能懂的最详细之spring-bean生命周期讲解 - _哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1L14y1S7cf/?spm_id_from=333.337.search-card.all.click&vd_source=d999675f6dab8c0e0ef800a3c2bf4be5)

[如何记忆 Spring Bean 的生命周期1. 引言 “请你描述下 Spring Bean 的生命周期？”，这是面试官 - 掘金](https://juejin.cn/post/6844904065457979405)

[Hollis出品：Java面试宝典-HollisChuang's Blog](https://www.hollischuang.com/archives/6998)

[2.4　通过 XML 装配 bean | Spring 实战(第四版)](https://potoyang.gitbook.io/spring-in-action-v4/di-2-zhang-zhuang-pei-bean/2.4-tong-guo-xml-zhuang-pei-bean)



## Bean 生命周期

```
Spring Bean 生命周期

五步骤
1. 实例化
2. 属性赋值（依赖注入）
3. 初始化
4. 使用 Bean
5. 销毁 Bean

七步骤
1. 实例化
2. 属性赋值（依赖注入）
3. 初始化前，BeanPostProcessor 的 postProcessBeforeInitialization 方法
4. 初始化
5. 初始化后，BeanPostProcessor 的 postProcessorAfterInitialization 方法
6. 使用 Bean
7. 销毁 Bean

十步骤
1. 实例化
2. 属性赋值（依赖注入）
3. BeanPostProcessor::postProcessorBeforeInitialization（接口）
4. Aware（接口）
5. InitializingBean::afterPropertiesSet（接口）
6. 自定义初始化方法（XML 文件配置）
7. BeanPostProcessor::postProcessorAfterInitialization（接口）
8. 注册 Destruction 回调
   使用 Bean
9. DisposableBean::destroy（接口）
10. 自定义销毁方法（XML 文件配置）

```



## 创建项目模拟 Bean 生命周期

### Maven 依赖

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>per.raylan</groupId>
    <artifactId>spring-bean-life-cycle</artifactId>
    <version>0.0.1-SNAPSHOT</version>

    <dependencies>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-context</artifactId>
            <version>5.3.27</version> <!-- 注意 JDK 版本 与 spring-context 版本适配性 -->
        </dependency>
    </dependencies>
</project>

```



### 通过 XML 装配 Bean

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="test" class="per.raylan.springbeanlifecycle.bean.Test" init-method="myInit" destroy-method="myDestroy">
        <property name="name" value="raylan"/>
    </bean>

    <bean id="beanPostProcessor" class="per.raylan.springbeanlifecycle.bean.MyProcessor"></bean>
</beans>
```



### 被管理的 Bean

#### Test

```java
package per.raylan.springbeanlifecycle.bean;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanNameAware;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.config.BeanPostProcessor;

public class Test implements BeanNameAware, InitializingBean, DisposableBean {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
        System.out.println("属性赋值 / 依赖注入");
    }

    /**
     * 初始化
     */
    public void myInit() {
        System.out.println("custom init method");
    }

    /**
     * 销毁
     */
    public void myDestroy() {
        System.out.println("custom destroy method");
    }

    @Override
    public void setBeanName(String name) {
        System.out.println("setBeanName method");
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        System.out.println("afterPropertiesSet method");
    }

    @Override
    public void destroy() throws Exception {
        System.out.println("destroy method");
    }
}

```



#### BeanPostProcessor

```java
package per.raylan.springbeanlifecycle.bean;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;

/**
 * BeanPostProcessor 的前置和后置方法
 */
public class MyProcessor implements BeanPostProcessor {
    /**
     * postProcessBeforeInitialization
     */
    @Override
    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        if (beanName.equals("test")) {
            System.out.println("postProcessBeforeInitialization");
        }
        return bean;
    }

    /**
     * postProcessAfterInitialization
     */
    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
        if (beanName.equals("test")) {
            System.out.println("postProcessAfterInitialization");
        }
        return bean;
    }
}

```



#### main

```java
package per.raylan.springbeanlifecycle;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.expression.Expression;
import org.springframework.expression.ExpressionParser;
import org.springframework.expression.spel.standard.SpelExpressionParser;
import per.raylan.springbeanlifecycle.bean.Test;

public class SpringBeanLifeCycleApplication {

    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");
        // 获取 Bean
        Test test = (Test) context.getBean("test");
        System.out.println("使用 Bean：" + test.getName());
        // 关闭容器，调用销毁方法
        ((ClassPathXmlApplicationContext) context).close();
    }

}

```



### 输出

```
属性赋值 / 依赖注入
setBeanName method
postProcessBeforeInitialization
afterPropertiesSet method
custom init method
postProcessAfterInitialization
使用 Bean：raylan
destroy method
custom destroy method
```

