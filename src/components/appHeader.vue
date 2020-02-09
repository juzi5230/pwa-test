<template>
  <x-header class="app-header header vux-1px" @on-click-back="handleBack" :title="headerOption.title" :left-options="headerOption">
    <a class="app-header-close" v-show="showClose" slot="left" href="javascript:;" @click="close">关闭</a>
  </x-header>
  <!-- <van-nav-bar
  title="标题"
  left-text="返回"
  right-text="按钮"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/> -->
</template>

<script>
import { XHeader } from 'maroon'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      showClose: false
    }
  },
  computed: mapState({
    headerOption: state => state.common.header
  }),
  methods: {
    handleBack () {
      let historyLength = window.history.length
      // WARNING: 注意，如果要在微信上使用，这里调用退出会有问题，所以建议微信上不提供退出。
      // TODO: 调研IOS处理情况
      if (historyLength === 1) {
        this.close()
      }
      window.history.go(-1)
      this.showClose = true
    },
    close () {
      this.$store.commit('APP_CLOSE')
    }
  },
  components: {
    XHeader
  }
}
</script>

<style scoped>
.app-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
</style>
