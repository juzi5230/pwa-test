import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 按需引入
import { Image, ImagePreview, Lazyload, Icon, Cell, Tag, Collapse, CollapseItem, Grid, GridItem, Button, Loading } from 'vant'
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
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
