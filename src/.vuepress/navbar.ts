import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "编程语言",
    link: "",
    prefix: "",
    children: [
      {
        text: "Java",
        link: "programming_language/java/",
      }, 
    ]
  },

  {
    text: "计算机基础",
    link: "",
    prefix: "",
    children: [
      {
        text: "数据结构与算法",
        link: "/basic_of_computer_science/algorithm/",
      }, 
      {
        text: "操作系统",
        link: "/basic_of_computer_science/operating_system/",
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
        link: "/database/mysql/"
      },
      {
        text: "Redis",
        link: "/database/redis/"
      },
    ]
  },

  {
    text: "中间件",
    link: "",
    prefix: "",
    children: [
      {
        text: "消息队列",
        link: "/middleware/message_queue/"
      },
    ]
  },

  {
    text: "开发工具",
    link: "/development_tool/",
    prefix: "",
  },
]);
