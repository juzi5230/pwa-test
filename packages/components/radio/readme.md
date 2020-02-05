### radio

> `radio`,单选组件，和`checklist`, `checker`组件类似，但后者更灵活.

!> `radio`只能在options中使用。

### Props

|name|type|default|description|
|----|----|-------|-----------|
|value|String||表单值，使用v-model绑定|
|options|Array||可选列表，可以用字符串组成的数组或者 key=>value 的形式|
|fill-mode|Boolean|false|是否可填写|
|fill-placeholder|String||可填写时的提示文字|
|fill-label|String||可填写时的label文字|

options可以为简单数组，也可以为key=>value形式键值对

```js
const options = [ 'China', 'Japan' ]

const options2 = [{
  icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
  key: '001',
  value: 'radio001'
}, {
  icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
  key: '002',
  value: 'radio002'
}]
```
