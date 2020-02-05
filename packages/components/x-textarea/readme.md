### XTextarea

> x-textarea只能在Group中使用

#### Props

|name|type|default|description|
|----|----|-------|-----------|
|title|String||label文字|
|inline-desc|String||位于标题下的描述文字|
|show-counter|Boolean|true|是否显示计数|
|max|Number|0|最大长度限制|
|value|String||表单值, 使用v-model绑定|
|name|String||表单名字|
|placeholder|String||没有值时的提示文字|
|rows|Number|3|textarea 标准属性 rows|
|cols|Number|30|textarea 标签属性 cols|
|height|Number|0|高度|
|readonly|Boolean|false|textarea 标签属性 readonly|

#### Slots

| name | description |
| :------------- | :------------- |
| label | 用于自定义label(即 title)部分内容，比如使用icon |
|restricted-label|用于自定义label部分，和slot=label不同的是，该slot宽度受到父组件group的限制|

#### Events

|name|description|
|----|-----------|
|on-change|表单值变化时触发|
|on-focus|focus 事件|
|on-blur|blur 事件|
