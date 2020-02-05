### cell

> cell只能在Group中使用

### Props

|name|type|default|description|
|----|----|-------|-----------|
|title|String||左边标题文字|
|value|String||右侧文字，复杂的样式布局请使用slot|
|inline-desc|String||标题下面文字，一般为说明文字|
|link|String,Object||点击链接，可以为http(s)协议，也可以是 vue-router 支持的地址形式|
|is-link|Boolean|false|是否为链接，如果是，右侧将会出现指引点击的右箭头|
|primary|String|title|可选值为 ['title', 'content']，对应的div会加上weui_cell_primary类名实现内容宽度自适应|

### Slots

|name|description|
|----|-----------|
|default|右侧内容，相比于value的优点是可以用复杂的样式或者调用组件|
|icon|标题左侧的图像位置|
|after-title|标题右侧位置|
|child|cell的直接子元素，因此可以添加一个相对于cell绝对定位的元素|
