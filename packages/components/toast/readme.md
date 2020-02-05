### toast

> 一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。

**规则**
- 一次只显示一个 toast。
- 有 Icon 的 Toast，字数为 2-6 个；没有 Icon 的 Toast，字数不宜超过 14 个。

#### Props

|name|type|default|description|
|----|----|-------|-----------|
|value|Boolean|false|是否显示, 使用 v-model 绑定|
|time|Number|2000|显示时间|
|type|String|success|类型，可选值 success, warn, cancel, text|
|width|String|7.6em|宽度|
|is-show-mask|Boolean|false|是否显示遮罩，如果显示，用户将不能点击页面上其他元素|
|text|String||提示内容，支持 html，和默认slot同样功能|
|position|String|default|显示位置，可选值 default, top, middle, bottom|

#### Slots

|name|description|
|----|-----------|
|default|默认slot, 提示内容|

#### Events

| name | description |
| :------------- | :------------- |
| on-show | 提示弹出时触发 |
| on-hide | 提示隐藏时触发 |
