### alert

|qrcode:feedback/alert|

!> alert一般用于弹出式提示用户，这种提示对用户体验有一定的影响。尽量避免出现多个alert，只有需要强制用户确认才使用。

### Props

|name|type|default|description|
|----|----|-------|-----------|
|value|Boolean|false|是否显示, 使用 v-model 绑定变量|
|title|String||弹窗标题|
|button-text|String|ok(确定)||按钮文字|
|mask-transition|String|vux-fade|遮罩动画|
|dialog-transition|String|vux-dialog|弹窗主体动画|

### slots

|name|description|
|----|-----------|
|default|提示内容|

### events

|name|description|
|----|-----------|
|on-show|显示时触发|
|on-hide|关闭时触发|

### 使用经验

对应弹框类，希望在Android使用的时候，点击后退按钮，实现关闭。可以直接使用vue router的路由beforeRouteLeave来实现，没有必要使用history来实现。