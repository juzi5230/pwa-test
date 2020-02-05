### Popover

> Popover，一种提示效果。多在PC端使用，在移动端体验并不好，建议慎用。但是可以作为基础扩展成其他组件，比如表单填写错误提示。

### Props

|name|type|default|description|
|----|----|-------|-----------|
|content|String||弹出窗口内容|
|placement|String||弹出窗口位置|
|gutter|Number|5|箭头和触发元素之间的距离|

### Slots
|name|description|
|----|-----------|
|default|触发元素|
|content|弹窗内容|

### Events

|name|description|
|----|-----------|
|on-show|弹窗显示时触发|
|on-hide|弹窗隐藏时触发|
