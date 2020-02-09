<template>
  <tabbar slot="bottom" v-model="index" class="app-footer">
    <tabbar-item  @on-item-click="replace('Clock')">
      <span slot="icon" class="iconfont icon-check footer-icon"></span>
      <span slot="label" class="footer-item">打卡</span>
    </tabbar-item>
    <tabbar-item @on-item-click="replace('Statistics')">
      <span slot="icon" class="iconfont icon-pie footer-icon"></span>
      <span slot="label" class="footer-item">统计</span>
    </tabbar-item>
    <tabbar-item @on-item-click="replace('Apply')">
      <span slot="icon" class="iconfont icon-medal footer-icon"></span>
      <span slot="label" class="footer-item">工作</span>
    </tabbar-item>
    <tabbar-item>
      <span slot="icon" class="iconfont icon-analy footer-icon"></span>
      <span slot="label" class="footer-item">设置</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
import { tabbar, tabbarItem } from 'maroon'
export default {
  data () {
    return {
      index: 0
    }
  },
  watch: {
    '$route': function (val, oldval) {
      if (val.meta && typeof val.meta.activeIndex === 'number') {
        this.index = val.meta.activeIndex
      }
    }
  },
  methods: {
    // NOTE: 底部切换为一级栏目，采用replace的方式，方便用户退出应用。
    replace (name) {
      this.$router.replace({name})
    }
  },
  components: {
    tabbar,
    tabbarItem
  }
}
</script>

<style>

</style>
