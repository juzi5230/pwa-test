### result

> 在整张页面中组织插画、图标、文字等内容，向用户反馈操作结果。

- 用作非常重要的操作反馈，eg：支付成功，无网络状态。
- 个性化且优美的插画，可以提升品牌形象。
- 对于错误类型的结果页，页面中需要提供明确的行动点，eg：重新加载。

### Props

|name|type|default|description|
|----|----|-------|-----------|
|title|String||操作状态提示文字|
|description|String||描述文字|
|icon|String|success|图标类型，可选值有 `success`, `warn`, `info`, `waiting`|
|buttons|Array||操作按钮列表，一个按钮对象包含text, type(和x-button组件type一致), `link`, `onClick`|

### Slots

|name|description|
|----|-----------|
|buttons|自定义按钮区域元素|
|description|自定义描述文字内容|
