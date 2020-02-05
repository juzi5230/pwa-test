### form-preview

> form-preview是填写表单后内容的预览组件。

### Props

|name|type|default|description|
|----|----|-------|-----------|
|header-label|String||头部标题|
|header-value|String||头部内容|
|body-items|Array|[]|主体内容列表， [{label:'label',value:'value'}]|
|footer-buttons|Array|[]|底部按钮列表，default为灰色样式，primary文字为高亮颜色， [{style: "primary", text: "text", onButtonClick: fn(prop:name), link: "/path"}]|
