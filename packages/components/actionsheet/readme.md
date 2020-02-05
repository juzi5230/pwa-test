### Actionsheet

> ActionSheet用于显示包含一系列可交互的动作集合，包括说明、跳转等。由底部弹出，一般用于响应用户对页面的点击。

**规则:**
- 提供清晰的退出按钮。
- 可高亮破坏性操作，eg：将『删除』处理成红色文本。
- 不要放置过多内容，避免面板纵向滚动。

### Props

|name|type|default|version|description|
|----|----|-------|-------|-----------|
|value|Boolean|false||是否显示, 使用 v-model 绑定变量|
|show-cancel|Boolean|false||是否显示取消菜单|
|cancel-text|String|取消||取消菜单文字|
|menus|array[Object]|[]||菜单项列表, 对象详细说明见下文。|
|close-on-clicking-mask|Boolean|true||点击遮罩时是否关闭菜单，适用于一些进入页面时需要强制选择的场景。|

menus绑定的是对象数组

`label`: 菜单名字，支持文字及`html`

`value`: 英文字符，表示触发事件的名字，如果不设置不会触发`on-click-menu`事件。

`type`: 类型，可选值如下
  - `primary` 主色
  - `warn` 警告色
  - `disabled` 不可操作，灰色。点击时不会关闭
  - `info` 信息提示，点击时不会关闭，用于展示描述或者提醒。

### Events

|name|params|description|
|----|------|-----------|
|on-click-menu|(menuKey)|点击菜单时触发，参数为当前菜单项对象|
|on-click-menu-{menuKey}|(menuKey)|点击事件的快捷方式, 如果你有一个菜单名字为delete, 那么你可以监听 on-click-menu-delete|
|on-click-menu-cancel||点击取消菜单时触发|


### 使用警告

1. 注意，actionsheet和`tabber`一起使用在`IOS`上可能会有问题，开发和测试时请重点注意。遇到了联系组件开发者。
