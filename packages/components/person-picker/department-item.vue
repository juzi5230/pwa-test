<template lang="html">
  <div class="person-department-item">
    <div class="weui-cells">
      <div class="weui-cells_radio">
        <div class="weui-cell" @click.stop="toggleShowChildren">
          <div class="weui-cell__bd">
            <p>
              <span class="vux-radio-icon1" :class="{'radio-selected': showChildren}"></span>
              <span class="vux-radio-label">{{ department.text }}</span>
            </p>
          </div>
          <div class="weui-cell__ft" v-if="mode !== 2">
            <span class="weui-icon-" @click.stop="toggleSelect()">
              <icon :type="isSelected ? 'success-circle' : 'circle'"></icon>
            </span>
          </div>
        </div>
      </div>
    </div>
    <load-more v-if="showChildren && loading" tip="正在加载"></load-more>
    <div class="weui-cells department-children" v-show="showChildren && !loading">
      <div class="no-per-msg" v-if="showChildren && !loading && persons.length === 0">暂无教师</div>
      <template v-for="person in persons">
        <person-item :department-id="id" :person="person"></person-item>
      </template>
      <template v-for="item in department.children">
        <department-item :department="item" ref="childrenVms"></department-item>
      </template>
    </div>
  </div>
</template>

<script>
import store from './store'
import PersonItem from './person-item'
import group from '../group'
import radio from '../radio'
import LoadMore from '../load-more'
import Icon from '../icon'
import Base from '../../libs/base'

let uid = 0
export default {
  mixins: [Base],
  name: 'department-item',
  components: {
    radio,
    PersonItem,
    LoadMore,
    Icon
  },
  props: {
    department: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      persons: [],
      showChildren: false,
      loading: false,
      uid: uid++,
      membersFetched: false, // 表示是否已经取得过部门成员
      selfSelected: false
    }
  },
  computed: {
    mode () {
      return store.mode
    },
    id () {
      return this.department && this.department.id
    },
    children () {
      return this.department && this.department.children || []
    },
    hasChildren () {
      return this.children && this.children.length
    },
    hasTeachers () {
      return !!(this.department && this.department.attributes && Number(this.department.attributes.teacherCount))
    },
    isSubsAllSelected () {
      let result = false
      if (this.persons && this.persons.length) {
        let isDirectPersonsSelected = this.persons.every((person) => {
          return store.persons.some((selectPerson) => {
            return (selectPerson.id === person.id) && (selectPerson.departmentId === person.departmentId)
          })
        })
        result = isDirectPersonsSelected && this.childrenSelected
      }

      return result
    },
    isSelected () {
      return this.selfSelected
    },
    childrenSelected () {
      let vms = this.$refs.childrenVms
      if (!vms || !vms.length) return true
      let result = vms.every((vm) => vm.isSelected)
      return result
    }
  },
  watch: {
    isSubsAllSelected (newValue) {
      this.selfSelected = newValue
      store.toggleDepartment(this.department, newValue, {
        uid: this.uid,
        escape: true // 仅用于添加自身数据，不改变其他的子部门和成员状态
      })
    }
  },
  created () {
    store.$on('department:setSelected', this.handleUpdate)
  },
  beforeDestory () {
    store.$off('department:setSelected', this.handleUpdate)
  },
  mounted () {
    this.showChildren = false
    if (
      store.departments.some((dpt) => {
        return dpt.id === this.id
      })
    ) {
      this.selfSelected = true
    }
  },
  methods: {
    handleUpdate (id, isSelected) {
      if (id === this.id) {
        this.toggleSelect(isSelected)
      }
    },
    toggleSelect (isSelected) {
      //单选不允许选部门
      if (store.mode === 2) return
      let state = isSelected === undefined ? !this.selfSelected : isSelected
      // 如果此时已经获取到了person，就直接处理
      // 如果还没有获取person，分两种情况
      // 如果是就延迟到下次展开部门，或者直到最后统一获取部门下的成员
      this.togglePersons(state)
      if (this.children && this.children.length) {
        this.$refs.childrenVms.forEach((vm) => {
          vm.toggleSelect(state)
        })
      }
      store.toggleDepartment(this.department, state, {
        uid: this.uid
      })
      this.selfSelected = state
    },
    togglePersons (isSelected) {
      if (this.membersFetched) {
        this.persons.forEach((person) => {
          store.togglePerson(person, isSelected)
        })
      }
    },
    toggleShowChildren (e) {
      if (!this.hasChildren && !this.hasTeachers) return

      if (!this.membersFetched) {
        this.getDepartmentTeachers()
      }
      this.showChildren = !this.showChildren
    },
    getDepartmentTeachers () {
      if (this.loading) return Promise.reject()
      if (this.membersFetched) return Promise.resolve()
      this.loading = true
      store.$emit('teachersLoading', true, this.uid)
      return store.getDptPersons(this.id).then((res) => {
        this.persons = res.data.map((item) => {
          item.departmentId = this.id
          return item
        })
        this.membersFetched = true

        // 只有在部门被选中后的第一次展开部门才会去遍历并设置部门下人员的选中状态
        // 这里的情况是搜索后添加一个人员，在相关部门展开后应当保留这个人的选中状态
        let isSelected = this.selfSelected
        if (isSelected) {
          this.persons.forEach((person) => {
            store.togglePerson(person, isSelected)
          })
        }
        store.$emit('teachersLoading', false, this.uid)
        this.loading = false
      }, () => {
        store.$emit('teachersLoading', false, this.uid)
        this.loading = false
      })
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
.vux-radio-icon1 {
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
.vux-radio-label {
  vertical-align: middle;
}
.person-department-item {
  .department-children {
    margin-top: -1px;
    padding-left: 25px;
  }
  > .weui-cells {
    margin-top: -1px;
    .no-per-msg {
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
.person-department-children {
  > .department-item {
    .weui-cells {
      margin-top: 0;
      &::after {
        display: none;
      }
    }
  }
}
</style>
