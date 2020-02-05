<template>
  <transition name="slide">
    <div class="department-picker" v-if="isShow">
      <view-box>
        <x-header slot="header" class="department-picker-header" :left-options="{backText: ''}">
          <a slot="left" @click="togglePicker(false)">
            <div class="left-arrow" style=""></div>
            <span class="arrow-text">关闭</span>
          </a>
          <a slot="right" @click="complete">完成</a>
        </x-header>
        <div class="deparment-item-wrapper">
          <div class="weui-cells__title">选择部门</div>
          <department-item v-show="!loading" :department="root" :ansesters="[]"></department-item>
          <div>
            <loading v-model="loading" text="部门加载中"></loading>
          </div>
        </div>
      </view-box>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'
import DepartmentItem from './item'
import eventBus from './eventBus'
import Base from '../../libs/base'
import Loading from '../loading'
import XHeader from '../x-header'
import ViewBox from '../view-box'
export default {
  mixins: [Base],
  components: {
    DepartmentItem,
    Loading,
    XHeader,
    ViewBox
  },
  props: {
    mode: {
      type: String,
      default: 'single' // 单一选择
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // 根级部门
      root: {},
      result: [],
      loading: false
    }
  },
  watch: {
    isShow () {
      this.togglePicker(this.isShow)
    }
  },
  mounted () {
    eventBus.$on('department:stateChange', this.onDepartmentStateChange)
  },
  beforeDestory () {
    eventBus.$off('department:stateChange', this.onDepartmentStateChange)
  },
  methods: {
    togglePicker (isShow) {
      this.$emit('update:isShow', isShow)
      if (isShow) this.getDepartments()
      else {
        this.$set(this, 'root', {})
        this.$set(this, 'result', [])
      }
    },
    getDepartments () {
      if (this.loading) return
      this.loading = true
      axios.get('/lexueserver/group/treeAndTeacherCount.do').then((res) => {
        this.root = res.data
        this.loading = false
      }, () => {
        this.loading = false
      })
    },
    onDepartmentStateChange (department, state) {
      let result = []
      switch (this.mode) {
        case 'single':
          if (department && department.id && state !== undefined) {
            if (state) result.push(department)
            eventBus.$emit('deparment:afterStateChange', 'single', department.id, state)
          }
          break
        default:
      }
      this.$set(this, 'result', result)
    },
    complete () {
      let result = JSON.parse(JSON.stringify(this.result))
      this.$emit('complete', result)
      this.togglePicker(false)
    }
  }
}
</script>

<style lang="less">
@import '../../styles/variable.less';
.department-picker {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  .weui-tab__panel {
    margin-top: -46px;
    padding-top: 46px;
  }
}
.department-picker-header {
  z-index: 99999;
}
.arrow-text {
  margin-left: 15px;
}
.slide-enter-active, .slide-leave-active {
  transition: left ease .2s;
}
.slide-enter, .slide-leave-to {
  left: 100%;
}
</style>
