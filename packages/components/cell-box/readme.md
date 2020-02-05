### cell-box

> 与`cell`相比，`cell-box`更自由和灵活，只提供is-link和link属性，内容直接使用默认slot定义。 `cell-box`同样只能在`Group`中使用

### Props

|name|type|default|description|
|----|----|-------|-----------|
|is-link|boolean|false|是否为链接，如果是，右侧将会出现指引点击的右箭头|
|link|String,Object||点击链接，可以为http(s)协议，也可以是 vue-router 支持的地址形式|

### Slots

|name|description|
|----|-----------|
|default|内容区域|
