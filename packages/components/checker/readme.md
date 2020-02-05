### checker

> `Checker` 是比`Radio`或者`Checklist`更加灵活的选择组件，可以自定义需要的布局样式。

!> 注意：由于checker是平铺的，需要注意屏幕的适配问题。

### props

|name|type|default|description|
|----|----|-------|-----------|
|default-item-class|String||默认状态class|
|selected-item-class|String||选中样式class|
|disabled-item-class|String||不可选样式class|
|type|String|radio|类型，单选为radio, 多选为checkbox|
|value|Array||表单值，使用v-model绑定|
|max|Number||最多可选个数，多选时可用|

### Events

|name|params|description|
|----|------|-----------|
|on-change|(value)|value值变化时触发|

### CheckerItem

### props

|name|type|default|description|
|----|----|-------|-----------|
|value|String||当前项的值|
|disabled|Boolean|false|是否为不可选|

### Events

|name|params|description|
|----|------|-----------|
|on-item-click|(itemValue, itemDisabled)|当前项被点击时触发|
