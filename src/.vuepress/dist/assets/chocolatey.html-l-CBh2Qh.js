import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,b as n}from"./app-BwVlb3CD.js";const e={},l=n(`<h1 id="chocolatey" tabindex="-1"><a class="header-anchor" href="#chocolatey"><span>Chocolatey</span></a></h1><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h2><p>https://javabetter.cn/gongju/choco.html</p><p>https://blog.csdn.net/yihuajack/article/details/123852060</p><p>https://blog.csdn.net/Kaia_sv/article/details/135046005</p><h2 id="chocolatey-1" tabindex="-1"><a class="header-anchor" href="#chocolatey-1"><span>Chocolatey</span></a></h2><p>Windows系统下的开源包管理器</p><p>Windows PowerShell（管理员）安装Chocolatey，并指定安装路径</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#创建环境路径</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$env</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ChocolateyInstall</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;G:\\Chocolatey&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Environment]::SetEnvironmentVariable(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&#39;ChocolateyInstall&#39;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">,$env:ChocolateyInstall,</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&#39;Machine&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#安装Chocolatey</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Set-ExecutionPolicy</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Bypass</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -Scope</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Process</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -Force</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; [System.Net.ServicePointManager]</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">:SecurityProtocol</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">iex</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ((New-Object </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">System.Net.WebClient</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).DownloadString(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&#39;https://community.chocolatey.org/install.ps1&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>避坑：</p><p>不需要提前创建 例如G:\\Chocolatey文件夹</p><p>由于自己提前创建，导致报错</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>警告: An existing Chocolatey installation was detected. Installation will not continue. This script will not overwrite  existing installations. </span></span>
<span class="line"><span></span></span>
<span class="line"><span>If there is no Chocolatey installation at &#39;G:\\Chocolatey&#39;, delete the folder and attempt the installation again.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检测安装是否成功</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>PS C:\\Users\\WIN11&gt; choco</span></span>
<span class="line"><span>Chocolatey v2.3.0</span></span>
<span class="line"><span>Please run &#39;choco -?&#39; or &#39;choco &lt;command&gt; -?&#39; for help menu.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检测安装目录</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">PS</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> C:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\U</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">sers</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\W</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">IN1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">1&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">choco</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hugo-extended</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Chocolatey</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> v2.3.0</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Installing</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> following</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> packages:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hugo-extended</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">By</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> installing,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> you</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> accept</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> licenses</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> for</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> packages.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Downloading</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> package</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> source</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;https://community.chocolatey.org/api/v2/&#39;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Progress:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Downloading</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hugo-extended</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 0.131.0...</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 100%</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hugo-extended</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> v0.131.0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [Approved]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hugo-extended</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> package</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> files</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> completed.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Performing</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> other</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> installation</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> steps.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">The</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> package</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hugo-extended</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> wants</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;chocolateyInstall.ps1&#39;.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Note:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> If</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> you</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> don&#39;t run this script, the installation will fail.</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Note: To confirm automatically next time, use &#39;-y&#39; or consider:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">choco feature enable -n allowGlobalConfirmation</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Do you want to run the script?([Y]es/[A]ll - yes to all/[N]o/[P]rint): yes</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Extracting 64-bit G:\\Chocolatey\\lib\\hugo-extended\\tools\\hugo_extended_0.131.0_windows-amd64.zip to G:\\Chocolatey\\lib\\hugo-extended\\tools...</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">G:\\Chocolatey\\lib\\hugo-extended\\tools</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ShimGen has successfully created a shim for hugo.exe</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> The install of hugo-extended was successful.</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  Deployed to &#39;G:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">hocolatey</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\l</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ib</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\h</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ugo-extended</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ools&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Chocolatey installed 1/1 packages.</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> See the log for details (G:\\Chocolatey\\logs\\chocolatey.log).</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),t=[l];function h(p,k){return a(),i("div",null,t)}const o=s(e,[["render",h],["__file","chocolatey.html.vue"]]),c=JSON.parse(`{"path":"/software/chocolatey.html","title":"Chocolatey","lang":"zh-CN","frontmatter":{"description":"Chocolatey 参考链接 https://javabetter.cn/gongju/choco.html https://blog.csdn.net/yihuajack/article/details/123852060 https://blog.csdn.net/Kaia_sv/article/details/135046005 Chocola...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/software/chocolatey.html"}],["meta",{"property":"og:site_name","content":"MyBlog"}],["meta",{"property":"og:title","content":"Chocolatey"}],["meta",{"property":"og:description","content":"Chocolatey 参考链接 https://javabetter.cn/gongju/choco.html https://blog.csdn.net/yihuajack/article/details/123852060 https://blog.csdn.net/Kaia_sv/article/details/135046005 Chocola..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"raylan.chen"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Chocolatey\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"raylan.chen\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]},{"level":2,"title":"Chocolatey","slug":"chocolatey-1","link":"#chocolatey-1","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.13,"words":338},"filePathRelative":"software/chocolatey.md","excerpt":"\\n<h2>参考链接</h2>\\n<p>https://javabetter.cn/gongju/choco.html</p>\\n<p>https://blog.csdn.net/yihuajack/article/details/123852060</p>\\n<p>https://blog.csdn.net/Kaia_sv/article/details/135046005</p>\\n<h2>Chocolatey</h2>\\n<p>Windows系统下的开源包管理器</p>\\n<p>Windows PowerShell（管理员）安装Chocolatey，并指定安装路径</p>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">#创建环境路径</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">$env</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">ChocolateyInstall</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'G:\\\\Chocolatey'</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">[Environment]::SetEnvironmentVariable(</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">'ChocolateyInstall'</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">,$env:ChocolateyInstall,</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">'Machine'</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">#安装Chocolatey</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">Set-ExecutionPolicy</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> Bypass</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -Scope</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> Process</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -Force</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">; [System.Net.ServicePointManager]</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">:</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">:SecurityProtocol</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> =</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; </span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">iex</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> ((New-Object </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">System.Net.WebClient</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">).DownloadString(</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">'https://community.chocolatey.org/install.ps1'</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">))</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{o as comp,c as data};
