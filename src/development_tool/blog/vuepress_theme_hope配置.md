---
title: vuepress-theme-hope配置
category:
  - Blog

---

# vuepress-theme-hope配置

## Mermaid插件支持

[MdEnhance 插件配置 | vuepress-theme-hope](https://theme-hope.vuejs.press/zh/config/plugins/md-enhance.html#mermaid)

[Mermaid | Markdown 增强](https://plugin-md-enhance.vuejs.press/zh/guide/chart/mermaid.html)

[npm最新淘宝镜像站已经更新（2024-2-22）_npm淘宝镜像最新-CSDN博客](https://blog.csdn.net/hap1994/article/details/136224744)

<br/>

```shell
pnpm add mermaid
```

```shell
$ pnpm add mermaid
 WARN  GET https://npm.taobao.org/mirrors/npm/mermaid error (ERR_TLS_CERT_ALTNAME_INVALID). Will retry in 10 seconds. 2 retries left.
 WARN  GET https://npm.taobao.org/mirrors/npm/mermaid error (ERR_TLS_CERT_ALTNAME_INVALID). Will retry in 1 minute. 1 retries left.
 ERR_PNPM_META_FETCH_FAIL  GET https://npm.taobao.org/mirrors/npm/mermaid: request to https://npm.taobao.org/mirrors/npm/mermaid failed, reason: Hostname/IP does not match certificate's altnames: Host: npm.taobao.org. is not in the cert's altnames: DNS:*.tbcdn.cn, DNS:*.taobao.com, DNS:*.alicdn.com, DNS:*.cmos.greencompute.org, DNS:cmos.greencompute.org, DNS:m.intl.taobao.com, DNS:*.mobgslb.tbcache.com, DNS:*.alikunlun.com, DNS:alikunlun.com, DNS:*.django.t.taobao.com, DNS:alicdn.com, DNS:*.tbcache.com, DNS:*.tmall.com, DNS:*.1688.com, DNS:*.3c.tmall.com, DNS:*.alibaba.com, DNS:*.aliexpress.com, DNS:*.aliqin.tmall.com, DNS:*.alitrip.com, DNS:*.aliyun.com, DNS:*.cainiao.com, DNS:*.cainiao.com.cn, DNS:*.chi.taobao.com, DNS:*.chi.tmall.com, DNS:*.china.taobao.com, DNS:*.dingtalk.com, DNS:*.etao.com, DNS:*.feizhu.cn, DNS:*.feizhu.com, DNS:*.fliggy.com, DNS:*.fliggy.hk, DNS:*.food.tmall.com, DNS:*.jia.taobao.com, DNS:*.jia.tmall.com, DNS:*.ju.taobao.com, DNS:*.juhuasuan.com, DNS:*.lw.aliimg.com, DNS:*.m.1688.com, DNS:*.m.alibaba.com, DNS:*.m.alitrip.com, DNS:*.m.cainiao.com, DNS:*.m.etao.com, DNS:*.m.taobao.com, DNS:*.m.taopiaopiao.com, DNS:*.m.tmall.com, DNS:*.m.tmall.hk, DNS:*.mei.com, DNS:*.taopiaopiao.com, DNS:*.tmall.hk, DNS:*.trip.taobao.com, DNS:*.xiami.com, DNS:1688.com, DNS:alibaba.com, DNS:aliexpress.com, DNS:alitrip.com, DNS:aliyun.com, DNS:cainiao.com, DNS:cainiao.com.cn, DNS:dingtalk.com, DNS:etao.com, DNS:feizhu.cn, DNS:feizhu.com, DNS:fliggy.com, DNS:fliggy.hk, DNS:juhuasuan.com, DNS:mei.com, DNS:taobao.com, DNS:taopiaopiao.com, DNS:tmall.hk, DNS:xiami.com, DNS:tmall.com, DNS:*.cloudvideocdn.taobao.com, DNS:cloudvideocdn.taobao.com, DNS:tbcdn.cn
```

更换为官方 npm 源

```shell
$ pnpm config get registry
https://registry.npmjs.org/

WIN11@DESKTOP-42B4J2H MINGW64 /g/blog-vuepress/blog (master)
$ pnpm add mermaid
Progress: resolved 0, reused 1, downloaded 0, added 0
Progress: resolved 4, reused 4, downloaded 0, added 0

```

等了很久没动静

重新更换镜像源

[npm最新淘宝镜像站已经更新（2024-2-22）_npm淘宝镜像最新-CSDN博客](https://blog.csdn.net/hap1994/article/details/136224744)

```shell
WIN11@DESKTOP-42B4J2H MINGW64 /g/blog-vuepress/blog (master)
$ pnpm config set registry https://registry.npmmirror.com

WIN11@DESKTOP-42B4J2H MINGW64 /g/blog-vuepress/blog (master)
$ pnpm add mermaid
Progress: resolved 0, reused 1, downloaded 0, added 0

   ╭──────────────────────────────────────────────────────────────────╮
   │                                                                  │
   │                Update available! 9.7.0 → 9.10.0.                 │
   │   Changelog: https://github.com/pnpm/pnpm/releases/tag/v9.10.0   │
   │         Run a script from: https://pnpm.io/installation          │
   │                                                                  │
   │         Follow @pnpmjs for updates: https://x.com/pnpmjs         │
   │                                                                  │
   ╰──────────────────────────────────────────────────────────────────╯

Progress: resolved 84, reused 7, downloaded 0, added 0
Progress: resolved 110, reused 11, downloaded 0, added 0
Progress: resolved 140, reused 24, downloaded 0, added 0
Progress: resolved 145, reused 29, downloaded 0, added 0
Progress: resolved 152, reused 36, downloaded 0, added 0
Progress: resolved 159, reused 43, downloaded 0, added 0
Progress: resolved 166, reused 50, downloaded 0, added 0
Progress: resolved 168, reused 52, downloaded 0, added 0
Progress: resolved 168, reused 54, downloaded 0, added 0
Progress: resolved 174, reused 62, downloaded 0, added 0
Progress: resolved 178, reused 66, downloaded 0, added 0
Progress: resolved 183, reused 71, downloaded 0, added 0
Progress: resolved 188, reused 76, downloaded 0, added 0
Progress: resolved 194, reused 83, downloaded 0, added 0
Progress: resolved 207, reused 97, downloaded 0, added 0
Progress: resolved 212, reused 102, downloaded 1, added 0
Progress: resolved 212, reused 102, downloaded 2, added 0
Progress: resolved 212, reused 102, downloaded 3, added 0
Progress: resolved 212, reused 103, downloaded 3, added 0
Progress: resolved 213, reused 103, downloaded 3, added 0
Progress: resolved 213, reused 103, downloaded 9, added 0
Progress: resolved 213, reused 103, downloaded 13, added 0
Progress: resolved 215, reused 105, downloaded 13, added 0
Progress: resolved 216, reused 106, downloaded 13, added 0
Progress: resolved 217, reused 107, downloaded 13, added 0
Progress: resolved 217, reused 108, downloaded 13, added 0
Progress: resolved 226, reused 116, downloaded 14, added 0
Progress: resolved 234, reused 124, downloaded 14, added 0
Progress: resolved 237, reused 127, downloaded 14, added 0
Progress: resolved 240, reused 130, downloaded 14, added 0
Progress: resolved 271, reused 161, downloaded 15, added 0
Progress: resolved 277, reused 167, downloaded 15, added 0
Progress: resolved 280, reused 170, downloaded 15, added 0
Progress: resolved 280, reused 170, downloaded 16, added 0
Progress: resolved 303, reused 193, downloaded 16, added 0
Progress: resolved 304, reused 194, downloaded 17, added 0
Progress: resolved 304, reused 195, downloaded 17, added 0
Progress: resolved 308, reused 198, downloaded 25, added 0
Progress: resolved 309, reused 199, downloaded 27, added 0
Progress: resolved 311, reused 201, downloaded 28, added 0
Progress: resolved 320, reused 210, downloaded 29, added 0
Progress: resolved 327, reused 217, downloaded 30, added 0
Progress: resolved 331, reused 221, downloaded 31, added 0
Progress: resolved 333, reused 223, downloaded 31, added 0
Progress: resolved 353, reused 243, downloaded 39, added 0
Progress: resolved 370, reused 260, downloaded 47, added 0
Progress: resolved 384, reused 274, downloaded 59, added 0
Progress: resolved 394, reused 284, downloaded 63, added 0
Progress: resolved 394, reused 284, downloaded 64, added 0
Progress: resolved 394, reused 284, downloaded 65, added 0
Progress: resolved 423, reused 290, downloaded 78, added 0
Progress: resolved 423, reused 290, downloaded 79, added 0
Progress: resolved 424, reused 291, downloaded 79, added 0
Progress: resolved 427, reused 294, downloaded 85, added 0
Progress: resolved 427, reused 295, downloaded 85, added 0
Progress: resolved 428, reused 296, downloaded 86, added 0
Progress: resolved 432, reused 300, downloaded 93, added 0
Packages: +99 -3
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++---
Progress: resolved 432, reused 300, downloaded 94, added 0
Progress: resolved 432, reused 300, downloaded 94, added 5
Progress: resolved 432, reused 300, downloaded 94, added 25
Progress: resolved 432, reused 300, downloaded 94, added 43
Progress: resolved 432, reused 300, downloaded 94, added 51
Progress: resolved 432, reused 300, downloaded 94, added 52
Progress: resolved 432, reused 300, downloaded 94, added 84
Progress: resolved 432, reused 300, downloaded 94, added 96
Progress: resolved 432, reused 300, downloaded 94, added 99, done

dependencies:
+ mermaid 11.2.1

 WARN  Issues with peer dependencies found
.
└─┬ vuepress-theme-hope 2.0.0-rc.52
  └─┬ vuepress-plugin-md-enhance 2.0.0-rc.52
    └── ✕ unmet peer mermaid@^10.8.0: found 11.2.1

Done in 1m 24.6s

成功了
```

在 theme.ts 文件中，修改配置

G:\blog-vuepress\blog\src\.vuepress\theme.ts

```ts
export default hopeTheme(
    plugins: {
        mdEnhance: {
            //Mermaid
            mermaid: true,
        }
    }
);
```

启动项目测试 `pnpm run docs:dev`

访问 <http://localhost:8080/>



## GFM警告

[GFM 警告 | vuepress-theme-hope](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/alert.html)

<br/>

G:\blog-vuepress\blog\src\.vuepress\theme.ts

```ts
export default hopeTheme(
    plugins: {
        mdEnhance: {
            // 启用 GFM 警告
            alert: true,
        }
    }
);
```

使用方法

```
> [!tips]
> 提示信息
```

效果展示：

> [!tip]
>
> 提示信息



## 标记

[标记 | vuepress-theme-hope](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/mark.html#%E9%85%8D%E7%BD%AE)

<br/>

G:\blog-vuepress\blog\src\.vuepress\theme.ts

```ts
export default hopeTheme(
    plugins: {
        mdEnhance: {
            // 标记
            mark: true,
        }
    }
);
```



使用语法

```
== ==
```

效果展示：==标记==
