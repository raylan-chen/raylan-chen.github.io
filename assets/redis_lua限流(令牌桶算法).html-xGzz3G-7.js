import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,o as a,b as t}from"./app-CsL1EK8T.js";const n={},o=t('<h1 id="redis-lua-限流-令牌桶算法" tabindex="-1"><a class="header-anchor" href="#redis-lua-限流-令牌桶算法"><span>Redis + Lua 限流（令牌桶算法）</span></a></h1><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h2><p><a href="https://juejin.cn/post/7000520310189457439" target="_blank" rel="noopener noreferrer">SpringBoot+Redis Lua限流最佳实践这是我参与8月更文挑战的第26天，活动详情查看：8月更文挑战 常见的 - 掘金</a></p><p><a href="https://github.com/spring-cloud/spring-cloud-gateway/blob/main/spring-cloud-gateway-server/src/main/resources/META-INF/scripts/request_rate_limiter.lua" target="_blank" rel="noopener noreferrer">spring-cloud-gateway/spring-cloud-gateway-server/src/main/resources/META-INF/scripts/request_rate_limiter.lua at main · spring-cloud/spring-cloud-gateway</a></p><p><a href="https://time.geekbang.org/column/article/485746" target="_blank" rel="noopener noreferrer">26 | 微服务网关：如何设置请求转发、跨域和限流规则？-Spring Cloud 微服务项目实战-极客时间</a></p><p>个人对于令牌桶算法的思路梳理：</p><p>Redis，Hash数据结构</p><p>1、获取剩余Token（如果过期或未初始化则为最大容量）；</p><p>2、获取上次刷新时间（如果过期或未初始化则为0）</p><p>3、计算时间差（now - 上次刷新时间）；</p><p>4、newToken = 时间差 × 生成速率 + remainingToken；</p><p>5、newToken &gt; maxToken ? maxToken : newToken ；</p><p>6、result = （newToken &gt;= required ? 1 : 0）；</p><p>7、存储请求后剩余Token及本次刷新时间；</p>',14),i=[o];function s(p,c){return a(),r("div",null,i)}const g=e(n,[["render",s],["__file","redis_lua限流(令牌桶算法).html.vue"]]),d=JSON.parse('{"path":"/programming_language/java/open_source_framework/springcloud/redis_lua%E9%99%90%E6%B5%81(%E4%BB%A4%E7%89%8C%E6%A1%B6%E7%AE%97%E6%B3%95).html","title":"Redis + Lua 限流（令牌桶算法）","lang":"zh-CN","frontmatter":{"title":"Redis + Lua 限流（令牌桶算法）","category":["开源框架"],"description":"Redis + Lua 限流（令牌桶算法） 参考链接 SpringBoot+Redis Lua限流最佳实践这是我参与8月更文挑战的第26天，活动详情查看：8月更文挑战 常见的 - 掘金 spring-cloud-gateway/spring-cloud-gateway-server/src/main/resources/META-INF/scripts...","head":[["meta",{"property":"og:url","content":"https://raylan-chen.github.io/programming_language/java/open_source_framework/springcloud/redis_lua%E9%99%90%E6%B5%81(%E4%BB%A4%E7%89%8C%E6%A1%B6%E7%AE%97%E6%B3%95).html"}],["meta",{"property":"og:site_name","content":"MyBlog"}],["meta",{"property":"og:title","content":"Redis + Lua 限流（令牌桶算法）"}],["meta",{"property":"og:description","content":"Redis + Lua 限流（令牌桶算法） 参考链接 SpringBoot+Redis Lua限流最佳实践这是我参与8月更文挑战的第26天，活动详情查看：8月更文挑战 常见的 - 掘金 spring-cloud-gateway/spring-cloud-gateway-server/src/main/resources/META-INF/scripts..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-16T09:57:35.000Z"}],["meta",{"property":"article:author","content":"raylan.chen"}],["meta",{"property":"article:modified_time","content":"2025-01-16T09:57:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis + Lua 限流（令牌桶算法）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-16T09:57:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"raylan.chen\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1732621570000,"updatedTime":1737021455000,"contributors":[{"name":"Raylan.Chen","email":"chen.z.my@qq.com","commits":1}]},"readingTime":{"minutes":0.81,"words":242},"filePathRelative":"programming_language/java/open_source_framework/springcloud/redis+lua限流(令牌桶算法).md","localizedDate":"2024年11月26日","excerpt":"\\n<h2>参考链接</h2>\\n<p><a href=\\"https://juejin.cn/post/7000520310189457439\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">SpringBoot+Redis Lua限流最佳实践这是我参与8月更文挑战的第26天，活动详情查看：8月更文挑战 常见的 - 掘金</a></p>\\n<p><a href=\\"https://github.com/spring-cloud/spring-cloud-gateway/blob/main/spring-cloud-gateway-server/src/main/resources/META-INF/scripts/request_rate_limiter.lua\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">spring-cloud-gateway/spring-cloud-gateway-server/src/main/resources/META-INF/scripts/request_rate_limiter.lua at main · spring-cloud/spring-cloud-gateway</a></p>","autoDesc":true}');export{g as comp,d as data};
