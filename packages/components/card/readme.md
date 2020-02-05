### Card

> 用于组织信息和操作，通常也作为详细信息的入口。形状为矩形，高度可定义。可包含多种类型的元素，eg：图片、文字、按钮等。

### Props

|name|type|description|
|----|----|-----------|
|header.title|string|头部标题，不指定则不显示|
|footer.title|String|底部标题，不指定则不显示|
|footer.link|String|底部链接，普通url或者v-link参数|

### Slots

|name|description|
|----|-----------|
|header|头部位置|
|content|中间主体位置|
|footer|底部位置|

### Events

|name|description|
|----|-----------|
|on-click-footer|点击底部时触发|
|on-click-header|点击头部时触发|
