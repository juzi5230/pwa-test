### viewBox

> 该组件为100%高布局，可以解决部分键盘输入的问题，但是同时会在safari中出现向下滚动时无法自动隐藏url工具栏和底部栏的问题。

在`viewBox`里元素定位为absolute，效果等同于`fixed`。

使用时需要设置 html, body 高为100%:

```css
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
```

view-box父div也需要为100%高度：

```html
<div style="height:100%;">
  <view-box ref="viewBox">
    <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header>
    <router-view></router-view>
    <tabbar slot="bottom"></tabbar>
  </view-box>
</div>
```

如果你想保存滚动距离，推荐使用vuex实现，在特定path对scrollBody监听scroll事件，并获取滚动距离保存到vuex的state里。示例可以参考vux源码的App.vue

#### Slots

|name|description|
|----|-----------|
|header|顶部区域，如果要使用统一的XHeader，可以使用该slot|
|default|主体内容，可滚动的区域|
|bottom|底部区域，Tabbar可以使用该slot|
|body-padding-top|主体的`padding-top`值，当底部存在`x-header`等`absolute`定位元素时需要设置|
|body-padding-bottom|主体的`padding-bottom`值，当底部存在`tabbar`等`absolute`定位元素时需要设置|

#### Methods

|name|params|description|
|----|------|-----------|
|scrollTo|`(top)`|滚动到指定位置|
|getScrollTop||获取当前滚动距离|
|getScrollBody||获取滚动div, 也可以直接用组件引用的.$refs.viewBoxBody|
