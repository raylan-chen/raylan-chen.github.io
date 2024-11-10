import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "MyBlog",
  description: "",

  theme,

  pagePatterns: [
    "**/*.md", 
    "!**/~*.md", 
    "!.vuepress", 
    "!node_modules", 
    "!**/12306", 
    "!**/dynamic-thread-pool", 
    "!**/个人总结"
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
