<template lang="html">
  <div class="groups-item">
    <div class="weui-cells">
      <div class="weui-cells_radio">
        <div class="weui-cell" @click="toggleSelect()">
          <div class="weui-cell__bd">
            <p>
              <span class="vux-radio-icon2" @click="toggleShowChildren" :class="{'radio-selected' : showGroups}"></span>
              <span class="vux-radio-label">{{ groups.text }}</span>
            </p>
          </div>
          <div class="weui-cell__ft">
            <input type="checkbox" class="weui-check" v-model="groups.disabled">
            <span class="weui-icon-checked"></span>
          </div>
        </div>
      </div>
    </div>
    <load-more v-if="loading" tip="正在加载" v-show="groups.type === 'class'"></load-more>
    <div class="weui-cells groups-children" v-show="showGroups">
      <div class="no-std-msg" v-if="showGroups && !loading && groups.children.length === 0 && students.length === 0">暂无学生</div>
      <template v-if="groups.children.length === 0" v-for="student in students">
        <student-item :student="student" :hasSelected="groups.disabled" @studentState="checkStudentState"></student-item>
      </template>
      <template v-for="item in groups.children">
        <group-item :groups="item" ref="childrenVms" :ansesters="childrenAnsesters" @stateChange="onChildrenStateChange" :mode="mode"></group-item>
      </template>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import eventBus from './eventBus'
import group from '../group'
import radio from '../radio'
import StudentItem from './student-item'
import LoadMore from '../load-more'
import Base from '../../libs/base'

let uid = 0
let axios = window.axios
export default {
  mixins: [Base],
  name: 'group-item',
  components: {
    radio,
    StudentItem,
    LoadMore
  },
  props: {
    groups: {
      type: Object,
      required: true
    },
    ansesters: {
      // 父级祖级部门的id数组
      type: Array,
      required: true
    },
    mode: {
      type: Number,
      required: 1
    }
  },
  data () {
    return {
      students: [],
      showGroups: false,
      childrenSelectStates: {},
      loading: false,
      uid: uid++,
      clickClassId: ''
    }
  },
  computed: {
    id () {
      return this.groups && this.groups.id
    },
    children () {
      return this.groups && this.groups.children || []
    },
    childrenAnsesters () {
      return [...this.ansesters, this.id]
    },
    parentDepartmentId () {
      return this.ansesters[this.ansesters.length - 1]
    },
    selected () {
      return eventBus.persons || []
    },
    childrenSelected () {
      let vms = this.$refs.childrenVms
      if (!vms || !vms.length) return true
      let result = vms.every((vm) => vm.isSelected)
      return result
    }
  },
  watch: {
    children () {
      // NOTE: 只生成一次children的state map
      if (!this.children || !this.children.length) return
      if (this._statesInited) return
      let states = this.childrenSelectStates
      this.children.forEach((child) => {
        states[child.id] = false
      })
      this._statesInited = true
    },
    'groups.disabled': function() {
      eventBus.dealDepartment(Object.assign({}, this.groups, {
        parentId: this.parentDepartmentId,
        members: this.students,
        uid: this.uid
      }), this.groups.disabled)
    }
  },
  created () {
    eventBus.$on('departmentUpdatePersons', this.handleUpdate)
  },
  beforeDestory () {
    eventBus.$off('departmentUpdatePersons', this.handleUpdate)
  },
  methods: {
    checkStudentState(status) {
      if (!this.students || !this.students.length) return false
      let isDirectPersonsSelected = this.students.every((student) => {
        return this.selected.some((selectPerson) => {
          return selectPerson.id === student.id
        })
      })
      this.groups.disabled = isDirectPersonsSelected && this.childrenSelected
      this.$emit('stateChange', status)
    },
    handleUpdate (id, state) {
      if (this.id === id) {
        this.changeChildren(state)
      }
    },
    onChildrenStateChange (status) {
      // 给父级派发选中事件，父级中需要处理子部门是否全部选中了
      for (var i = 0; i < this.groups.children.length; i++) {
        if (this.groups.children[i].disabled) {
          this.groups.disabled = true
        }
        else {
          this.groups.disabled = false
          this.$emit('stateChange', status)
          return
        }
      }
      this.$emit('stateChange', status)
    },
    toggleShowChildren (e) { // 展开按钮处理
      e.preventDefault()
      e.stopPropagation()

      this.showGroups = !this.showGroups
      if (this.showGroups && this.groups.type === 'class') {
        this.togetStudents()
      }
      return false
    },
    toggleSelect () { // 选择对应组
      if (this.mode === 2) return
      let state = !this.groups.disabled
      this.changeChildren(state)
    },
    changeChildren (state) { // 改变组的选择状态
      if (this.groups.type === 'class') {
        this.changeStudents(state)
      }
      this.groups.disabled = state
      this.$emit('stateChange', state)
      let vms = this.$refs.childrenVms || []
      vms.forEach((vm) => {
        // 让子部门也去改变选中状态
        vm.changeChildren(state)
      })
    },
    togetStudents() { // 看loaclStorage下是否有对应的缓存
      let type = this.groups.type
      let id = this.groups.id
      this.clickClassId = id.substring(id.indexOf('_') + 1, id.length) // 查询学生时 学生班级年级等id 后端返回的格式如class_-10042 接口传参数id为过滤掉第一出现的'_'之后的内容
      if (localStorage.getItem(this.clickClassId) === null) {
        this.getStudents(type, this.clickClassId)
      }
      else {
        this.students = JSON.parse(localStorage.getItem(this.clickClassId))
        if (type === 'class') {
          if (this.groups.disabled) {
            this.changeStudents(this.groups.disabled)
          }
          else {
            this.checkStudentState()
          }
        }
      }
      // }
    },
    getStudents(type, id) { // 根据type与id请求对应的学生
      this.loading = true
      axios({
        method: 'post',
        url: '/gyStudent/listing.do',
        data: `nodeType=${type}&nodeId=${id}&rows=9999`,
        headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
        baseURL: '/lexueserver'
      })
      .then((res) => {
        let data = res.data
        if (Array.isArray(data.rows)) {
          this.students = res.data.rows.map((item) => {
            item.departmentId = this.id
            return item
          })
        }
        this.loading = false

        localStorage.setItem(id, JSON.stringify(this.students)) // 这里记得退出清除缓存
        if (type === 'class') {
          if (this.groups.disabled) {
            this.changeStudents(this.groups.disabled)
          }
          else {
            this.checkStudentState()
          }
        }
      })
    },
    changeStudents (state) {
      for (var i = 0; i < this.students.length; i++) {
        eventBus.affectResult('person', state, this.students[i])
      }
    }
  }
}
</script>

<style lang="less">
@import '../../styles/weui/widget/weui_cell/weui_check';
@import '../../styles/weui/widget/weui_cell/weui_form/weui_form_common';
@import '../../styles/weui/icon/weui_icon_font';
.weui-cell_radio > * {
  pointer-events: none;
}
.vux-radio-icon2 {
  position: absolute;
  width: 0;
  height: 0;
  top: 15px;
  left: 10px;
  vertical-align: middle;
  border-top: .6rem solid;
  border-right: .4rem solid transparent;
  border-left: .4rem solid transparent;
  border-color: #999 transparent transparent;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
  transition: .4s ease-in-out;
  margin-right: 5px;
}
.radio-selected {
  transition: .4s ease-in-out;
  -webkit-transform: rotate(0);
  transform: rotate(0);
}
.groups-item {
  .groups-children {
    margin-top: -1px;
    padding-left: 15px;
  }
  > .weui-cells {
    margin-top: -1px;
    .no-std-msg {
      font-size: .8rem;
      color: #999;
      padding: 10px 15px;
    }
    > .weui-cells_radio {
      > .weui-cell {
        padding: 10px 15px 10px 30px;
      }
    }
  }
}
.groups-children {
  > .groups-item {
    .weui-cells {
      margin-top: 0;
      &::after {
        display: none;
      }
    }
  }
}
</style>
