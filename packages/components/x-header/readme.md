### XHeader

!> 应用头部组件，注意：企业号和校信里面自带了头部，所以设计的时候不要使用此组件。

#### Props

|name|type|default|description|
|----|----|-------|-----------|
|left-options.showBack|Boolean|true|是否显示返回文字|
|left-options.backText|String|Back|返回文字|
|left-options.preventGoBack|Boolean|false|是否阻止返回|
|title|String||标题|
|transition|String||标题出现的动画|
|right-options.showMore|Boolean|false|是否显示右侧的更多图标|

#### Slots

|name|description|
|----|-----------|
|default|标题|
|right|右侧部分|

#### Events

|name|description|
|----|-----------|
|on-click-more|点击右侧更多时触发|
|on-click-back|当left-options.preventGoBack为true,点击左边返回时触发|
|on-click-title|点击标题时触发|
