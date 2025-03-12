import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as s,b as a}from"./app-CsL1EK8T.js";const n="/assets/image-20240809174946863-Cm1LKbFD.png",t="/assets/image-20240809180533182-DV21KT8p.png",l="/assets/image-20240809180544876-OcICOxzc.png",r={},d=a('<h1 id="hugo使用学习" tabindex="-1"><a class="header-anchor" href="#hugo使用学习"><span>Hugo使用学习</span></a></h1><h2 id="markdown-引用图片" tabindex="-1"><a class="header-anchor" href="#markdown-引用图片"><span>Markdown 引用图片</span></a></h2><p>先明确文件目录结构为</p><figure><img src="'+n+`" alt="image-20240809174946863" tabindex="0" loading="lazy"><figcaption>image-20240809174946863</figcaption></figure><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>content/</span></span>
<span class="line"><span>├── posts/</span></span>
<span class="line"><span>│   ├── test/</span></span>
<span class="line"><span>│   │   ├── assets/</span></span>
<span class="line"><span>│   │   │    └── image.png</span></span>
<span class="line"><span>│   │   └── test.md</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在 test.md 中需要引用 image.png</p><p>正确语法为</p><div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">![</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#A626A4;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;--shiki-light-text-decoration:inherit;--shiki-dark-text-decoration:underline;">./assets/image-20240809165309184.png</span><span style="--shiki-light:#A626A4;--shiki-dark:#E06C75;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>原先Typora使用的引用方式为</p><div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">![</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#A626A4;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;--shiki-light-text-decoration:inherit;--shiki-dark-text-decoration:underline;">.assets/image-20240809165309184.png</span><span style="--shiki-light:#A626A4;--shiki-dark:#E06C75;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>省略了 <code>./</code>，且文件夹名为 <code>.asserts</code>，导致图片加载异常</p><h2 id="文章分类" tabindex="-1"><a class="header-anchor" href="#文章分类"><span>文章分类</span></a></h2><p>Hugo允许在内容文件中使用yaml、toml或json来添加前置格式</p><p><a href="https://hugo.opendocs.io/content-management/front-matter/" target="_blank" rel="noopener noreferrer">前置格式 | Hugo官方文档</a></p><p>Markdown 文件，Front matter，使用 YAML 分类文章</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>---</span></span>
<span class="line"><span># 文章所属的类别</span></span>
<span class="line"><span>categories: </span></span>
<span class="line"><span>- test</span></span>
<span class="line"><span>---</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+t+'" alt="image-20240809180533182" tabindex="0" loading="lazy"><figcaption>image-20240809180533182</figcaption></figure><figure><img src="'+l+`" alt="image-20240809180544876" tabindex="0" loading="lazy"><figcaption>image-20240809180544876</figcaption></figure><h2 id="草稿-xxx-md" tabindex="-1"><a class="header-anchor" href="#草稿-xxx-md"><span>草稿（xxx.md）</span></a></h2><p>Markdown 文件，Front matter，使用 YAML 设置文章为草稿版本</p><div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">draft</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>By default, Hugo does not publish draft pages when you build your site. To include draft pages when you build your site, use the <code>--buildDrafts</code> command line flag.</p><p>以上内容来自<a href="https://gohugo.io/methods/page/draft/" target="_blank" rel="noopener noreferrer">https://gohugo.io/methods/page/draft/</a></p></blockquote>`,22),p=[d];function o(h,c){return s(),i("div",null,p)}const k=e(r,[["render",o],["__file","hugo.html.vue"]]),u=JSON.parse('{"path":"/development_tool/blog/hugo.html","title":"Hugo使用学习","lang":"zh-CN","frontmatter":{"title":"Hugo使用学习","category":["Blog"],"description":"Hugo使用学习 Markdown 引用图片 先明确文件目录结构为 image-20240809174946863image-20240809174946863 现在 test.md 中需要引用 image.png 正确语法为 原先Typora使用的引用方式为 省略了 ./，且文件夹名为 .asserts，导致图片加载异常 文章分类 Hugo允许在内容...","head":[["meta",{"property":"og:url","content":"https://raylan-chen.github.io/development_tool/blog/hugo.html"}],["meta",{"property":"og:site_name","content":"MyBlog"}],["meta",{"property":"og:title","content":"Hugo使用学习"}],["meta",{"property":"og:description","content":"Hugo使用学习 Markdown 引用图片 先明确文件目录结构为 image-20240809174946863image-20240809174946863 现在 test.md 中需要引用 image.png 正确语法为 原先Typora使用的引用方式为 省略了 ./，且文件夹名为 .asserts，导致图片加载异常 文章分类 Hugo允许在内容..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-11T05:55:41.000Z"}],["meta",{"property":"article:author","content":"raylan.chen"}],["meta",{"property":"article:modified_time","content":"2024-11-11T05:55:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Hugo使用学习\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-11T05:55:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"raylan.chen\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"Markdown 引用图片","slug":"markdown-引用图片","link":"#markdown-引用图片","children":[]},{"level":2,"title":"文章分类","slug":"文章分类","link":"#文章分类","children":[]},{"level":2,"title":"草稿（xxx.md）","slug":"草稿-xxx-md","link":"#草稿-xxx-md","children":[]}],"git":{"createdTime":1723294370000,"updatedTime":1731304541000,"contributors":[{"name":"Raylan.Chen","email":"chen.z.my@qq.com","commits":2}]},"readingTime":{"minutes":0.72,"words":217},"filePathRelative":"development_tool/blog/hugo.md","localizedDate":"2024年8月10日","excerpt":"\\n<h2>Markdown 引用图片</h2>\\n<p>先明确文件目录结构为</p>\\n<figure><figcaption>image-20240809174946863</figcaption></figure>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>content/</span></span>\\n<span class=\\"line\\"><span>├── posts/</span></span>\\n<span class=\\"line\\"><span>│   ├── test/</span></span>\\n<span class=\\"line\\"><span>│   │   ├── assets/</span></span>\\n<span class=\\"line\\"><span>│   │   │    └── image.png</span></span>\\n<span class=\\"line\\"><span>│   │   └── test.md</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{k as comp,u as data};
