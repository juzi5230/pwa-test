### 教师选择控件

> 校级教师选择控件

!> 注意：校级教师选择控件接口依赖lexueserver, 开发阶段需要配置对应的代理。

#### props

|name|type|default|description|
|----|----|-------|-----------|
|mode|number|1|0: 返回部门和人的集合；1：返回部门和人的集合，并且包含了已选部门下的所有的人；2:单选，只能选择一个人|


#### events

|name|params|description|
|----|------|-----------|
|complete|(array)|选择的结果|

#### listeners

|name|arguments|description|
|----|---------|-----------|
|show|selectedUsers<array>|显示选人控件|