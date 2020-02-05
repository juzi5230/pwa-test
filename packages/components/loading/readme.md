### loading

> loading组件用于强制用户等待服务器响应完成后才能继续操作页面。使用时需要把握限度。ajax请求需要设置超时时间,不然可能会导致用户无法继续使用。

### Props

|name|type|default|description|
|----|----|-------|-----------|
|value|Boolean|false|显示状态，使用v-model绑定|
|text|String||提示文字|
|position|String|fixed|定位方式，默认为fixed，在100%的布局下用absolute可以避免抖动|

### Slots

|name|description|
|----|-----------|
|default|提示文字区域|
