### inline-calendar

> 基础日历组件，可用于扩展成其他和日期相关的组件。

### Props

|name|type|default|description|
|----|----|-------|-----------|
|value|String||当前选中日期，使用v-model绑定，默认为空，即选中当天日期|
|render-month|Array||指定渲染日期，如 [2018, 8]|
|start-date|String||起始日期，格式为 YYYY-MM-dd|
|end-date|String||结束日期，格式为YYYY-MM-dd|
|show-last-month|Boolean|true|是否显示上个月的日期|
|show-next-month|Boolean|true|是否显示下个月的日期|
|highlight-weekend|Boolean|false|是否高亮周末|
|return-six-rows|Boolean|true|是否总是渲染6行日期|
|hide-header|Boolean|false|是否隐藏日历头部|
|hide-week-list|Boolean|false|是否隐藏星期列表|
|replace-text-list|Object||替换列表，可以将默认的日期换成文字，比如今天的日期替换成今，{'TODAY':'今'}|
|weeks-list|Array|['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']|星期列表，从周日开始|
|render-function|Function||用于为特定日期添加额外的html内容，参数为(行index,列index,日期详细属性)|
|render-on-value-change|Boolean|true|当日期变化时是否重新渲染日历，如果是渲染了多个日历的话需要设为false|
|disable-past|Boolean|false|禁止选择过去的日期，该选项可以与start-date同时使用|
|disable-future|Boolean|false|禁止选择未来的日期，该选项可以end-date同时使用|
