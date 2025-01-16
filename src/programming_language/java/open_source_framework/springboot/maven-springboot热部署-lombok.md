# Maven、Spring Boot 热部署、Lombok



## Maven安装及配置

### 参考链接

<https://www.quanxiaoha.com/idea/idea-config-maven.html>
<https://juejin.cn/post/7311881316051959842>

---

Maven的下载

配置Maven本地仓库存放路径

%Maven安装目录% / conf / settings.xml 添加配置

```xml
<localRepository>D:\maven\repository</localRepository>
```

配置阿里云 Maven镜像仓库  https://developer.aliyun.com/mvn/guide?spm=a2c6h.13651104.d-5122.1.122d6e1aodV4Oj

```xml
<mirror>
  <id>aliyunmaven</id>
  <mirrorOf>*</mirrorOf>
  <name>阿里云公共仓库</name>
  <url>https://maven.aliyun.com/repository/public</url>
</mirror>
```

配置环境变量，添加 MAVEN_HOME 系统变量

检查环境变量是否配置成功

```bash
mvn -verion
```

IDEA配置Maven：为当前项目配置Maven版本 / 全局配置Maven版本



## 热部署

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
</dependency>
```



## Lombok

`Lombok`可以通过**注解**的形式来简化Java代码

添加`Lombok`的依赖（项目采用Maven构建）

```xml
<dependency>
	<groupId>org.projectlombok</groupId>
	<artifactId>lombok</artifactId>
	<version>1.18.6</version>
	<scope>provided</scope>  <!--scope = providede代表Lombok只在编译阶段生效-->
</dependency>

```

常用的Lombok注解：

​	`@Getter` / `@Setter`

```java
class Demo {
    @Getter @Setter private int age;
    @Setter private String name;
}
```

​	`@ToString`

```java
@ToString
class Demo {
    private int age;
    private String name;
    
    /*
    public String toString() {
        return "Demo( age = " + this.age + ", name = " + this.name + ")";
    }
    */
}
```

​	`@Val` ?

​	`@Data`: 生成getter / setter 、 equals 、 hashCode 以及 toString

```java
@Data
class Demo {
    private int age; 
    private String name;
    /*
    getterr...
    settter...
        
    public boolean equals(Object o) {
        if (o == this) {
            return true;
        } else if (!(o instanceof Demo)) {
            return false;
        } else {
            Demo other = (Demo) o;
            if (!other.canEqual(this)) {
                return false;
            } else if (this.getAge() != other.getAge()) {
                return false;
            } else {
                Object this$name = this.getName();
                Object other$name = other.getName();
                if (this$name == null) {
                    return false;
                } else  if (!this$name.equals(other$name)) {
                    return false;
                }
                
                return true;
            }
        }
    }
    
    public int hashCode() {
        int PRIME = true;
        int result = 1;
        int result = result * 59 +this.getAge();
        Object $name = this.getName();
        result = result * 59 + ($name == null ? 43 : $name.hashCode());
        return result;
    }
    
    toString...
    */
}
```

​	`@Slf4j`

```java
@Slf4j
public class Log4jDemo {
    /*
    private static final Logger log = LoggerFactory.getLogger(Log4jDemo.class);
    
    public Log4jDemo(){
        
    }
    */
    
    public static void main(String[] args) {
        log.info("level: {}", "info");
        log.warn("level: {}", "warn");
        log.error("level: {}", "error");
    }
}
```

​	`@Builder`: 链式调用 ？

```java
public class BuilderDemo {
    private Long id;
    private String name;
    private Integer age;
    
    public static void main(String[] args) {
        BuilderDemo demo = builder.age(18).name("xxx").builder();
        ...
    }
    /*
    BuilderDemo(final Long id, final String name, final Integer age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    
    public static BuilderDemo.BuilderDemoBuilder builder() {
        return new BuilderDemo.BuilderDemoBuilder();
    }
    
    toString...
    
    public static class BuilderDemoBuilder {
        private Long id;
        private String name;
        private Integer age;
        
        BuilderDemoBuilder() {
            
        }
        
        public BuilderDemo.BuilderDemoBuilder id(final Long id) {
            this.id = id;
            return this;
        }
        
        public BuilderDemo.BuilderDemoBuilder name(final String name) {
            this.name = name;
            return this;
        }

        public BuilderDemo.BuilderDemoBuilder age(final Integer age) {
            this.age = age;
            return this;
        }
        
        public BuilderDemo build() {
            return new BuilderDemo(this.id, this.name, this.age);
        }
        
        toString...
    }
    */
}
```



Lombok 的处理流程 ？
