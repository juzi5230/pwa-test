### 学生选择控件

!> 注意：校级教师选择控件接口依赖lexueserver, 开发阶段需要配置对应的代理。


- 后端补丁依赖：/opt/version/product/LEXUESERVER/3/3.3.2/lexueserver_3.3.2_20150204_01_zengj_1.0.0__beta5/ 目录下的补丁： 3.3.2_5_016-020补丁


#### props

|name|type|default|description|
|----|----|-------|-----------|
|mode|number|1|0: 返回组和人的集合；1：返回组和人的集合，并且包含了已组下的所有的人；2:单选，只能选择一个人|
