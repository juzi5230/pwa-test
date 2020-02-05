<template>
  <base-components id="app" class="app-base">
    <app-header></app-header>
    <transition name="fade" mode="out-in">
      <router-view class="app-content"></router-view>
    </transition>
    <app-footer></app-footer>
  </base-components>
</template>

<script>
import { baseComponents } from 'maroon'
import appHeader from './components/appHeader'
import appFooter from './components/appFooter'

export default {
  name: 'App',
  data () {
    return {}
  },
  methods: {
  },
  components: {
    baseComponents,
    appHeader,
    appFooter
  }
}
</script>

<style lang="less">
@import url('./assets/less/style.less');
</style>
