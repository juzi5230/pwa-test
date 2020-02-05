### Popup

> 底部浮出的模态，展示和当前内容相关的信息或提供相关操作。

!> 注意：1.提供清晰的关闭按钮。2.Popup 会打断用户操作，所以尽量用在重要的时候。

### Props

|name|type|default|description|
|----|----|-------|-----------|
|value|Boolean||是否关闭，使用v-model绑定|
|height|String|auto|高度，设置100%为整屏高度|
|hide-on-blur|Boolean|true|点击遮罩时是否自动关闭|
|is-transparent|Boolean|false|是否为透明背景|

### Slots

|name|description|
|----|-----------|
|default|弹窗主体内容|

### Events

|name|description|
|----|-----------|
|on-hide|关闭时触发|
|on-show|显示时触发|
|on-first-show|第一次显示时触发，可以在该事件回调里初始化数据或者界面|
