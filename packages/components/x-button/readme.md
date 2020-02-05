### XButton

> 按照Vue文档，在组件上绑定点击事件请使用@click.native。

#### Props

|name|type|default|version|description|
|----|----|-------|-------|-----------|
|type|string|default||按钮类型，可选值为 default,primary,warn|
|disabled|Boolean|false||是否不可点击|
|text|string|||按钮文字，同默认slot|
|mini|Boolean|false||是否为mini类型，即小尺寸的按钮|
|plain|Boolean|false||是否是plain样式，没有背景色|
|action-type|String|||button的type属性，默认为浏览器默认(submit)，可选为 submit button reset|

#### Slots

|name|description|
|----|-----------|
|default|按钮文字|
