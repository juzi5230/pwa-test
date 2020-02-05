### XDialog

> 如果当前组件所在位置某一父级使用了 ViewBox 组件或者直接使用了 Safari 的 overflowScrolling:touch，请引入指令 transfer-dom 以解决其带来的 z-index 失效问题(待验证)。

#### Props

|name|type|default|description|
|----|----|-------|-----------|
|value|Boolean|false|弹窗是否可见，使用v-model绑定|
|mask-transition|String|vux-mask|遮罩层动画|
|dialog-transition|String|vux-dialog|弹窗动画|
|hide-on-blur|Boolean|false|是否在点击遮罩时自动关闭弹窗|
|scroll|Boolean|true|是否在弱窗上滚动时 body 内容也滚动|


#### Slots

| name | description |
| :------------- | :------------- |
| default | 弹窗的主体内容	 |

#### Events

| on-show     | 弹窗可见时触发     |
| :------------- | :------------- |
| on-hide     | 弹窖关闭时触发   |
