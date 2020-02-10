<template>
  <div class="message-wrap">
    <!-- <van-tabs v-model="active" color="#409eff" title-active-color="#409eff" animated swipeable>
      <van-tab title="已发起">内容 1</van-tab>
      <van-tab title="待处理">内容 2</van-tab>
      <van-tab title="已处理">内容 3</van-tab>
      <van-tab title="抄送我">内容 4</van-tab>
    </van-tabs> -->
    <messageDetail v-if="activeBottom === 0"></messageDetail>
    <process v-else></process>
    <van-tabbar v-model="activeBottom" border>
      <van-tabbar-item icon="home-o">代办事项</van-tabbar-item>
      <van-tabbar-item icon="search">流程效率</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import mCall from '@/utils/mCall'
import messageDetail from '@/pages/apply/detail/message/todoList'
import process from '@/pages/apply/detail/message/process'
export default {
  data () {
    return {
      active: 0,
      activeBottom: 0
    }
  },
  components: {
    messageDetail,
    process
  },
  created () {
    this.$store.commit('SET_HEADER',
      { // header相关信息
        showBack: mCall.hasFullScreen(), // 如果是校信环境，并且支持全屏嵌入H5应用，那么就显示返回。
        preventGoBack: true,
        title: '待办事项',
        backText: ''
      }
    )
    this.$store.commit('SHOW_BOTTOM', false)
  }
}
</script>
<style lang="less" scoped>

.message-wrap {
  margin-top: 50px;
  margin-bottom: 50px;
  background: #fff;
  overflow-y: auto;
  /deep/ .van-tabs--line .van-tabs__wrap {
    height: 100px;
  }
  /deep/ .van-tabs--line .van-tabs__wrap .van-tab {
    font-size: 30px;
    line-height: 100px;
  }
  /deep/ .van-tabbar {
    height: 100px;
  }
  /deep/ .van-tabbar .van-tabbar-item {
      font-size: 25px;
  }
   /deep/ .van-tabbar .van-tabbar-item__icon {
       font-size: 40px;
   }
}
</style>
