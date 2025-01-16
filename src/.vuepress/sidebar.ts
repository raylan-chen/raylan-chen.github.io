import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "编程语言",
      icon: "code",
      prefix: "programming_language/",
      link: "programming_language/",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: false,
      children: "structure",
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
      text: "数据库",
      icon: "database",
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
      text: "开发工具",
      icon: "toolbox",
      prefix: "development_tool/",
      link: "development_tool/",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: false,
      children: 'structure',
    },
    "intro",
    {
      text: "更新时间线",
      link: "https://raylan-chen.github.io/article/",
    },
    {
      text: "文章分类",
      link: "https://raylan-chen.github.io/category/algorithm/",
    },
  ],
});
