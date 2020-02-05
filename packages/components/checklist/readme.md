### checklist

> checklist

### props

|name|type|default|description|
|----|----|-------|-----------|
|value|Array||表单值|
|title|String||标题|
|required|Boolean|false|是否必填|
|options|Array||选项列表，可以为`[{key:'name',value:'value'}]`的形式|
|max|Number||最多可选个数|
|min|Number||最少可选个数|

### Events

|name|params|description|
|----|------|-----------|
|on-change|(value)|值变化时触发，参数为 (value)|
