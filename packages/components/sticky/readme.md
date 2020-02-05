### Sticky

> sticky可以看做`粘性布局`。用户总是希望在窗口明显的地方方便找到自己想要的操作项，例如停留在浏览器窗口顶端的菜单栏，筛选栏等。所以我们会把用户最常用到或者我们希望用户注意到的内容一直展现在窗口的可视区域，让用户能够一眼就看到。这当中常需要用到一种页面滚动然后元素固定在窗口的某个位置的布局方式。

!> 在Chrome模拟器运行时你可能会发现没有效果，这是因为Chrome并不支持原生sticky实现而模拟器环境是iPhone，目前程序是根据Safari版本来判断是否原生支持sticky。因此你可以切换到Android系统进行测试，但是真机上是完全正常的交互。 你也可以设置禁用原生支持检测以获得相同的效果：:check-sticky-support="false"

如果你没有使用100%的布局，也没有头部可以直接这样使用

```html
<sticky>
  <div>Blabla</div>
</sticky>
```

如果你像demo一样使用view-box和x-header，那么需要这样：

```html
<sticky scroll-box="vux_view_box_body" :offset="46">
  <div>Blabla</div>
</sticky>
```

建议外围加一个div高度为内容高度，这样可以避免当定位为sticky时下面的元素会突然向上走。
```html
<div style="height:44px;">
  <sticky scroll-box="vux_view_box_body" :offset="46">
    <div>Blabla</div>
  </sticky>
</div>
```

### Props

|name|type|default|description|
|----|----|-------|-----------|
|scroll-box|String|window|滚动容器，默认为window，如果你使用了viewbox，那么你需要指定容器id：vux_view_box_body|
|check-sticky-support|Boolean|true|是否检测当前浏览器是否支持sticky特性，禁用则在iPhone设置上也使用scroll实现|
|offset|Number|0|距离顶部高度，在存在头部（如使用了x-header）的情况下需要设置一个距离|

### Slots

|name|description|
|----|-----------|
|default|内容插槽|
