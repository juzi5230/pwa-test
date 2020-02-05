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
        activeIndex: 0
      }
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: resolve => require(['@/pages/statistics/index'], resolve),
      meta: {
        activeIndex: 1
      }
    },
    {
      path: '/apply',
      name: 'Apply',
      component: resolve => require(['@/pages/apply/index'], resolve),
      meta: {
        activeIndex: 2
      }
    }
  ]
})
