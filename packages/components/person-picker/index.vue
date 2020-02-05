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
        <search @result-click="resultClick" @on-change="getResult" :results="searchResults" v-model="searchName"></search>
        <div class="picker-content">
          <div class="items-wrapper" v-if="(departments && departments.length) || (persons && persons.length)">
            <result></result>
          </div>
          <div class="deparment-item-wrapper">
            <template v-show="!loading" v-for="dpm in root.children">
              <department-item :department="dpm" :ansesters="[root.id]"></department-item>
            </template>
            <div>
              <loading v-model="loading" text="加载中"></loading>
            </div>
          </div>
        </div>
      </view-box>
    </div>
  </transition>
</template>

<script>
import DepartmentItem from './department-item'
import Result from './result'
import store from './store'
import Base from '../../libs/base'
import Loading from '../loading'
import XHeader from '../x-header'
import ViewBox from '../view-box'
import Search from '../search'
import Icon from '../icon'
import LoadMore from '../load-more'
export default {
  mixins: [Base],
  components: {
    DepartmentItem,
    Result,
    Loading,
    XHeader,
    ViewBox,
    Search,
    Icon,
    LoadMore
  },
  props: {
    mode: {
      type: Number,
      default: 1
      // 0 多选，选择部门和人，不返回部门下的人
      // 1 多选，在0的基础上返回部门下的人
      // 2 单选
    }
  },
  data () {
    return {
      isShow: false,
      // 根级部门
      root: {},
      loading: false,
      // 搜索
      searchName: '',
      searchResults: [],
      // 部门教师加载中...
      isShowToast: false,
      store,
      selectedArr: []
    }
  },
  computed: {
    departments () {
      return store.departments
    },
    persons () {
      return store.persons
    }
  },
  mounted () {
    // 为store设置mode
    store.init(this.mode)
    this.$on('show', (selectedArr = []) => {
      this.selectedArr = selectedArr
      this.togglePicker(true)
    })
  },
  beforeDestory () {
    if (this._searchTimer) clearTimeout(this._searchTimer)
  },
  methods: {
    togglePicker (isShow) {
      this.isShow = isShow
      if (isShow) this.getDepartments()
    },
    getDepartments () {
      if (this.loading) return
      this.loading = true
      store.getRootData().then(({data}) => {
        this.root = data
        this.$nextTick(() => {
          store.setInitData(this.selectedArr)
        })
        this.loading = false
      }).catch((e) => {
        this.loading = false
      })
    },
    // 搜索
    getResult (val) {
      if (this._searchTimer) clearTimeout(this._searchTimer)
      this._searchTimer = setTimeout(() => {
        store.queryPerson(val).then((res) => {
          let data = res.data
          if (Array.isArray(data)) {
            this.searchResults = data.map(function (item) {
              return {
                title: item.name,
                other: item
              }
            })
          }
        })
      }, 200)
    },
    resultClick (item) {
      let person = item.other
      person.departmentId = person.group_id
      store.togglePerson(person, true)
    },
    // 点击“完成”结束选人
    complete () {
      this.loading = true
      store.getResult().then((res) => {
        this.$emit('complete', res.data)
        this.togglePicker(false)
        this.loading = false
      })
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
  .items-wrapper {
    padding: .4em .5em;
    max-height: 5rem;
    // padding: .5rem 0;
    overflow-y: scroll;
    .weui-loadmore {
      margin: .4em auto;
    }
  }
  .vux-search-box {
    position: absolute !important;
    top: 46px !important;
    z-index: 99999;
  }
  .picker-content {
    margin-top: 44px;
  }
  .vux-search_show {
    background-color: #EFEFF4;
  }
}
.items-wrapper {
  .item-cell {
    position: relative;
    display: inline-block;
    border-radius: 4px;
    padding: 0 1.2em 0 .2em;
    margin: .2em;
    background-color: #27394c;
    color: #fff;
    .name {
      display: block;
      height: 24px;
      line-height: 24px;
    }
    .weui-icon {
      position: absolute;
      right: 0;
      top: 5px;
    }
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
