### x-address

> x-address只能在Group中使用

#### Props

|name|type|default|description|
|----|----|-------|-----------|
|raw-value|Boolean|false|指定初始化时绑定的数据是否为文本(即省市名，而不是id)类型，即对于非id值组件内部会转换为id。如果是异步设置value，只能使用id赋值。|
|title|String||表单标题|
|value|Array||表单值, 使用v-model绑定|
|list|Array||地址列表, 可以引入内置地址数据或者用自己的数据，但是需要按照一致的数据结构。|
|inline-desc|String||标题下的描述|
|placeholder|String||没有值时的提示文字|
|hide-district|Boolean|false|是否隐藏区，即只显示省份和城市|
|value-text-align|String|right|value 对齐方式(text-align)|

#### Events

|name|description|
|----|-----------|
|on-hide|关闭后触发，当非确定时，参数为false，反之为true|
|on-show|显示时触发|
