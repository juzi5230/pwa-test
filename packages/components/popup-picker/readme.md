### PopupPicker

> picker的popup扩展

### Props

|name|type|default|description|
|----|----|-------|-----------|
|value|Array||表单值，使用v-model绑定|
|title|String||标题|
|cancel-text|String||弹窗的取消文字|
|confirm-text|String||弹窗的确认文字|
|placeholder|String||提示文字|
|show-name|Boolean|false|是否显示文字值而不是key|
|inline-desc|String||Cell的描述文字|
|value-text-align|String|right|value 对齐方式(text-align)|
|display-format|Function||自定义在cell上的显示格式，参数为当前 value，使用该属性时，show-name 属性将失效|

### Events

|name|params|description|
|----|------|-----------|
|on-change|(value)|值变化时触发|
|on-show||弹窗出现时触发|
|on-hide|(closeType) true表示confirm(选择确认), false表示其他情况的关闭|弹窗关闭时触发|
