import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "语言基础",
    link: "",
    prefix: "",
    children: [
      {
        text: "JavaSE",
        link: "/java-se/",
      }, 
    ]
  },

  {
    text: "算法",
    link: "",
    prefix: "",
    children: [
      {
        text: "Algorithm",
        link: "/algorithm/",
      }, 
    ]
  },

  {
    text: "操作系统",
    link: "",
    prefix: "",
    children: [
      {
        text: "Linux",
        link: "/linux/",
      }, 
    ]
  },

  {
    text: "框架",
    link: "",
    prefix: "",
    children: [
      {
        text: "Spring",
        link: "/spring/"
      },
      {
        text: "SpringMVC",
        link: "/springmvc/"
      },
      {
        text: "SpringBoot",
        link: "/springboot/"
      },
      {
        text: "MyBatis",
        link: "/mybatis/"
      },
    ]
  },

  {
    text: "数据库",
    link: "",
    prefix: "",
    children: [
      {
        text: "MySQL",
        link: "/mysql/"
      },
    ]
  },

  {
    text: "中间件",
    link: "",
    prefix: "",
    children: [
      {
        text: "Redis",
        link: "/redis/"
      },
      {
        text: "MessageQueue",
        link: "/message-queue/"
      },
    ]
  },

  {
    text: "项目",
    link: "",
    prefix: "",
    children: [
      {
        text: "Project",
        link: "/project/",
      }, 
    ]
  },

  {
    text: "其他",
    link: "",
    prefix: "",
    children: [
      {
        text: "Git",
        link: "/git/",
      }, 
      {
        text: "Software",
        link: "/software/",
      }, 
      {
        text: "Blog",
        link: "/blog/",
      }, 
    ]
  },
]);
