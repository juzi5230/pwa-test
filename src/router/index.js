import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Clock',
      component: resolve => require(['@/pages/clock/index'], resolve),
      meta: {
        activeIndex: 0,
        publicBottom: true // 用于判断是否需要显示默认公共底部tab
      }
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: resolve => require(['@/pages/statistics/index'], resolve),
      meta: {
        activeIndex: 1,
        publicBottom: true
      }
    },
    {
      path: '/apply',
      name: 'Apply',
      component: resolve => require(['@/pages/apply/index'], resolve),
      meta: {
        activeIndex: 2,
        publicBottom: true
      }
    },
    {
      path: '/guide',
      name: 'Guide',
      component: resolve => require(['@/pages/apply/detail/guide/index'], resolve),
      meta: {
        activeIndex: 3,
        publicBottom: false
      }
    },
    {
      path: '/message',
      name: 'Message',
      component: resolve => require(['@/pages/apply/detail/message/index'], resolve),
      meta: {
        activeIndex: 3,
        publicBottom: false
      }
    }
  ]
})
