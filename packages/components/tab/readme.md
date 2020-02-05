### Tab

#### props

|name|type|default|description|
|:-------------|:-------------|:-------------|:-------------|
|line-width|Number|3|线条宽度|
|active-color|String||选中时文字颜色|
|defaultColor|String||默认文字颜色|
|disabled-color|String||不可点击时文字颜色|
|bar-active-color|String||设置底部bar颜色，该颜色也可以通过less变量@tab-bar-active-color设置。|
|animate|Boolean|true|切换时是否需要动画|
|custom-bar-width|String，Function||设置底部bar宽度，默认宽度是整体tab宽度平分，比如50px。使用函数时参数为当前索引index，你可以定义不同tab-item对应的bar宽度。|

### TabItem

#### Props

|name|type|default|description|
|----|----|-------|-----------|
|disabled|Boolean|false|是否不可选|
|active-class|String||当前项选中时的class|
