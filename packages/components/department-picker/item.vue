<template lang="html">
  <div class="department-item" :key="id">
    <div class="weui-cells">
      <div class="weui-cells_radio">
        <div class="weui-cell" @click="toggleSelect">
          <div class="weui-cell__bd">
            <p>
              <span class="vux-radio-icon3" :class="{'radio-selected': showChildren}" :style="{'visibility': hasChildren ? 'visible' : 'hidden'}" @click="toggleShowChildren"></span>
              <span class="vux-radio-label">{{ department.text }}</span>
            </p>
          </div>
          <div class="weui-cell__ft">
            <input type="checkbox" class="weui-check" v-model="selected">
            <span class="weui-icon-checked"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="weui-cells department-children" v-show="showChildren">
      <div class="no-per-msg" v-if="showChildren && department.children.length === 0">暂无部门</div>
      <template v-for="item in department.children">
        <department-item :department="item" :ansesters="childrenAnsesters" @stateChange="onChildrenStateChange"></department-item>
      </template>
    </div>
  </div>
</template>

<script>
import eventBus from './eventBus'
import group from '../group'
import radio from '../radio'
import Base from '../../libs/base'
export default {
  mixins: [Base],
  name: 'department-item',
  components: {
    radio
  },
  props: {
    department: {
      type: Object,
      required: true
    },
    ansesters: {
      // 父级祖级部门的id数组
      type: Array,
      required: true
    }
  },
  data () {
    return {
      selected: false,
      showChildren: false,
      childrenSelectStates: {}
    }
  },
  computed: {
    id () {
      return this.department && this.department.id
    },
    children () {
      return this.department && this.department.children || []
    },
    hasChildren () {
      return this.children && this.children.length
    },
    childrenAnsesters () {
      return [...this.ansesters, this.id]
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
    }
  },
  mounted () {
    eventBus.$on('deparment:afterStateChange', this.onAfterStateChange)
    this.showChildren = false
  },
  methods: {
    changeState (state) {
      // 部门的选中事件要派发给picker，在picker内部统一维护选中的部门
      eventBus.$emit('department:stateChange', this.department, state)
      // 给父级派发选中事件，父级中需要处理子部门是否全部选中了
      this.$emit('stateChange', this.id, state)
    },
    onChildrenStateChange (id, status) {
      // 处理子级部门的选中
      this.childrenSelectStates[id] = true
    },
    toggleSelect () {
      this.selected = !this.selected
      this.changeState(this.selected)
    },
    toggleShowChildren (e) {
      if (!this.hasChildren) return true
      e.preventDefault()
      e.stopPropagation()
      this.showChildren = !this.showChildren
      return false
    },
    onAfterStateChange (mode, id, state) {
      switch (mode) {
        case 'single':
          // let isAnsester = this.ansesters.some(ast => ast === id)
          if (id === this.id) {
            this.selected = state
          }
          else this.selected = false
          break
        default:
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
.vux-radio-icon {
  width: 24px;
  height:24px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
}
.vux-radio-label {
  vertical-align: middle;
}
.vux-radio-icon3 {
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
.department-item {
  .department-children {
    margin-top: -1px;
    padding-left: 25px;
  }
  .weui-cells_radio {
    .weui-cell {
      padding: 10px 15px 10px 30px;
    }
  }
}
.department-children {
  > .department-item {
    .weui-cells {
      margin-top: 0;
      &::after {
        display: none;
      }
      .no-dept-msg {
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
}
</style>
