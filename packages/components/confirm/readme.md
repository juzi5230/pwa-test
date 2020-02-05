### confirm

> confirm: 强制让用户做出决定，一般用在不可反悔操作或者非常重要的操作。

### props

|name|type|default|description|
|----|----|-------|-----------|
|show|Boolean|false|是否显示，使用v-model绑定|
|title|String||	弹窗标题|
|confirm-text|String|确认(confirm)|确认按钮文字|
|cancel-text|String|取消(cancel)|取消按钮文字|
|mask-transition|String|vux-fade|遮罩动画|
|dialog-transition|String|vux-dialog|弹窗动画|

### Slots

|name|description|
|----|-----------|
|default|弹窗主体内容|

### Events

|name|description|
|----|-----------|
|on-cancel|点击取消按钮时触发|
|on-confirm|点击确定按钮时触发|
