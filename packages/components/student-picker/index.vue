<template lang="html">
  <transition name="slide">
    <div class="students-picker" v-if="isShow">
      <view-box>
        <x-header slot="header" class="students-picker-header" :left-options="{backText: ''}">
          <a slot="left" @click="togglePicker(false)">
            <div class="left-arrow" style=""></div>
            <span class="arrow-text">关闭</span>
          </a>
          <a slot="right" @click="complete">完成<span v-if="realPersons && realPersons.length">({{ realPersons.length }})</span></a>
        </x-header>
        <search @on-change="getResult" @result-click="resultClick" :results="searchResults" v-model="searchName"></search>
        <div class="picker-content">
          <div class="selected-wrapper">
            <load-more v-show="isLoading" tip="正在加载"></load-more>
            <div v-show="!isLoading">
              <div class="selected-body" v-if="groups.length > 0 || students.length > 0">
                <span v-for="(item, index) in groups" class="item-cell" @click="onSelect('department', false, item, index)">
                  <span class="name">{{ item.text }}</span>
                  <icon type="clear"></icon>
                </span>
                <span v-for="item in students" class="item-cell" @click="onSelect('person', false, item)">
                  <span class="name">{{ item.name }}</span>
                  <icon type="clear"></icon>
                </span>
              </div>
            </div>
          </div>
          <div class="students-item-wrapper">
            <template v-show="!loading" v-for="groups in root.children">
              <group-item :groups="groups" :ansesters="[root.id]" :mode="mode"></group-item>
            </template>
            <div>
              <loading v-model="loading" text="加载中"></loading>
            </div>
          </div>
        </div>
        <toast type="text" :time="30000" width="10em" is-show-mask v-model="isShowToast" text="人员加载中，请稍候"></toast>
      </view-box>
    </div>
  </transition>
</template>

<script>
// import axios from 'axios'
import GroupItem from './groups-item'
import eventBus from './eventBus'
import Base from '../../libs/base'
import Loading from '../loading'
import XHeader from '../x-header'
import ViewBox from '../view-box'
import Search from '../search'
import Icon from '../icon'
import LoadMore from '../load-more'
import Toast from '../toast'

let axios = window.axios
export default {
  mixins: [Base],
  components: {
    GroupItem,
    Loading,
    XHeader,
    ViewBox,
    Search,
    Icon,
    LoadMore,
    Toast
  },
  props: {
    mode: {
      type: Number,
      default: 1
      // 0 多选，选择部门和人，不返回部门下的人
      // 1 多选，在0的基础上返回部门下的人
      // 2 单选
    },
    isShow: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array,
      required: false
    }
  },
  data () {
    return {
      // isLoading: false,
      // 根级部门
      root: {},
      loading: false,
      // 搜索
      searchName: '',
      searchResults: [],
      // 部门教师加载中...
      loadingObj: {},
      isShowToast: false,

      classIdArr: [], // 已选班级id集合
      gradeIdArr: [], // 已选年级id集合
      xqIdArr: [], // 已选校区id集合
      levelIdArr: [], // 已选学段id集合
      allStudents: [], // 所有学生集合（包含选中的组）
      hasGroups: false // 是否选择了组
    }
  },
  computed: {
    groups () {
      return eventBus.filteredDepartments
    },
    students () {
      return eventBus.filteredPersons
    },
    realPersons () {
      return eventBus.persons
    },
    result () {
      return [...this.groups, ...this.students]
    },
    isLoading () {
      let isLoading = false
      let obj = this.loadingObj
      for (let key in obj) {
        if (obj[key]) {
          isLoading = true
          break
        }
      }
      return isLoading
    }
  },
  watch: {
    isShow () {
      this.togglePicker(this.isShow)
      if (this.isShow) {
        // 为eventBus设置mode
        eventBus.setMode(this.mode)
      }
    }
  },
  methods: {
    togglePicker (isShow) {
      localStorage.clear()
      this.$emit('update:isShow', isShow)
      if (isShow) this.getStudentTree()
      else {
        this.$set(this, 'root', {})
        eventBus.clear()
      }
    },
    resultClick (item) {
      eventBus.affectResult('person', true, item.other)
    },
    getStudentTree () {
      if (this.loading) return
      this.loading = true
      axios.get('/dataselect/getStudentTree.do', {
        baseURL: '/lexueserver',
      }).then((res) => {
        this.root = res.data
        this.$nextTick(() => {
          eventBus.setResult(this.selected || [])
        })
        this.loading = false
      }, () => {
        this.loading = false
      })
    },
    // 搜索
    getResult (val) {
      if (this._searchTimer) clearTimeout(this._searchTimer)
      this._searchTimer = setTimeout(() => {
        axios({
          method: 'post',
          url: '/gyStudent/listing.do',
          data: `name=${val}`,
          headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
          baseURL: '/lexueserver'
        }).then((res) => {
          let data = res.data
          if (Array.isArray(data.rows)) {
            this.searchResults = data.rows.map(function (item) {
              return {
                title: item.name,
                other: item
              }
            })
          }
        })
      }, 200)
    },
    // 点击“完成”结束选人
    complete () {
      if (this.isLoading) {
        this.isShowToast = true
        return
      }
      let result = JSON.parse(JSON.stringify(this.result))


      // 当mode=1时，需要根据选择的所有的组id 集中获取所有的学生对象(为了减少过多的请求)
      if (this.mode === 1) {
        // this.getGroupsStudents(result)
        this.getGroupsStudents(result)
      }
      else {
        this.$emit('complete', result, null)
        this.togglePicker(false)
        eventBus.clear()
      }

    },
    getGroupsStudents (result) {
      if (!this.isShowToast) {
        this.isShowToast = true
        let newResult = []
        this.levelIdArr = []
        this.gradeIdArr = []
        this.xqIdArr = []
        this.classIdArr = []
        for (var i = 0; i < result.length; i++) {
          if (result[i].groupType) {
            if (result[i].groupType === 'edusys') {
              this.levelIdArr.push(this.subringId(result[i].id))
              this.hasGroups = true
            }
            else if (result[i].groupType === 'grade') {
              this.gradeIdArr.push(this.subringId(result[i].id))
              this.hasGroups = true
            }
            else if (result[i].groupType === 'xq') {
              this.xqIdArr.push(this.subringId(result[i].id))
              this.hasGroups = true
            }
            else if (result[i].groupType === 'class') {
              this.classIdArr.push(this.subringId(result[i].id))
              this.hasGroups = true
            }
          }
          else {
            newResult.push(result[i])
          }
        }
        if (this.hasGroups) {
          axios({
            method: 'post',
            url: '/gyStudent/listing.do',
            data: `levelids=${this.levelIdArr.toString()}&gradeids=${this.gradeIdArr.toString()}&xqids=${this.xqIdArr.toString()}&classids=${this.classIdArr.toString()}&rows=9999`,
            headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
            baseURL: '/lexueserver'
          })
          .then((res) => {
            let data = res.data
            data.rows.map((item) => {
              newResult.push({
                id: item.id,
                userid: item.userid,
                name: item.name,
                type: 'member'
              })
            })
            this.hasGroups = false
            this.isShowToast = false
            this.$emit('complete', result, newResult)
            this.togglePicker(false)
            eventBus.clear()
          })
        }
        else {
          this.isShowToast = false
          this.$emit('complete', result, newResult)
          this.togglePicker(false)
          eventBus.clear()
        }

      }
    },
    subringId (id) {
      return id.substring(id.indexOf('_') + 1, id.length)
    },
    onSelect (type, isSelected, data) {
      eventBus.affectResult(type, isSelected, data)
    }
  }
}
</script>

<style lang="less">
.students-picker {
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
    .selected-wrapper {
      margin: .6rem 0;
      .selected-body {
        width: 100%;
        max-height: 5rem;
        padding: .5rem 0;
        overflow-y: scroll;
      }
    }
  }
  .vux-search_show {
    background-color: #EFEFF4;
  }
}
.students-picker-header {
  z-index: 99999;
}
.arrow-text {
  margin-left: 15px;
}
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
</style>
