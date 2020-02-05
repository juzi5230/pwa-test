### grid

> 九宫格，在水平和垂直方向，将布局切分成9块等大的区块。区块中的内容应该是同类元素，eg：都是图片，或者都是图标+文字。

### Slots

|name|description|
|----|-----------|
|default|用于`grid-item`的插槽|

### GridItem

### Props

|name|type|description|
|----|----|-----------|
|icon|String|图标地址，如果是线上地址，推荐使用该prop。如果是本地图标资源，使用`slot=icon`可以保证资源被正确打包|
|label|String|`label` 文字|

### Slots

|name|description|
|----|-----------|
|icon|图标内容，直接使用<img>标签|
|label|label文字的`slot`，作用同`prop:label`|
