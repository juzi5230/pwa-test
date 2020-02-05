### calendar

> calendar只能在Group中使用; 除了title和 value, 其他props和inline-calendar完全一致。

!> 注意:目前calendar以及很多popup的组件都可能出现层高问题。主要是目前这类的组件实现还不符合weui的层级规范。

### Props

|name|type|description|
|----|----|-----------|
|value|String|表单值, v-model 绑定|
|title|String|label文字|

### Events

|name|params|description|
|----|------|-----------|
|on-change|(value)|值改变时触发|
