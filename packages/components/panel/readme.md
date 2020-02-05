### Panel

> panel是一种固定外观的列表组件。

### Props

|name|type|default|description|
|----|----|-------|-----------|
|header|String||头部文字|
|footer|Object||尾部配置，{url: url, title: title}|
|list|Array||内容列表，[{title, desc, src}]|
|type|String|1|布局类型，可选值 ['1', '2', '3']，具体效果见demo|

### Events

|name|params|description|
|----|------|-----------|
|on-click-header||点击头部时触发|
|on-click-item|(item)|点击内容列表时触发|
|on-click-footer||点击尾部时触发|
