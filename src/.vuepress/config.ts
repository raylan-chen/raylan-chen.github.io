import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

const patterns = ["**/*.md", "**/*.vue", "!**/_*.md"];

if (process.env.NODE_ENV !== "production") {
  patterns.pop();
}

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "MyBlog",
  description: "",

  theme,

  patterns,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
