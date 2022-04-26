import{_ as n,b as s,o as a,aE as e}from"./plugin-vue_export-helper.33e84ed3.js";const h='{"title":"Schema","description":"","frontmatter":{},"headers":[{"level":2,"title":"Schema","slug":"schema"},{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"form-schema","slug":"form-schema"},{"level":3,"title":"form-name","slug":"form-name"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"$ncformGetValue","slug":"ncformgetvalue"},{"level":3,"title":"$ncformReset","slug":"ncformreset"},{"level":3,"title":"$ncformValidate","slug":"ncformvalidate"},{"level":3,"title":"$ncformAddWidget","slug":"ncformaddwidget"},{"level":3,"title":"$ncformAddRule","slug":"ncformaddrule"},{"level":3,"title":"$ncformAllRules","slug":"ncformallrules"},{"level":3,"title":"$ncformAllWidgets","slug":"ncformallwidgets"},{"level":2,"title":"Event","slug":"event"},{"level":3,"title":"submit","slug":"submit"},{"level":3,"title":"change","slug":"change"}],"relativePath":"pages/config/index.md","lastUpdated":1650960656484}',t={},p=e(`<h2 id="schema" tabindex="-1">Schema <a class="header-anchor" href="#schema" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6839\u8282\u70B9\u3002\u53EA\u80FD\u662F object</span>
  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">&lt;</span>filed name<span class="token operator">&gt;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      
      <span class="token comment">/* \u6570\u636E */</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6570\u636E\u7C7B\u578B\u3002\u53EF\u9009\uFF1Astring / number / integer / boolean / object / array / HTML / COMP </span>
      <span class="token comment">// \u6CE8\u610F\uFF1A\u5927\u5199\u7684\u7C7B\u578B\u4E3A\u7279\u6B8A\u53EA\u8BFB\u7C7B\u578B\uFF0C\u4E00\u822C\u4F7F\u7528\u573A\u666F\u4E3A\u663E\u793A\u4E00\u4E2A\u5206\u9694\u680F\u3002\u8BE5\u6570\u636E\u5728\u63D0\u4EA4\u8868\u5355\u65F6\u4F1A\u81EA\u52A8\u8FC7\u6EE4\u6389</span>
      <span class="token comment">// HTML: \u914D\u7F6E value\uFF0C\u503C\u4E3A\u4E00\u6BB5HTML\u3010\u652F\u6301dx\u8868\u8FBE\u5F0F\u3011; </span>
      <span class="token comment">// COMP: \u914D\u7F6E ui.widget \u548C ui.widgetConfig</span>
      
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5B57\u6BB5\u503C</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5B57\u6BB5\u9ED8\u8BA4\u503C\u3002value\u4E3A\u7A7A\u65F6\u53D6\u8BE5\u503C </span>
      <span class="token literal-property property">valueTemplate</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u503C\u6A21\u677F\u3002\u6839\u636E\u63D0\u4F9B\u7684 dx\u8868\u8FBE\u5F0F \u52A8\u6001\u8BA1\u7B97 value \u7684\u503C</span>

      <span class="token comment">/* UI */</span>
      <span class="token literal-property property">ui</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token comment">// \u5360\u7528\u5217\u6570\uFF0C\u517112\u5217\u3002\u3010\u652F\u6301dx\u8868\u8FBE\u5F0F\u3011</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6807\u7B7E\u5185\u5BB9\u3010\u652F\u6301dx\u8868\u8FBE\u5F0F\u3011</span>
        <span class="token literal-property property">showLabel</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u663E\u793A\u6807\u7B7E\uFF08\u6CE8\u610F\uFF1A\u5F53\u4E3A false \u65F6\uFF0C\u4F9D\u7136\u5360\u7740\u7A7A\u95F4\uFF09</span>
        <span class="token literal-property property">noLabelSpace</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u6807\u7B7E\u662F\u5426\u4E0D\u5360\u7A7A\u95F4\uFF0C\u4F18\u5148\u7EA7\u6BD4showLabel\u9AD8</span>
        <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6807\u9898\u5185\u5BB9\uFF0C\u5F53 widget \u4E3A object\uFF0Carray \u7B49\u5E03\u5C40\u65F6\u6709\u6548\u3010\u652F\u6301dx\u8868\u8FBE\u5F0F\u3011</span>
        <span class="token literal-property property">showLegend</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u663E\u793A\u6807\u9898\u3002</span>
        <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u63CF\u8FF0\u4FE1\u606F\u3010\u652F\u6301dx\u8868\u8FBE\u5F0F\u3011</span>
        <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5360\u4F4D\u5185\u5BB9\u3010\u652F\u6301dx\u8868\u8FBE\u5F0F\u3011</span>
        <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u7981\u7528\u3010\u652F\u6301dx\u8868\u8FBE\u5F0F\u3011</span>
        <span class="token literal-property property">readonly</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u53EA\u8BFB\u3010\u652F\u6301dx\u8868\u8FBE\u5F0F\u3011</span>
        <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u9690\u85CF\u3010\u652F\u6301dx\u8868\u8FBE\u5F0F\u3011</span>
        <span class="token literal-property property">help</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u5E2E\u52A9\u4FE1\u606F</span>
          <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u663E\u793A\u3002\u9ED8\u8BA4\u4E0D\u663E\u793A</span>
          <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5E2E\u52A9\u5177\u4F53\u5185\u5BB9</span>
          <span class="token literal-property property">iconCls</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5E2E\u52A9\u56FE\u6807\u6837\u5F0F\u540D</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// \u5E2E\u52A9\u6587\u672C</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">itemClass</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8868\u5355\u9879\u6837\u5F0F\u540D</span>
        <span class="token literal-property property">preview</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u9884\u89C8</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u9884\u89C8\u7C7B\u578B\u3002\u53EF\u9009\u503C\uFF1Avideo / audio / image / link</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u9ED8\u8BA4\u503C: &#39;dx: {{$self}}&#39;\u3010\u652F\u6301dx\u8868\u8FBE\u5F0F\u3011</span>
          <span class="token literal-property property">clearable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u663E\u793A\u5220\u9664\u6309\u94AE</span>
          <span class="token literal-property property">outward</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u5916\u89C2\uFF0C\u4EC5 type=image \u65F6\u6709\u6548</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// \u5BBD\u5EA6\uFF0C0\u4EE3\u8868\u65E0\u9650\u5236</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// \u9AD8\u5EA6\uFF0C0\u4EE3\u8868\u65E0\u9650\u5236</span>
            <span class="token literal-property property">shape</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5916\u89C2\u5F62\u72B6\u3002\u53EF\u9009\u503C\uFF1A\u7A7A\u503C / rounded / circle / \uFF0C\u9ED8\u8BA4\u503C\u4E3A\u7A7A</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">linkFields</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// \u5173\u8054\u5B57\u6BB5\u3002\u5F53\u503C\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u4F1A\u89E6\u53D1\u5173\u8054\u5B57\u6BB5\u7684\u4E00\u4E9B\u52A8\u4F5C\uFF0C\u6BD4\u5982\u6821\u9A8C</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">fieldPath</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5173\u8054\u9879\u5B57\u6BB5\u8DEF\u5F84\u3002\u5982\uFF1A&#39;user.name&#39;\uFF0C&#39;user[i].name&#39;</span>
            <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u6821\u9A8C\u89C4\u5219\u540D\uFF0C\u5982\uFF1A[&#39;required&#39;]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u6E32\u67D3\u7EC4\u4EF6 */</span>
        <span class="token literal-property property">widget</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6E32\u67D3\u7EC4\u4EF6\u540D</span>
        <span class="token literal-property property">widgetConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u7EC4\u4EF6\u914D\u7F6E</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token comment">/* \u9A8C\u8BC1\u89C4\u5219 */</span>
      <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>

        <span class="token comment">// \u6240\u6709\u9A8C\u8BC1\u89C4\u5219\u90FD\u6709\u4E24\u79CD\u8D4B\u503C\u5F62\u5F0F\uFF1A</span>
        <span class="token comment">// \u7B80\u5355\u7248\uFF1A&lt;rule name&gt;: &lt;rule value&gt;\u3002\u5982 required: true\uFF0Cminimum: 10</span>
        <span class="token comment">// \u8BE6\u7EC6\u7248\uFF1A&lt;rule name&gt;: { value: &lt;rule value&gt;, errMsg: &#39;&#39;, options: { deplay: xxx, delayMsg: &#39;&#39; } }\u3002\u5982\u4EE5\u4E0B required \u793A\u4F8B</span>

        <span class="token comment">// for Any Instance Type</span>
        <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u89C4\u5219\u914D\u7F6E\u503C</span>
          <span class="token literal-property property">errMsg</span><span class="token operator">:</span> <span class="token string">&#39;it is required!&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u9519\u8BEF\u63D0\u793A\u4FE1\u606F</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u53EF\u9009\u9879</span>
            <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token comment">// \u5EF6\u8FDF\u9A8C\u8BC1\u7684\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09</span>
            <span class="token literal-property property">delayMsg</span><span class="token operator">:</span> <span class="token string">&#39;\u5F02\u6B65\u9A8C\u8BC1\u4E2D..&#39;</span> <span class="token comment">// \u5EF6\u8FDF\u9A8C\u8BC1\u65F6\u7684\u63D0\u793A</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        number<span class="token punctuation">,</span> <span class="token comment">// value:boolean</span>
        ajax<span class="token punctuation">,</span> <span class="token comment">// value\uFF1A{ remoteUrl: &#39;&lt;url&gt;&#39;, method: &#39;&lt;get or post&gt;&#39;, paramName: &#39;&lt;\u8BF7\u6C42\u53C2\u6570\u540D\uFF0C\u503C\u4E3A\u63A7\u4EF6\u7684\u503C&gt;&#39;, otherParams: {} }</span>

        <span class="token comment">// for Numeric Instances </span>
        minimum<span class="token punctuation">,</span> <span class="token comment">// value: number</span>
        maximum<span class="token punctuation">,</span> <span class="token comment">// value: number</span>
        multipleOf<span class="token punctuation">,</span> <span class="token comment">// value: number</span>
        exclusiveMaximum<span class="token punctuation">,</span> <span class="token comment">// value: number</span>
        exclusiveMinimum<span class="token punctuation">,</span> <span class="token comment">// value: number</span>

        <span class="token comment">// for Strings</span>
        url<span class="token punctuation">,</span> <span class="token comment">// value: boolean</span>
        tel<span class="token punctuation">,</span> <span class="token comment">// value: boolean</span>
        ipv4<span class="token punctuation">,</span> <span class="token comment">// value: boolean</span>
        ipv6<span class="token punctuation">,</span> <span class="token comment">// value: boolean       </span>
        email<span class="token punctuation">,</span> <span class="token comment">// value: boolean</span>
        pattern<span class="token punctuation">,</span> <span class="token comment">// value: string\u3002 \u5982 &quot;\\\\d+&quot;</span>
        hostname<span class="token punctuation">,</span> <span class="token comment">// value: boolean</span>
        dateTime<span class="token punctuation">,</span> <span class="token comment">// value: boolean</span>
        maxLength<span class="token punctuation">,</span> <span class="token comment">// value: number</span>
        minLength<span class="token punctuation">,</span> <span class="token comment">// value: number</span>

        <span class="token comment">// for Arrays</span>
        contains<span class="token punctuation">,</span> <span class="token comment">// value: any</span>
        maxItems<span class="token punctuation">,</span> <span class="token comment">// value: number</span>
        minItems<span class="token punctuation">,</span> <span class="token comment">// value: number</span>
        uniqueItems<span class="token punctuation">,</span> <span class="token comment">// value: boolean</span>

        <span class="token comment">// for Objects</span>
        maxProperties<span class="token punctuation">,</span> <span class="token comment">// value: number</span>
        minProperties<span class="token punctuation">,</span> <span class="token comment">// value: number</span>

        <span class="token comment">/* \u81EA\u5B9A\u4E49\u7684\u9A8C\u8BC1\u89C4\u5219 */</span>
        <span class="token literal-property property">customRule</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">script</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u3010\u652F\u6301dx\u8868\u8FBE\u5F0F\u3011</span>
          <span class="token literal-property property">errMsg</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u9A8C\u8BC1\u9519\u8BEF\u4FE1\u606F</span>
          <span class="token literal-property property">linkItems</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// \u5F53\u89E6\u53D1\u6821\u9A8C\u65F6\uFF0C\u540C\u65F6\u89E6\u53D1\u8FD9\u4E9B\u5173\u8054\u9879\u7684 customRule \u89C4\u5219\u6821\u9A8C\uFF08 \u5EFA\u8BAE\u4F7F\u7528 ui.linkFields \u6765\u66FF\u4EE3 \uFF09</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">fieldPath</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5173\u8054\u9879\u5B57\u6BB5\u8DEF\u5F84\u3002\u5982\uFF1A&#39;user.name&#39;\uFF0C&#39;user[i].name&#39;</span>
              <span class="token literal-property property">customRuleIdx</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token comment">// \u89E6\u53D1\u8BE5\u9879\u7684 customRule \u7684\u7D22\u5F15\u9879\u89C4\u5219</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">globalConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u5168\u5C40\u914D\u7F6E</span>
    <span class="token literal-property property">ignoreRulesWhenHidden</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5F53\u63A7\u4EF6\u9690\u85CF\u65F6\u81EA\u52A8\u5FFD\u7565\u6389\u5176\u9A8C\u8BC1\u89C4\u5219\uFF0C\u5373\u9690\u85CF\u7684\u63A7\u4EF6\u9A8C\u8BC1\u89C4\u5219\u4E0D\u751F\u6548\u3002\u9ED8\u8BA4\u4E3Atrue</span>
    <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u5168\u5C40\u6837\u5F0F\u914D\u7F6E</span>
      <span class="token literal-property property">formCls</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6DFB\u52A0\u5230 form \u7684\u6837\u5F0F</span>
      <span class="token literal-property property">invalidFeedbackCls</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u9519\u8BEF\u63D0\u793A\u6D88\u606F\u7684\u6837\u5F0F </span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">constants</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u5168\u5C40\u5E38\u91CF\u914D\u7F6E\uFF0C\u53EF\u5728dx\u8868\u8FBE\u4E2D\u901A\u8FC7{{$const.}}\u6765\u8BBF\u95EE\uFF0C\u5982{{$const.userName}}</span>
      <span class="token literal-property property">userName</span><span class="token operator">:</span> <span class="token string">&#39;daniel&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">scrollToFailField</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u81EA\u52A8\u6EDA\u52A8\u5230\u6821\u9A8C\u5931\u8D25\u7684\u5B57\u6BB5</span>
      <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u5F00\u542F</span>
      <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token string">&#39;body&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6EDA\u52A8\u7684\u5BB9\u5668\u3002</span>
      <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token comment">// \u6EDA\u52A8\u52A8\u753B\u7684\u6301\u7EED\u65F6\u95F4(\u4EE5\u6BEB\u79D2\u4E3A\u5355\u4F4D)</span>
      <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token comment">// \u6EDA\u52A8\u65F6\u7684\u504F\u79FB\u91CF</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><h3 id="form-schema" tabindex="-1">form-schema <a class="header-anchor" href="#form-schema" aria-hidden="true">#</a></h3><p>\u7528\u4E8E\u63CF\u8FF0\u8868\u5355\u7684schema\u914D\u7F6E\u6570\u636E\uFF0C\u5177\u4F53\u6570\u636E\u7ED3\u6784\u8BF7\u53C2\u8003<a href="#ncform-schema">ncform schema</a></p><div class="language-"><pre><code>// Demo code
&lt;ncform :form-schema=&quot;formSchema&quot;&gt;&lt;/ncform&gt;
</code></pre></div><h3 id="form-name" tabindex="-1">form-name <a class="header-anchor" href="#form-name" aria-hidden="true">#</a></h3><p>\u8868\u5355\u540D\u79F0\uFF0C\u5F53\u4F7F\u7528\u90E8\u5206 <a href="#ncform-api">ncform API</a> \u65F6\u9700\u8981\u63D0\u4F9B\u8BE5\u503C</p><div class="language-"><pre><code>// Demo code
&lt;ncform form-name=&quot;your-form-name&quot;&gt;&lt;/ncform&gt;
</code></pre></div><ul><li>v-model</li></ul><p>\u8868\u5355\u7684\u503C</p><div class="language-"><pre><code>// Demo code
&lt;ncform :form-schema=&quot;formSchema&quot; v-model=&quot;formSchema.value&quot; &gt;&lt;/ncform&gt;
</code></pre></div><ul><li>is-dirty.sync</li></ul><p>\u7528\u4E8E\u6807\u8BC6\u8868\u5355\u7684\u503C\u662F\u5426dirty\uFF08\u5373\u4FEE\u6539\uFF09</p><p>\u901A\u5E38\u7684\u4F7F\u7528\u573A\u666F\u662F\u901A\u8FC7\u8BE5\u503C\uFF0C\u6765\u5224\u65AD\u63D0\u4EA4\u6309\u94AE\u662F\u5426\u53EF\u7528</p><div class="language-"><pre><code>// Demo code
&lt;ncform :form-schema=&quot;formSchema&quot; v-model=&quot;formSchema.value&quot; :is-dirty.sync=&quot;isFormDirty&quot;&gt;&lt;/ncform&gt;
&lt;button :disabled=&quot;!isFormDirty&quot;&gt;\u63D0\u4EA4&lt;/button&gt;
</code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><p>ncform API \u90FD\u662FVue\u5B9E\u4F8B\u7EA7\u522B\u7684\u65B9\u6CD5\u3002</p><h3 id="ncformgetvalue" tabindex="-1">$ncformGetValue <a class="header-anchor" href="#ncformgetvalue" aria-hidden="true">#</a></h3><p>\u624B\u52A8\u83B7\u53D6\u8868\u5355\u7684\u503C\u3002</p><p>options.ignoreHiddenField: \u662F\u5426\u5FFD\u7565\u6389\u9690\u85CF\u5B57\u6BB5\u3002\u9ED8\u8BA4\u4E3Afalse</p><div class="language-"><pre><code>// Demo code:
this.$ncformGetValue(&#39;demoForm&#39;, {ignoreHiddenField: true});
</code></pre></div><h3 id="ncformreset" tabindex="-1">$ncformReset <a class="header-anchor" href="#ncformreset" aria-hidden="true">#</a></h3><p>\u91CD\u7F6E\u8868\u5355\u3002\u91CD\u7F6E\u7684\u503C\u4E3A\u6700\u540E\u4E00\u6B21\u5916\u90E8\u66F4\u65B0 <code>ncform v-model</code> \u7684\u503C</p><p>\u5916\u90E8\u66F4\u65B0\u662F\u6307\u4F60\u76F4\u63A5\u7528\u65B0value\u66F4\u65B0ncform\u7684v-model\u503C\uFF0C\u800C\u975E\u64CD\u4F5C\u8868\u5355\u63A7\u4EF6\u53D1\u751F\u7684v-model\u7684\u503C\u7684\u66F4\u65B0</p><p>\u6CE8\u610F\uFF1A\u5F53\u4F60\u4FDD\u5B58\u5B8C\u8868\u5355\uFF0C\u60F3\u4EE5\u6700\u540E\u4E00\u6B21\u4FDD\u5B58\u7684\u503C\u4E3Areset\u7684\u503C\uFF0C\u9700\u8981\u5916\u90E8\u66F4\u65B0\u4E0Bncform\u7684v-model\u503C</p><div class="language-"><pre><code>// Demo code:
this.$ncformReset(&#39;demoForm&#39;);
</code></pre></div><h3 id="ncformvalidate" tabindex="-1">$ncformValidate <a class="header-anchor" href="#ncformvalidate" aria-hidden="true">#</a></h3><p>\u6821\u9A8C\u8868\u5355\u7684\u6240\u6709\u5B57\u6BB5\u7684\u89C4\u5219\u3002</p><div class="language-"><pre><code>// Demo code:
this.$ncformValidate(&#39;demoForm&#39;).then(data =&gt; {
  if (data.result) { // \u6821\u9A8C\u901A\u8FC7
    // do whatever you like to do. e.g. save form
  }
})
</code></pre></div><h3 id="ncformaddwidget" tabindex="-1">$ncformAddWidget <a class="header-anchor" href="#ncformaddwidget" aria-hidden="true">#</a></h3><p>\u589E\u52A0\u81EA\u5B9A\u4E49\u8868\u5355\u63A7\u4EF6</p><div class="language-"><pre><code>// Demo code:
this.$ncformAddWidget({name: &#39;sayHi&#39;, widget: {
  mixins: [ncformCommon.mixins.vue.controlMixin],
  template: &#39;&lt;div&gt;hi {{modelVal}}&lt;/div&gt;&#39;,
  props: {
    value: {
      type: [String]
    },
  },
}});
</code></pre></div><h3 id="ncformaddrule" tabindex="-1">$ncformAddRule <a class="header-anchor" href="#ncformaddrule" aria-hidden="true">#</a></h3><p>\u589E\u52A0\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u89C4\u5219</p><div class="language-"><pre><code>// Demo code:
class MyCustomRule extends ncformCommon.ValidationRule {

  constructor(props) {
    super(props);
    this.name = &#39;myCustom&#39;;
    this.defaultErrMsg = &#39;yeah, show my custom rule message&#39;;
  }

  validateLogic(val, ruleVal) {
    this.errMsg = &quot;must fill in &#39;daniel&#39;&quot;
    return val === &#39;daniel&#39;;
  }
}

this.$ncformAddRule({name: &#39;myCustom&#39;, rule: MyCustomRule});
</code></pre></div><h3 id="ncformallrules" tabindex="-1">$ncformAllRules <a class="header-anchor" href="#ncformallrules" aria-hidden="true">#</a></h3><p>\u53D6\u5F97ncform\u6240\u6709\u6CE8\u518C\u7684\u6821\u9A8C\u89C4\u5219</p><div class="language-"><pre><code>// Demo code:
const allRules = this.$ncformAllRules();
</code></pre></div><h3 id="ncformallwidgets" tabindex="-1">$ncformAllWidgets <a class="header-anchor" href="#ncformallwidgets" aria-hidden="true">#</a></h3><p>\u53D6\u5F97ncform\u6240\u6709\u6CE8\u518C\u7684\u8868\u5355\u7EC4\u4EF6</p><div class="language-"><pre><code>// Demo code:
const allWidgets = this.$ncformAllWidgets();
</code></pre></div><h2 id="event" tabindex="-1">Event <a class="header-anchor" href="#event" aria-hidden="true">#</a></h2><h3 id="submit" tabindex="-1">submit <a class="header-anchor" href="#submit" aria-hidden="true">#</a></h3><p>\u63D0\u4EA4\u8868\u5355\u4E8B\u4EF6\u3002</p><div class="language-"><pre><code>// Demo code:
&lt;ncform @submit=&quot;submit()&quot;&gt;&lt;/ncform&gt;
</code></pre></div><h3 id="change" tabindex="-1">change <a class="header-anchor" href="#change" aria-hidden="true">#</a></h3><p>\u8868\u5355\u9879\u503C\u66F4\u6539\u4E8B\u4EF6</p><div class="language-"><pre><code>// Demo code:
&lt;ncform @change=&quot;onChange&quot;&gt;&lt;/ncform&gt;

onChange({paths, itemValue, formValue}) {
  // paths: \u53D1\u751F\u503C\u53D8\u5316\u7684\u9879\u7684\u8DEF\u5F84
  // itemValue\uFF1A\u53D1\u751F\u503C\u53D8\u5316\u7684\u9879\u7684\u6700\u65B0\u503C
  // formVallue: \u8868\u5355\u7684\u6700\u65B0\u503C
}
</code></pre></div>`,49),o=[p];function l(c,r,i,u,m,k){return a(),s("div",null,o)}var g=n(t,[["render",l]]);export{h as __pageData,g as default};
