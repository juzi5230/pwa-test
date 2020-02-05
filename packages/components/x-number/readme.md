### XNumber

> 数字组件，不需要用户弹出键盘。注意，最好使用在只需要微调数字的情景。数字范围最好不要超过10。

!> x-number只能在Group中使用

#### Props

|name|type|default|description|
|----|----|-------|-----------|
|value|Number|0|表单值，使用v-model绑定|
|title|String||标题|
|min|Number||最小值|
|max|Number||最大值|
|step|Number|1|步长|
|fillable|Boolean|false|是否可填写|
|width|String|50px|输入框宽度|
|button-style|String|square|按钮样式，可选值为square或者round|
|align|String|right|按钮部分位置，默认在右边(right)，可选值为left和right|
