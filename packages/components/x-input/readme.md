### x-input

> `x-input`只能在`Group`中使用

如果你想实现在输入框右边按钮切换密码明文，请使用`slot=right`实现`type`切换。

#### Props

|name|type|default|description|
|----|----|-------|-----------|
|value|String||表单值，使用v-model绑定|
|type|String|text|即`input`的`type`属性，目前支持 `text`,`number`,`email`,`password`,`tel`|
|is-type|String，Function||内置验证器，支持`email`,`china-name`,`china-mobile`, 同样也支持直接传函数, 需要同步返回一个对象`{valid:true}`或者`{valid:false, msg:错误信息}`|
|required|Boolean|false|是否必值，如果不禁用验证，当没有填写时会在右侧显示错误icon|
|title|String||label文字|
|placeholder|String||placeholder 提示|
|show-clear|Boolean|true|是否显示清除icon|
|min|Number||最小输入字符限制|
|max|Number||最大输入字符限制，等同于maxlength，达到限制到不能再输入|
|disabled|Boolean|false|是否禁用填写|
|readonly|Boolean|false|同input的标准属性readonly|
|debounce|Number||debounce用以限制on-change事件触发。如果你需要根据用户输入做ajax请求，建议开启以节省无效请求和服务器资源，单位为毫秒|
|placeholder-align|String|left|placeholder 文字对齐方式|

#### Slots

|name|description|
|----|-----------|
|label|用于自定义label(即 title)部分内容，比如使用icon|
|restricted-label	|用于自定义label部分，和slot=label不同的是，该slot宽度受到父组件group的限制|
|right|用以在输入框右边显示内容，比如验证码图片，单位，切换密码显示方式等|

#### Events

|name|params|description|
|----|------|-----------|
|on-blur|(value)|input的blur事件|
|on-focus|(value)	|input的focus事件|
|on-change|(value)|输入值变化时触发。如果你使用了debounce，那么触发将不会是实时的。|

#### Methods

|name|params|description|
|----|------|-----------|
|focus||手动获得焦点|
|reset|(value = '')|重置输入框值，清除错误信息|
