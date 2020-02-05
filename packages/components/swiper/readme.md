### swiper

> swiper。轮播，不止可以播图还可以播自定义内容。

> list为图片列表快捷设置，如果你需要自定义一些样式，或者内容并不为纯图片，可以引用`swiper-item`组件来自定义。

!> 不要在swiper里嵌套scroller，在web上过于复杂化而且手势会有冲突。

#### Props

|name|type|default|description|
|----|----|-------|-----------|
|list|Array||图片列表|
|direction|String|horizontal|方向|
|show-dots|Boolean|true|是否显示提示点|
|show-desc-mask|Boolean|true|是否显示描述半透明遮罩|
|dots-position|String|right|提示点位置|
|dots-class|String||提示className|
|auto|Boolean|false|是否自动轮播|
|loop|Boolean|false|是否循环|
|interval|Number|3000|轮播停留时长|
|threshold|Number|50|当滑动超过这个距离时才滑动|
|duration|Number|300|切换动画时间|
|height|String|180px|高度值。如果为100%宽度并且知道宽高比，可以设置`aspect-ratio`自动计算高度|
|aspect-ratio|Number||用以根据当前可用宽度计算高度值|
|min-moving-distance|Number|0|超过这个距离时才滑动|
|value|Number|0|index 绑定，使用`v-model`，一般不需要绑定|
