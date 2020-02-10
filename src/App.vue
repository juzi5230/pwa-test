<template>
  <base-components id="app" class="app-base">
    <app-header></app-header>
    <transition name="fade" mode="out-in">
      <router-view class="app-content"></router-view>
    </transition>
    <app-footer v-if="showBottom"></app-footer>
  </base-components>
</template>

<script>
import { baseComponents } from 'maroon'
import appHeader from './components/appHeader'
import appFooter from './components/appFooter'
import {mapState} from 'vuex'

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
  },
  computed: mapState({
    showBottom: state => state.common.showBottom
  }),
  created () {
    try {
      document.body.removeChild(document.getElementById('appLoading'))
      setTimeout(function () {
        document.getElementById('app').style.display = 'block'
      }, 500)
    } catch (e) {

    }
  }
}
</script>

<style lang="less">
@import url('./assets/less/style.less');
</style>
