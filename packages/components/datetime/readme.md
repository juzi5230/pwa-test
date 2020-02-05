### datetime

> 时间选择控件

!> 需要在Group中使用。建议：如果不是必要,最大和最小年份不要相差1000年，不然可能会出现千年老妖。

### Props

|name|type|default|description|
|----|----|-------|-----------|
|format|String|YYYY-MM-DD|时间格式|
|title|String||标题|
|value|String||表单值，v-model绑定|
|inline-desc|String||描述字符|
|placeholder|String||提示文字|
|min-year|Number|2000|可选择的最小年份|
|max-year|Number|2030|可选择的最大年份|
|confirm-text|String|ok(确认)|确认按钮文字|
|cancel-text|String|cancel(取消)|取消按钮文字|
|clear-text|String||显示在中间的自定义按钮的文字|
|year-row|String|{value}|年份的渲染模板|
|month-row|String|{value}|月份的渲染模板|
|day-row|String|{value}|日期的渲染模板|
|hour-row|String|{value}|小时的渲染模板|
|minute-row|String|{value}|分钟的渲染模板|
|min-hour|Number|0|限定小时最小值|
|max-hour|Number|23|限定小时最大值|
|start-date|String||限定最小日期，注意该限制只能限定到日期，不能限定到小时分钟。小时限定请使用min-hour和max-hour|
|end-date|String||限定最大日期，注意该限制只能限定到日期，不能限定到小时分钟|
|required|Boolean|false|是否必填|
|display-format|Function||自定义显示值|

### Events

|name|params|description|
|----|------|-----------|
|on-change|(value)|表单值变化时触发, 参数 (newVal)|
|on-clear|(value)|点击自定义按钮触发|
