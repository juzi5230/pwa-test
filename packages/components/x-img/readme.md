### XImg

> 懒加载图片

#### props

|name|type|default|description|
|----|----|-------|-----------|
|default-src|String||默认显示的图片地址|
|src|String||最终加载的图片地址|
|webp-src|String||webp 格式的图片地址，如果当前浏览器支持webp，则加载该地址|
|error-class|String||加载失败时添加到 img 元素上的类名|
|success-class|String||加载成功时添加到 img 元素上的类名|
|offset|Number|100|距离多远时开始加载|
|container|String|window|当图片是在一个容器里滚动时(比如demo站点100%高度的布局)，你需要指定容器的选择器|
|delay|Number|100|延迟执行，在存在路由过渡时立即执行可能会导致进入页面后并不会正确加载图片|
