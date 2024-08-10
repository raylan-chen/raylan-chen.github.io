import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,b as h}from"./app-BwVlb3CD.js";const t="/assets/image-20240809173548602-Dd8cJWRg.png",e="/assets/image-20240809174739450-fom86F1h.png",n="/assets/image-20240809174722915-CvzOUKIj.png",l="/assets/image-20240809174809105-BWcUx5xz.png",k={},p=h(`<h1 id="搭建个人博客-github-hugo" tabindex="-1"><a class="header-anchor" href="#搭建个人博客-github-hugo"><span>搭建个人博客（Github + Hugo）</span></a></h1><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h2><p><a href="https://www.haoyep.com/posts/windows-hugo-blog-github/#%E4%B8%BB%E9%A2%98" target="_blank" rel="noopener noreferrer">https://www.haoyep.com/posts/windows-hugo-blog-github/#主题</a></p><p><a href="https://cuttontail.blog/blog/create-a-wesite-using-github-pages-and-hugo/" target="_blank" rel="noopener noreferrer">https://cuttontail.blog/blog/create-a-wesite-using-github-pages-and-hugo/</a></p><h2 id="搭建过程" tabindex="-1"><a class="header-anchor" href="#搭建过程"><span>搭建过程</span></a></h2><p>准备工具：Git、Visual Studio Code、Chocolatey（Windows包管理器）</p><p>chocolatey安装hugo</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">choco</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hugo-extended</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>准备文件夹 G:/blog</p><p>使用Hugo新建网站（此时位于G:/</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">WIN11@DESKTOP-42B4J2H</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> MINGW64</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /g</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hugo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> new</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> site</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> blog</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Congratulations!</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Your</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> new</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Hugo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> site</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> was</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> created</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> G:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\b</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">log.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Just</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> few</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> more</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> steps...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">1.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Change</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> current</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> directory</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> G:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\b</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">log.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">2.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Create</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> or</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> theme:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">   -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Create</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> new</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> theme</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> with</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> command</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;hugo new theme &lt;THEMENAME&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">   -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Or,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> theme</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://themes.gohugo.io/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">3.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Edit</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hugo.toml,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> setting</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;theme&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> property</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> theme</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> name.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">4.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Create</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> new</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> content</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> with</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> command</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;hugo new content &lt;SECTIONNAME&gt;\\&lt;FILENAME&gt;.&lt;FORMAT&gt;&quot;.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">5.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> embedded</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> web</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> with</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> command</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;hugo server --buildDrafts&quot;.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">See</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> documentation</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> at</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://gohugo.io/.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入/blog，初始化git仓库</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">WIN11@DESKTOP-42B4J2H</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> MINGW64</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /g/blog</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> init</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Initialized</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> empty</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> repository</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> G:/blog/.git/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>git submodule add + Hugo主题</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">WIN11@DESKTOP-42B4J2H</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> MINGW64</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /g/blog</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (master)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> submodule</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/hugo-fixit/FixIt.git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> themes/FixIt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Cloning</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> into</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;G:/blog/themes/FixIt&#39;...</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">remote:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Enumerating</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> objects:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 23934,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> done.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">remote:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Counting</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> objects:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 100%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (3999/3999), done.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">remote:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Compressing</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> objects:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 100%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (1575/1575), done.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">remote:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Total</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 23934</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (delta </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2542</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">), reused 3701 (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">delta</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2352</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">), pack-reused 19935</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Receiving</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> objects:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 100%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (23934/23934), 55.62 MiB | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">6.44</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> MiB/s,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> done.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Resolving</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> deltas:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 100%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (13740/13740), done.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">warning:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> working</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> copy</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> of</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;.gitmodules&#39;,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> LF</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> will</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> be</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> replaced</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> by</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> CRLF</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> next</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> time</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> touches</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> it</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基础配置，修改hugo.toml文件（自定义修改baseUrl、title、个人图片等内容），hugo.toml文件配置可参考如下</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>https://www.haoyep.com/posts/windows-hugo-blog-github/#%E5%9F%BA%E7%A1%80%E9%85%8D%E7%BD%AE</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>修改文章前缀模板，模板参考：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>https://www.haoyep.com/posts/windows-hugo-blog-github/#%E4%BF%AE%E6%94%B9%E6%96%87%E7%AB%A0%E5%89%8D%E7%BC%80%E6%A8%A1%E6%9D%BF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>创建第一篇文章（markdown文件）</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hugo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> new</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> posts/test.md</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>本地测试</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hugo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> server</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -D</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --disableFastRender</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>本地测试结果</p><p>http://localhost:1313/</p><img src="`+t+`" alt="image-20240809173548602" style="zoom:50%;"><p>使用VSCode终端，生成静态HTML网页</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">PS</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> G:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\b</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">lo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">g&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">hugo</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>进入<code>public</code>文件夹（hugo命令生成的静态网页存放处</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> publc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>本地初始化Git仓库，并与 username.github.io 仓库（已提前创建完毕，并生成了Github Pages）关联</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> init</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> github</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git@github.com:raylan-chen/raylan-chen.github.io.git</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> commit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;自定义记录&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> github</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> master</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于原先仓库创建时，主分支为main，现需切换分支</p><figure><img src="`+e+'" alt="image-20240809174739450" tabindex="0" loading="lazy"><figcaption>image-20240809174739450</figcaption></figure><figure><img src="'+n+'" alt="image-20240809174722915" tabindex="0" loading="lazy"><figcaption>image-20240809174722915</figcaption></figure><p>访问https://raylan-chen.github.io/</p><img src="'+l+'" alt="image-20240809174809105" style="zoom:50%;">',37),r=[p];function d(g,o){return a(),s("div",null,r)}const A=i(k,[["render",d],["__file","搭建个人博客(GithubPages_Hugo).html.vue"]]),y=JSON.parse('{"path":"/blog/%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2(GithubPages_Hugo).html","title":"搭建个人博客（Github + Hugo）","lang":"zh-CN","frontmatter":{"description":"搭建个人博客（Github + Hugo） 参考链接 https://www.haoyep.com/posts/windows-hugo-blog-github/#主题 https://cuttontail.blog/blog/create-a-wesite-using-github-pages-and-hugo/ 搭建过程 准备工具：Git、Visu...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2(GithubPages_Hugo).html"}],["meta",{"property":"og:site_name","content":"MyBlog"}],["meta",{"property":"og:title","content":"搭建个人博客（Github + Hugo）"}],["meta",{"property":"og:description","content":"搭建个人博客（Github + Hugo） 参考链接 https://www.haoyep.com/posts/windows-hugo-blog-github/#主题 https://cuttontail.blog/blog/create-a-wesite-using-github-pages-and-hugo/ 搭建过程 准备工具：Git、Visu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"raylan.chen"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"搭建个人博客（Github + Hugo）\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"raylan.chen\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]},{"level":2,"title":"搭建过程","slug":"搭建过程","link":"#搭建过程","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.86,"words":559},"filePathRelative":"blog/搭建个人博客(GithubPages+Hugo).md","excerpt":"\\n<h2>参考链接</h2>\\n<p><a href=\\"https://www.haoyep.com/posts/windows-hugo-blog-github/#%E4%B8%BB%E9%A2%98\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.haoyep.com/posts/windows-hugo-blog-github/#主题</a></p>\\n<p><a href=\\"https://cuttontail.blog/blog/create-a-wesite-using-github-pages-and-hugo/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://cuttontail.blog/blog/create-a-wesite-using-github-pages-and-hugo/</a></p>","autoDesc":true}');export{A as comp,y as data};
