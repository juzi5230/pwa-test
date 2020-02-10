import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 按需引入
import { List, Notify, Tabbar, TabbarItem, Tab, Tabs, Image, ImagePreview, Lazyload, Icon, Cell, Tag, Collapse, CollapseItem, Grid, GridItem, Button, Loading } from 'vant'
Vue.use(Image)
Vue.use(ImagePreview)
Vue.use(Lazyload)
Vue.use(Icon)
Vue.use(Cell)
Vue.use(Tag)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Button)
Vue.use(Loading)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Notify)
Vue.use(List)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
