<template lang="html">
  <div class="person-item">
    <div class="weui-cells_radio">
      <div class="weui-cell" @click="toggleSelect">
        <div class="weui-cell__bd">
          <p>
            <span class="vux-radio-label">{{ person.name }}</span>
          </p>
        </div>
        <div class="weui-cell__ft">
          <span class="weui-icon-">
            <icon :type="isSelected ? 'success-circle' : 'circle'"></icon>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from './store'
import Icon from '../icon'
export default {
  components: {
    Icon
  },
  props: {
    person: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {
    id () {
      return this.person && this.person.id
    },
    selected () {
      return store.persons || []
    },
    isSelected () {
      return this.selected.some(item => item.id === this.id && item.departmentId === this.person.departmentId)
    }
  },
  mounted () {
    // 仅在初次挂载时处理初始数据的状态
    let needUpdateStore = this.selected.some(item => item.id === this.id && item.needUpdate)
    if (needUpdateStore) {
      store.togglePerson(this.person, true, {
        force: true
      })
    }
  },
  methods: {
    toggleSelect () {
      store.togglePerson(this.person, !this.isSelected)
    }
  }
}
</script>

<style lang="less">
.person-item {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    display: block;
    width: 100%;
    height: 1px;
    border-top: 1px solid #D9D9D9;
    color: #D9D9D9;
    transform-origin: 0 100%;
    transform: scaleY(0.5);
  }
}
.person-item + .department-item {
  margin-top: -1px;
}
</style>
