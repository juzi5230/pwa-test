### group

> Group是一个特殊的表单wrapper组件，主要用于组件分组，单个表单元素也算一组。常见的表单组件都必须作为Group的子组件。 属于Group子组件的有：Cell, XInput, XTextarea, XSwitch, Calendar, XNumber, Radio, XAddress, Datetime, Selector

### Props

|name|type|description|
|----|----|-----------|
|title|String|分组标题|
|titleColor|String|分组标题文字颜色|
|labelWidth|String|为子元素设定统一label宽度|
|labelAlign|String|为子元素设定统一对齐方式|
|labelMarginRight|String|为子元素设定统一的右边margin|
|gutter|String|设定group的上边距，只能用于没有标题时|

### Slots

|name|description|
|----|-----------|
|default|子组件插槽|
