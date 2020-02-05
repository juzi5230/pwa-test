### flexbox

> flexbox和flexboxItem一起使用。其实可以直接自己用css3的flex布局。

### Props

|name|type|default|description|
|----|----|-------|-----------|
|gutter|number|8|间隙像素大小|
|justify|String||`flex`的 `justify-content`属性|
|align|String||flex的align-items属性|
|wrap|String|flex的flex-wrap属性|
|direction|String||flex的flex-direction属性|

### Slots

|name|description|
|----|-----------|
|default|flexbox-item的内容插槽|

### FlexboxItem

### Props

|name|type|description|
|----|----|-----------|
|span|Number|占用宽度，如果不设，所有flexbox-item将平分|
|order|String|flex的order属性|

### Slots

|name|description|
|----|-----------|
|default|内容插槽|
