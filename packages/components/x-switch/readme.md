### XSwitch

> 在两个互斥对象进行选择，eg：选择开或关。

!> x-switch只能在Group中使用

#### Props

|name|type|default|description|
|----|----|-------|-----------|
|title|String||label文字|
|disabled|Boolean|false|是否不可点击|
|value|Boolean|false|表单值, 使用v-model绑定|
|inline-desc|String||标签下文字|

#### Events

|name|params|description|
|----|------|-----------|
|on-change|(value)|值变化时触发，参数为 (currentValue)|
