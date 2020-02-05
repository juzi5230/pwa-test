### swipeout

> 通过滑动出现操作选项，增加操作的趣味性。注意，需要合理的提示用户使用滑动来操作。一个项目最好操作统一。

#### Slots

|name|description|
|----|-----------|
|default|子组件插槽|

### SwipeoutItem

#### Props

|name|type|default|description|
|----|----|-------|-----------|
|sensitivity|Number|0|滑动多少距离后开始触发菜单显示|
|auto-close-on-button-click|Boolean|true|点击按钮后是否收回菜单|
|disabled|Boolean|false|是否不可滑动|
|threshold|Number|0.3|滑动多少距离后自动打开菜单，否则收回。可以为小于1的比例或者宽度值|
|transition-mode|String|reveal|菜单打开方式，`reveal`表示菜单不动内容滑出，`follow`表示菜单随内容滑出|

#### Slots

|name|description|
|----|-----------|
|left-menu|左菜单|
|right-menu|右菜单|

#### Events

|name|description|
|----|-----------|
|on-open|菜单完全打开时触发|
|on-close|菜单完全关闭时触发|

#### Methods

|name|params|description|
|----|------|-----------|
|open|(direction)|打开菜单，参数为方向|
|close||关闭菜单|

### SwipeoutButton

#### Props

|name|type|default|description|
|----|----|-------|-----------|
|text|String||按钮文字，同slot=default|
|background-color|String||背景颜色|
|type|String||内置的颜色类型，可选primary, warn|
|width|String|80|按钮宽度|
