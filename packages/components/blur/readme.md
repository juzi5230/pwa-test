### Blur

> Blur组件多用于显示用户介绍界面。

!> 当前组件使用svg实现模糊效果。如果在手机上渲染过慢，可以尝试直接使用css3的blur filter。注意，模糊组件高度为-2，所以需要保证调用组件的层高不能低于有背景色的其他组件。

#### Props

|name|type|default|description|
|----|----|-------|-----------|
|blur-amount|Number|10|模糊程度|
|url|String||图片地址|
|height|Number|200|容器高度|

#### Slots

|name|description|
|----|-----------|
|default|容器内容，显示在模糊内容上面|
