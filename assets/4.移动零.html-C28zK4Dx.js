import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,b as n}from"./app-CsL1EK8T.js";const l="/assets/image-20241108105736779-Zq6onmcu.png",t={},h=n(`<h1 id="_4-移动零" tabindex="-1"><a class="header-anchor" href="#_4-移动零"><span>4.移动零</span></a></h1><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h2><br><p><a href="https://leetcode.cn/problems/move-zeroes/solutions/489622/yi-dong-ling-by-leetcode-solution/?envType=study-plan-v2&amp;envId=top-100-liked" target="_blank" rel="noopener noreferrer">283. 移动零 - 力扣（LeetCode）</a></p><h2 id="个人尝试" tabindex="-1"><a class="header-anchor" href="#个人尝试"><span>个人尝试</span></a></h2><br><p>j 向后遍历寻找 非零值，i 也向后遍历寻找 0；</p><p>当各自找到目标值，i &lt; j ，并且 i 、 j 不越界则交换位置。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Solution</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 代码有点复杂化了</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> moveZeroes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (nums </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ||</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ||</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> j</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nums[j] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) j++;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nums[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) i++;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            // [0,1,0,3,12]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ||</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">break</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            // [1, 0], [1, 0, 1]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> j) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                j++;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                continue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> tmp</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nums[i];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            nums[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nums[j];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            nums[j] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> tmp;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="优秀题解" tabindex="-1"><a class="header-anchor" href="#优秀题解"><span>优秀题解</span></a></h2><br><p><a href="https://leetcode.cn/problems/move-zeroes/solutions/489622/yi-dong-ling-by-leetcode-solution/?envType=study-plan-v2&amp;envId=top-100-liked" target="_blank" rel="noopener noreferrer">283. 移动零 - 力扣（LeetCode）</a></p><p>官方题解评论区的发言</p><figure><img src="`+l+`" alt="image-20241108105736779" tabindex="0" loading="lazy"><figcaption>image-20241108105736779</figcaption></figure><p>执行用时最优的题解</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Solution</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 用 i 记录「新数组」的 index，j 遍历「旧数组」中不为0的 index</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> moveZeroes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> j</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; j++) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            // if (nums[j] != 0 &amp;&amp; i != j) ==&gt; 遇到[2, 1]出错</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(nums[j] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                nums[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nums[j];</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                // [1, 0]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> j) nums[j] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                i++;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),e=[h];function k(p,r){return a(),s("div",null,e)}const A=i(t,[["render",k],["__file","4.移动零.html.vue"]]),g=JSON.parse('{"path":"/basic_of_computer_science/algorithm/leetcode_top100/4.%E7%A7%BB%E5%8A%A8%E9%9B%B6.html","title":"4.移动零","lang":"zh-CN","frontmatter":{"title":"4.移动零","category":["Algorithm"],"description":"4.移动零 参考链接 283. 移动零 - 力扣（LeetCode） 个人尝试 j 向后遍历寻找 非零值，i 也向后遍历寻找 0； 当各自找到目标值，i < j ，并且 i 、 j 不越界则交换位置。 优秀题解 283. 移动零 - 力扣（LeetCode） 官方题解评论区的发言 image-20241108105736779image-2024110...","head":[["meta",{"property":"og:url","content":"https://raylan-chen.github.io/basic_of_computer_science/algorithm/leetcode_top100/4.%E7%A7%BB%E5%8A%A8%E9%9B%B6.html"}],["meta",{"property":"og:site_name","content":"MyBlog"}],["meta",{"property":"og:title","content":"4.移动零"}],["meta",{"property":"og:description","content":"4.移动零 参考链接 283. 移动零 - 力扣（LeetCode） 个人尝试 j 向后遍历寻找 非零值，i 也向后遍历寻找 0； 当各自找到目标值，i < j ，并且 i 、 j 不越界则交换位置。 优秀题解 283. 移动零 - 力扣（LeetCode） 官方题解评论区的发言 image-20241108105736779image-2024110..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-10T07:07:17.000Z"}],["meta",{"property":"article:author","content":"raylan.chen"}],["meta",{"property":"article:modified_time","content":"2024-11-10T07:07:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4.移动零\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-10T07:07:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"raylan.chen\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]},{"level":2,"title":"个人尝试","slug":"个人尝试","link":"#个人尝试","children":[]},{"level":2,"title":"优秀题解","slug":"优秀题解","link":"#优秀题解","children":[]}],"git":{"createdTime":1731222437000,"updatedTime":1731222437000,"contributors":[{"name":"Raylan.Chen","email":"chen.z.my@qq.com","commits":1}]},"readingTime":{"minutes":0.98,"words":295},"filePathRelative":"basic_of_computer_science/algorithm/leetcode_top100/4.移动零.md","localizedDate":"2024年11月10日","excerpt":"\\n<h2>参考链接</h2>\\n<br>\\n<p><a href=\\"https://leetcode.cn/problems/move-zeroes/solutions/489622/yi-dong-ling-by-leetcode-solution/?envType=study-plan-v2&amp;envId=top-100-liked\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">283. 移动零 - 力扣（LeetCode）</a></p>\\n<h2>个人尝试</h2>\\n<br>\\n<p>j 向后遍历寻找 非零值，i 也向后遍历寻找 0；</p>\\n<p>当各自找到目标值，i &lt; j ，并且 i 、 j 不越界则交换位置。</p>","autoDesc":true}');export{A as comp,g as data};
