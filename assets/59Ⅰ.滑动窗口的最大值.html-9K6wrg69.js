import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,b as n}from"./app-CsL1EK8T.js";const h={},l=n(`<h1 id="_59i-滑动窗口的最大值" tabindex="-1"><a class="header-anchor" href="#_59i-滑动窗口的最大值"><span>59Ⅰ.滑动窗口的最大值</span></a></h1><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h2><br><p><a href="https://www.nowcoder.com/exam/oj/ta?page=2&amp;tpId=13&amp;type=265" target="_blank" rel="noopener noreferrer">剑指offer_在线编程_牛客网</a></p><p><a href="https://www.playoffer.cn/631.html" target="_blank" rel="noopener noreferrer">剑指 Offer 59 – I. 滑动窗口的最大值-跟着帅地玩转校招，刷爆各类算法题帅地玩Offer</a></p><p><a href="https://leetcode.cn/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/solutions/213779/mian-shi-ti-59-i-hua-dong-chuang-kou-de-zui-da-1-6/" target="_blank" rel="noopener noreferrer">LCR 183. 望远镜中最高的海拔 - 力扣（LeetCode）</a></p><h2 id="个人尝试" tabindex="-1"><a class="header-anchor" href="#个人尝试"><span>个人尝试</span></a></h2><br><p>很粗糙的一个暴力解法</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Solution</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">[] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">maxAltitude</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">heights</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> limit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (heights </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ||</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> heights</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">return</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> j</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">res</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">heights</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> limit </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // -10000 &lt;= heights[i] &lt;= 10000</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> tmp</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; tmp </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; tmp++) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            res[tmp] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10001</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 先找出第一个滑动窗口的最大值元素</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> limit) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (heights[j] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> res[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]) res[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> heights[j];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            j++;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 滑动窗口每移动一格就要从左边界遍历到右边界寻找最大值</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> index</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (; j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> heights</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i++, j++, index++) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> tmp</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i; tmp </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> j; tmp++) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (res[index] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> heights[tmp]) res[index] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> heights[tmp];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> res;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="优秀题解" tabindex="-1"><a class="header-anchor" href="#优秀题解"><span>优秀题解</span></a></h2><br><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Solution</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">[] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">maxAltitude</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">heights</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> limit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">heights</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ||</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> limit </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">return</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Deque</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">deque</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> LinkedList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">res</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">heights</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> limit </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> j</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> limit; j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> heights</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i++, j++) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            // 队头是否为滑动窗口删除元素</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> deque</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">peekFirst</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> heights[i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">])</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                deque</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">removeFirst</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            // 维持非递减队列</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">deque</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">isEmpty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&amp;&amp;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> deque</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">peekLast</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> heights[j])</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                deque</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">removeLast</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            // 滑动窗口新元素进队</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            deque</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">addLast</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(heights[j]);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            // 队头为滑动窗口最大值</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                res[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> deque</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">peekFirst</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> res;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">作者：</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Krahets</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">链接：https</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">//leetcode.cn/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/solutions/213779/mian-shi-ti-59-i-hua-dong-chuang-kou-de-zui-da-1-6/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">来源：力扣（LeetCode）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p>个人理解：</p><p>维持一个「非递减队列」来保存滑动窗口的「临时最大值队列」，</p><p>队列中的队头是滑动窗口中目前元素的最大值，</p><p>每当滑动窗口移动时，可能更为 滑动窗口 的最大值 即 队头元素，因此可能需要删除队头元素，</p><p>而当新元素进入滑动窗口时，可能成为滑动窗口目前元素的第 1 / 2 / 3... 大的元素，因此需要从队尾开始判断，小于新元素需要出队。</p>`,19),t=[l];function k(e,p){return a(),s("div",null,t)}const A=i(h,[["render",k],["__file","59Ⅰ.滑动窗口的最大值.html.vue"]]),B=JSON.parse('{"path":"/basic_of_computer_science/algorithm/%E5%89%91%E6%8C%87offer/59%E2%85%A0.%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3%E7%9A%84%E6%9C%80%E5%A4%A7%E5%80%BC.html","title":"59Ⅰ.滑动窗口的最大值","lang":"zh-CN","frontmatter":{"title":"59Ⅰ.滑动窗口的最大值","category":["Algorithm"],"description":"59Ⅰ.滑动窗口的最大值 参考链接 剑指offer_在线编程_牛客网 剑指 Offer 59 – I. 滑动窗口的最大值-跟着帅地玩转校招，刷爆各类算法题帅地玩Offer LCR 183. 望远镜中最高的海拔 - 力扣（LeetCode） 个人尝试 很粗糙的一个暴力解法 优秀题解 个人理解： 维持一个「非递减队列」来保存滑动窗口的「临时最大值队列」， ...","head":[["meta",{"property":"og:url","content":"https://raylan-chen.github.io/basic_of_computer_science/algorithm/%E5%89%91%E6%8C%87offer/59%E2%85%A0.%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3%E7%9A%84%E6%9C%80%E5%A4%A7%E5%80%BC.html"}],["meta",{"property":"og:site_name","content":"MyBlog"}],["meta",{"property":"og:title","content":"59Ⅰ.滑动窗口的最大值"}],["meta",{"property":"og:description","content":"59Ⅰ.滑动窗口的最大值 参考链接 剑指offer_在线编程_牛客网 剑指 Offer 59 – I. 滑动窗口的最大值-跟着帅地玩转校招，刷爆各类算法题帅地玩Offer LCR 183. 望远镜中最高的海拔 - 力扣（LeetCode） 个人尝试 很粗糙的一个暴力解法 优秀题解 个人理解： 维持一个「非递减队列」来保存滑动窗口的「临时最大值队列」， ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-30T03:14:40.000Z"}],["meta",{"property":"article:author","content":"raylan.chen"}],["meta",{"property":"article:modified_time","content":"2024-11-30T03:14:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"59Ⅰ.滑动窗口的最大值\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-30T03:14:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"raylan.chen\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]},{"level":2,"title":"个人尝试","slug":"个人尝试","link":"#个人尝试","children":[]},{"level":2,"title":"优秀题解","slug":"优秀题解","link":"#优秀题解","children":[]}],"git":{"createdTime":1728963350000,"updatedTime":1732936480000,"contributors":[{"name":"Raylan.Chen","email":"chen.z.my@qq.com","commits":2}]},"readingTime":{"minutes":1.95,"words":585},"filePathRelative":"basic_of_computer_science/algorithm/剑指offer/59Ⅰ.滑动窗口的最大值.md","localizedDate":"2024年10月15日","excerpt":"\\n<h2>参考链接</h2>\\n<br>\\n<p><a href=\\"https://www.nowcoder.com/exam/oj/ta?page=2&amp;tpId=13&amp;type=265\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">剑指offer_在线编程_牛客网</a></p>\\n<p><a href=\\"https://www.playoffer.cn/631.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">剑指 Offer 59 – I. 滑动窗口的最大值-跟着帅地玩转校招，刷爆各类算法题帅地玩Offer</a></p>","autoDesc":true}');export{A as comp,B as data};
