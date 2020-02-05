### scroller

> Scroller的内容必须是一个div，并且只能有一个div。Scroller 希望解决的是简单的列表问题而不是一个内嵌各种复杂标签交互的容器，很容易发生性能或者交互问题。 默认高度为整个视口高度，如果你加了`x-header`，那么你需要减去一个`x-header`的高度: `height="-46"` 请确保在你的数据更新后进行`reset`操作(参考下面文档)。

!> scroller是依赖`vux-xscroll`实现的，如果不好用，以后改成iscroll实现。

### props

|name|type|default|description|
|----|----|-------|-----------|
|value|Object||对象，上拉或者下拉的状态双向绑定，使用 v-model 绑定，pulldownStatus 及 pullupStatus|
|height|String|viewport height|容器高度，默认为整个viewport高度，注意，该属性接受的是 String 类型，比如 200px，如果你希望scroller自动计算除去头部尾部的高度，请这样设置让组件自动计算，如height="-40"|
|lock-x|Boolean|false|锁定X方向|
|lock-y|Boolean|false|锁定Y方向|
|scrollbar-x|Boolean|false|是否显示横向滚动条|
|scrollbarY|Boolean|false|是否显示垂直方向滚动条|
|bounce|Boolean|true|是否显示边缘回弹效果|
|use-pulldown|Boolean|false|是否使用下拉组件|
|use-pullup|Boolean|false|是否使用上拉组件|
|pulldown-config|Object|see below|下拉组件配置|
|pullup-config|Object|see below|上拉组件配置|

### Slots

|name|description|
|----|-----------|
|default|scroller 内容，必须是一个 div 元素|

### Events

|name|params|description|
|----|------|-----------|
|on-scroll|(position)|容器滚动时触发，参数为top和left位置|
|on-pulldown-loading||用户触发下拉刷新状态，监听该事件以获取加载新数据|
|on-pullup-loading||用户触发上拉加载状态，监听该事件以加载新数据|

pulldown 默认配置:

```js
{
  content: 'Pull Down To Refresh',
  height: 60,
  autoRefresh: false,
  downContent: 'Pull Down To Refresh',
  upContent: 'Release To Refresh',
  loadingContent: 'Loading...',
  clsPrefix: 'xs-plugin-pulldown-'
}
```

pullup 默认配置:

```js
{
  content: 'Pull Up To Refresh',
  pullUpHeight: 60,
  height: 40,
  autoRefresh: false,
  downContent: 'Release To Refresh',
  upContent: 'Pull Up To Refresh',
  loadingContent: 'Loading...',
  clsPrefix: 'xs-plugin-pullup-'
}
```

**如何更新数据?**

如果展示内容只是简单的增加或者减少，直接调用reset方法即可
```js
this.$nextTick(() => {
  this.$refs.scroller.reset()
})
```

如果展示内容完全重载，那么需要主动设置位置让其能正确回到顶部。适用于改变筛选条件后重载数据的情况
```js
this.$nextTick(() => {
  this.$refs.scroller.reset({
    top: 0
  })
})
```

**如何设置pullup完成**?

方法1，直接调用ref的donePullup方法
```js
this.$refs.demo2.donePullup()
```

方法2，绑定value, 重置状态

> 自定义pullup模板同样是用v-model来绑定以获取状态变化

```html
<scroller v-model="status"></scroller>
```

```js
data () {
  return {
    status: {
      pullupStatus: 'default'
    }
  }
}

// 重置状态为default
this.status.pullupStatus = 'default'
```

**如何设置pulldown完成?**

参照pullup, 使用方法donePulldown或者绑定pulldownStatus然后重置为default。

**如何禁用或者启用pullup?**

在有些情况下，比如数据不多不需要上拉加载或者已经加载完成，我们需要禁用pullup 同样可以调用方法 disablePullup 或者设置pullupStatus为disabled

反之，则调用方法 enablePullup 或者设置pullupStatus为enabled

**启用keep-alive后滚动有问题?**

需要在调用Scroller的页面上在 hook: activated上执行reset

```js
activated () {
  this.$refs.scroller.reset()
}
```
