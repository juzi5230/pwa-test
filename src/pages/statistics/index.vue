<template>
  <div>
    <tab class="statistics-tab" :line-width="2" active-color="#409eff" v-model="selectTabIndex">
      <tab-item>日统计</tab-item>
      <tab-item>月统计</tab-item>
      <tab-item>我的</tab-item>
    </tab>
    <div class="statistics-content" id="reveal-content">
      <div class="white-block">
        <div @click="openDate" class="statistics-date">{{now}}<span class="anticon icon-down"></span></div>
        <dashboard :clocked="clocked" :total="total"></dashboard>
        <div class="statis-panel-items">
          <div class="statis-panel-item" :class="{'disabled': statistic.number === 0}" v-for="(statistic, index) in statistics" :key="index">
            <div class="statis-panel-item-number">{{statistic.number}}</div>
            <div>{{statistic.text}}</div>
          </div>
        </div>
        <div class="statis-attendance">
          <div class="statis-attendance-item">请假3人</div>
          <div class="statis-attendance-item">请假3人</div>
          <div class="statis-attendance-item">请假3人</div>
          <div class="statis-attendance-item">请假3人</div>
        </div>
      </div>
      <white-block text="排行榜" iconName="medal" tips="发现优秀的人">
        <div class="statis-avatars">
          <div class="statis-avatars-item">
            <div class="statis-avatar"><name-avatar name="张三"></name-avatar></div>
            <div class="statis-label">早到榜</div>
          </div>
          <div class="statis-avatars-item">
            <div class="statis-avatar"><name-avatar name="李四"></name-avatar></div>
            <div class="statis-label">迟到榜</div>
          </div>
          <div class="statis-avatars-item">
            <div class="statis-avatar"><name-avatar name="司马轧钢"></name-avatar></div>
            <div class="statis-label">笑脸榜</div>
          </div>
        </div>
      </white-block>
      <white-block text="部门考勤" iconName="analy statis-depart-icon">
        <div class="statis-depart">
          <div class="statis-depart-label">
            <div class="statis-depart-name">7月6日部门排行</div>
            <div class="statis-depart-progress"></div>
            <div class="statis-depart-people">出勤人数</div>
            <div class="statis-depart-hour">平均工时</div>
          </div>
          <div class="statis-depart-item">
            <div class="statis-depart-name">公共开发部</div>
            <div class="statis-depart-progress">
              <v-progress class="statis-depart-progress-el" percent="50%"></v-progress>
            </div>
            <div class="statis-depart-people">1/2</div>
            <div class="statis-depart-hour">8.0小时</div>
          </div>
          <div class="statis-depart-item">
            <div class="statis-depart-name">产品部</div>
            <div class="statis-depart-progress">
              <v-progress class="statis-depart-progress-el" percent="20%"></v-progress>
            </div>
            <div class="statis-depart-people">1/5</div>
            <div class="statis-depart-hour">4.0小时</div>
          </div>
        </div>
      </white-block>
      <white-block text="公司出勤总览" iconName="analy" tips="统计公司整体出勤情况"></white-block>
    </div>
    <popup v-model="showDate" @on-hide="hidePopup">
      <inline-calendar v-model="now"></inline-calendar>
    </popup>
  </div>
</template>

<script>
import { tab, tabItem, InlineCalendar, Popup } from 'maroon'
import dateUtil from '@/utils/dateUtil'
import dashboard from './dashboard'
import service from '@/services'
import nameAvatar from '@/components/nameAvatar'
import whiteBlock from '@/components/whiteBlock'
import progress from '@/components/progress'
let sr = window.ScrollReveal({ reset: true })
// todo: 公司出勤总览使用D3绘制统计图
export default {
  name: 'Statistics',
  data () {
    return {
      now: dateUtil.timestampFormat(new Date().getTime(), 'YYYY-MM-DD'),
      showDate: false,
      selectTabIndex: 0,
      percent: 0, // 打卡比例
      clocked: 0,
      total: 0,
      ratio: window.devicePixelRatio,
      statistics: [] // 打卡
    }
  },
  mounted () {
    this.initReveal()
    setTimeout(() => {
      this.getStatistics()
    }, 3000)
  },
  methods: {
    // todo: 封装成指令
    openDate () {
      this.showDate = true
      this.currentHash = window.location.hash
      window.location.hash = window.location.hash + '#1' // 使android返回键能退出
      window.onhashchange = () => {
        if (this.currentHash === window.location.hash) {
          this.showDate = false
        }
      }
    },
    hidePopup () {
      if (window.location.hash === this.currentHash + '#1') {
        window.history.go(-1)
      }
    },
    getStatistics () {
      service.getStatistics()
        .then((res) => {
          let statistics = []
          statistics.push({
            number: res.data.total - res.data.clocked,
            text: '未打卡'
          })
          statistics.push({
            number: res.data.late,
            text: '迟到'
          })
          statistics.push({
            number: res.data.out,
            text: '外勤'
          })
          statistics.push({
            number: res.data.unsign,
            text: '未激活'
          })
          this.statistics = statistics
          this.percent = (res.data.clocked / res.data.total) * 100
          this.clocked = res.data.clocked
          this.total = res.data.total
        })
    },
    initReveal () {
      sr.reveal('.reveal-item', {
        duration: 200,
        container: '#reveal-content'
      })
    }
  },
  // filters: dateUtil,
  components: {
    tab,
    tabItem,
    Popup,
    InlineCalendar,
    dashboard,
    nameAvatar,
    whiteBlock,
    vProgress: progress
  }
}
</script>
<style lang="less">
@import '../../assets/less/variable.less';
@import './statistics.less';
</style>
