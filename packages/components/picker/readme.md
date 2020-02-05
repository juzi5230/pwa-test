### picker

> 基础选择组件，常用于扩展成其他的复杂组件。尽量使用 Picker 来帮助用户完成输入，避免用户通过键盘直接输入。

!> 请确保列表项的value值是字符串，使用数字会出错。 如果你的业务接口返回数字值为数字，需要你先处理成数字；同样，获取到值时为字符串，你需要自己转换成数字。

### Props

|name|type|description|
|----|----|-----------|
|value|Array|表单值，使用 v-model 绑定|
|data|Array|选项列表数据|
|columns|Number|指定联动模式下的列数，当不指定时表示非联动|
|fixed-columns|Number|指定显示多少列，隐藏多余的|

非联动情况下，列表数据格式示例：

```js
[
  ['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你'],
  ['小米1', 'iPhone2', '华为3', '情怀4', '三星5', '其他6', '不告诉你7']]

// 或者使用 name => value 的形式
[[{
  name: '2019届5班',
  value: '1'
}, {
  name: '2019届4班',
  value: '2'
}]]

// value
['小米', '小米1']
```

联动时，列表数据格式示例：

```js
// data
[{
  name: '中国',
  value: 'china',
  parent: 0
}, {
  name: '美国',
  value: 'USA',
  parent: 0
}, {
  name: '广东',
  value: 'china001',
  parent: 'china'
}, {
  name: '广西',
  value: 'china002',
  parent: 'china'
}, {
  name: '美国001',
  value: 'usa001',
  parent: 'USA'
}, {
  name: '美国002',
  value: 'usa002',
  parent: 'USA'
}, {
  name: '广州',
  value: 'gz',
  parent: 'china001'
}, {
  name: '深圳',
  value: 'sz',
  parent: 'china001'
}, {
  name: '广西001',
  value: 'gx001',
  parent: 'china002'
}, {
  name: '广西002',
  value: 'gx002',
  parent: 'china002'
}, {
  name: '美国001_001',
  value: '0003',
  parent: 'usa001'
}, {
  name: '美国001_002',
  value: '0004',
  parent: 'usa001'
}, {
  name: '美国002_001',
  value: '0005',
  parent: 'usa002'
}, {
  name: '美国002_002',
  value: '0006',
  parent: 'usa002'
}]
```

### Events

|name|params|description|
|----|------|-----------|
|on-change|(value)|选择值变化时触发|
