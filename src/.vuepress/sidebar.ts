import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Java",
      icon: "code",
      prefix: "java/",
      link: "java/",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: false,
      // children: "structure",
      children: [
        {
          text: "JavaSE",
          link: "java_se/"
        },
        {
          text: "Java多线程编程",
          link: "java_multithreading/"
        },
        {
          text: "JVM",
          link: "java_jvm/"
        }
      ]
    },
    {
      text: "计算机基础",
      icon: "hippo",
      prefix: "basic_of_computer_science/",
      link: "basic_of_computer_science/",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: false,
      children: "structure",
    },
    {
      text: "开源框架",
      icon: "bomb",
      prefix: "open_source_framework/",
      link: "open_source_framework/",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: false,
      children: "structure",
    },
    {
      text: "数据库",
      icon: "hand",
      prefix: "database/",
      link: "database/",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: false,
      children: "structure",
    },
    {
      text: "中间件",
      icon: "umbrella",
      prefix: "middleware/",
      link: "middleware/",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: false,
      children: 'structure',
    },
    {
      text: "项目",
      icon: "film",
      prefix: "project/",
      link: "project/",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: false,
      children: "structure",
    },
    {
      text: "开发工具",
      icon: "print",
      prefix: "development_tool/",
      link: "development_tool/",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: false,
      children: 'structure',
    },
    "intro",
  ],
});
