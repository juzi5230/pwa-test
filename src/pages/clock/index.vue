<template>
  <div class="clock" ref="clock">
    <p class="clock-time reveal-item">{{time}}</p>
    <p class="clock-day reveal-item">{{day}}</p>
    <p class="clock-week reveal-item">{{week}}</p>
    <div>
      <i class="iconfont icon-geo clock-icon reveal-item"></i>
    </div>
    <div class="clock-btn-wrap reveal-item">
      <x-button type="primary" class="clock-btn">打卡</x-button>
    </div>
  </div>
</template>

<script>
import { XButton } from 'maroon'
import dateUtil from '@/utils/dateUtil'
let sr = window.ScrollReveal({ reset: true })

// todo: 集成高德地图，获取具体位置
export default {
  data () {
    return {
      time: '',
      day: '',
      week: ''
    }
  },
  mounted () {
    let now = new Date().getTime()
    this.time = dateUtil.timestampFormat(now, 'hh:mm')
    this.day = dateUtil.timestampFormat(now, 'YYYY年MM月DD日')
    this.week = dateUtil.getWeek(now)
    this.initReveal()
  },
  components: {
    XButton
  },
  methods: {
    initReveal () {
      sr.reveal('.reveal-item', {
        duration: 200,
        container: this.$refs.clock
      })
    }
  }
}
</script>

<style lang="less">
@import '../../assets/less/variable.less';
@import './clock.less';
</style>
