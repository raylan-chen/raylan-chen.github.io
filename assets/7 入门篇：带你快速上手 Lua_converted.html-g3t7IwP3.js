import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,b as e}from"./app-CsL1EK8T.js";const n="/assets/20250311_2337017487-Do2O7nJj.png",t={},l=e('<h2 id="思维导图" tabindex="-1"><a class="header-anchor" href="#思维导图"><span>思维导图</span></a></h2><figure><img src="'+n+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="环境" tabindex="-1"><a class="header-anchor" href="#环境"><span>环境</span></a></h2><p>使用<code>openresty -V</code>查看 OpenResty 安装位置：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">root@DESKTOP-42B4J2H:/opt/lua#</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> openresty</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -V</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nginx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> version:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> openresty/1.27.1.1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">built</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> with</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> OpenSSL</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3.0.15</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Sep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2024</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">TLS</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> SNI</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> support</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enabled</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">configure</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> arguments:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --prefix=/usr/local/openresty/nginx...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>切换到<code>usr/local/openresty</code>可以看到<code>luajit</code>目录，将其路径加入到环境变量：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> PATH</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">usr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">local</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">openresty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">luajit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">bin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$PATH</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>接下来便可以使用<code>luajit</code>命令。</p>`,8),h=[l];function p(r,k){return a(),s("div",null,h)}const c=i(t,[["render",p],["__file","7 入门篇：带你快速上手 Lua_converted.html.vue"]]),g=JSON.parse('{"path":"/middleware/apisix/OpenResty%20%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E5%AE%9E%E6%88%98/7%20%E5%85%A5%E9%97%A8%E7%AF%87%EF%BC%9A%E5%B8%A6%E4%BD%A0%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B%20Lua_converted.html","title":"7 入门篇：带你快速上手 Lua","lang":"zh-CN","frontmatter":{"title":"7 入门篇：带你快速上手 Lua","category":["Gateway"],"order":7,"description":"思维导图 环境 使用openresty -V查看 OpenResty 安装位置： 切换到usr/local/openresty可以看到luajit目录，将其路径加入到环境变量： 接下来便可以使用luajit命令。","head":[["meta",{"property":"og:url","content":"https://raylan-chen.github.io/middleware/apisix/OpenResty%20%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E5%AE%9E%E6%88%98/7%20%E5%85%A5%E9%97%A8%E7%AF%87%EF%BC%9A%E5%B8%A6%E4%BD%A0%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B%20Lua_converted.html"}],["meta",{"property":"og:site_name","content":"MyBlog"}],["meta",{"property":"og:title","content":"7 入门篇：带你快速上手 Lua"}],["meta",{"property":"og:description","content":"思维导图 环境 使用openresty -V查看 OpenResty 安装位置： 切换到usr/local/openresty可以看到luajit目录，将其路径加入到环境变量： 接下来便可以使用luajit命令。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-11T16:23:24.000Z"}],["meta",{"property":"article:author","content":"raylan.chen"}],["meta",{"property":"article:modified_time","content":"2025-03-11T16:23:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"7 入门篇：带你快速上手 Lua\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-03-11T16:23:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"raylan.chen\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"思维导图","slug":"思维导图","link":"#思维导图","children":[]},{"level":2,"title":"环境","slug":"环境","link":"#环境","children":[]}],"git":{"createdTime":1741710204000,"updatedTime":1741710204000,"contributors":[{"name":"Raylan.Chen","email":"chen.z.my@qq.com","commits":1}]},"readingTime":{"minutes":0.32,"words":96},"filePathRelative":"middleware/apisix/OpenResty 从入门到实战/7 入门篇：带你快速上手 Lua_converted.md","localizedDate":"2025年3月12日","excerpt":"<h2>思维导图</h2>\\n<figure><figcaption></figcaption></figure>\\n<h2>环境</h2>\\n<p>使用<code>openresty -V</code>查看 OpenResty 安装位置：</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">root@DESKTOP-42B4J2H:/opt/lua#</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> openresty</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -V</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">nginx</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> version:</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> openresty/1.27.1.1</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">built</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> with</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> OpenSSL</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 3.0.15</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 3</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> Sep</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 2024</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">TLS</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> SNI</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> support</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> enabled</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">configure</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> arguments:</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --prefix=/usr/local/openresty/nginx...</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{c as comp,g as data};
