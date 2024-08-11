import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Algorithm",
      icon: "hippo",
      prefix: "algorithm/",
      link: "algorithm/",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: false,
      children: "structure",
    },
    {
      text: "Blog",
      icon: "blog",
      prefix: "blog/",
      link: "blog/",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: false,
      children: "structure",
    },
    {
      text: "Git",
      icon: "bomb",
      prefix: "git/",
      link: "git/",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: false,
      children: "structure",
    },
    {
      text: "JavaSE",
      icon: "hand",
      prefix: "java-se/",
      link: "java-se/",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: false,
      children: "structure",
    },
    {
      text: "Linux",
      icon: "umbrella",
      prefix: "linux/",
      link: "linux/",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: false,
      children: 'structure',
    },
    {
      text: "Project",
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
      text: "Software",
      icon: "print",
      prefix: "software/",
      link: "software/",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: false,
      children: 'structure',
    },
    {
      text: "Spring",
      icon: "eye",
      prefix: "spring/",
      link: "spring/",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: false,
      children: 'structure',
    },
    {
      text: "SpringMVC",
      icon: "fire",
      prefix: "springmvc/",
      link: "springmvc/",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: false,
      children: 'structure',
    },
    {
      text: "SpringBoot",
      icon: "code",
      prefix: "springboot/",
      link: "springboot/",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: false,
      children: 'structure',
    },
    "intro",
  ],
});
