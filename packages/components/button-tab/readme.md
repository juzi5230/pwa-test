### buttonTab

!> 以按钮的形式呈现内容给需要用户选择。建议不要超过3个选择。

### props

|name|type|default|description|
|----|----|-------|-----------|
|value|number|0|当前选中索引值，从0开始，使用 `v-model` 绑定|
|height|Number|30|高度值, 单位为像素|

### ButtonTabItem

### props

|name|type|default|version|description|
|----|----|-------|-------|-----------|
|selected|Boolean|false||是否选中|

### Events

|name|params|description|
|----|------|-----------|
|on-item-click|(index)|当前按钮点击时触发|
