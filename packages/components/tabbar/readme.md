### tabbar

> 底部tab栏,用于分类导航。

#### Props

|name|type|description|
|----|----|-----------|
|icon-class|String|图标的class名|

#### Slots

| name | description |
| :------------- | :------------- |
| default | tabbar主体内容，只允许tabbar-item |

### TabbarItem

#### Props

|name|type|default|description|
|----|----|-------|-----------|
|selected|Boolean|false|是否选中当前项，你也可以使用`v-model`来指定选中的`tabbar-item`的`index`|
|badge|String||徽标文字，不指定则不显示|
|show-dot|Boolean|false|是否显示红点|
|link|String||链接，可以为普通url或者用`vue-link`的路径写法|
|icon-class|String||图标类名，如果tabbar也同时定义了icon-class, 会使用tabbar-item的|


#### Slots

| name | description |
| :------------- | :------------- |
| icon | 图标区域 |
| icon-active | 如果存在，当前 tabbar-item 点击时会显示，用于切换图标 |
| label | 图标下方文字 |

#### Events

| name | description |
| ---- | ----------- |
|on-item-click|点击菜单项时触发|


#### 开发经验

怎么能够在回退路由的时候选中对应的tab？

可以watch路由的变化，然后设置index.

```javascript
data () {
  return {
    index: 0
  }
},
watch: {
  '$route': function (val, oldval) {
    let routes = ['MyDetails', 'ClassSchedule', 'CourseSelect', 'MyScore', 'CheckingIn']
    this.index = routes.indexOf(val.name)
  }
},
```

```html
<tabbar slot="bottom" v-model="index">
  <tabbar-item link="/MyDetails">
    <img slot="icon" src="../assets/img/my_icon.png">
    <span slot="label">我</span>
  </tabbar-item>
  <tabbar-item link="/ClassSchedule">
    <img slot="icon" src="../assets/img/kb_icon.png">
    <span slot="label">课表</span>
  </tabbar-item>
  <tabbar-item link="/CourseSelect">
    <img slot="icon" src="../assets/img/xk_icon.png">
    <span slot="label">选课</span>
  </tabbar-item>
  <tabbar-item link="/MyScore">
    <img slot="icon" src="../assets/img/cjd_icon.png">
    <span slot="label">成绩</span>
  </tabbar-item>
  <tabbar-item link="/CheckingIn">
    <img slot="icon" src="../assets/img/kq_icon.png">
    <span slot="label">考勤</span>
  </tabbar-item>
</tabbar>
```