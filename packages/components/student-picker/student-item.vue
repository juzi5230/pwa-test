<template lang="html">
  <div class="person-item">
    <div class="weui-cells_radio">
      <div class="weui-cell" @click="toggleSelect">
        <div class="weui-cell__bd">
          <p>
            <span class="vux-radio-label">{{ student.name }}</span>
          </p>
        </div>
        <div class="weui-cell__ft">
          <input type="checkbox" class="weui-check" v-model="isSelected">
          <span class="weui-icon-checked"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from './eventBus'
export default {
  props: {
    student: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  },
  computed: {
    id () {
      return this.student && this.student.id
    },
    mode () {
      return eventBus.mode || 0
    },
    selected () {
      return eventBus.persons || []
    },
    isSelected () {
      return this.selected.some(item => item.id === this.student.id)
    }
  },
  methods: {
    toggleSelect () {
      eventBus.affectResult('person', !this.isSelected, this.student)
      if (this.mode !== 2) {
        this.$emit('studentState', this.isSelected)
      }
    }
  },
  watch: {
    'isSelected': function () { // 增加搜索框选中人的时候触发向上级校验
      if (this.mode !== 2) {
        this.$emit('studentState', this.isSelected)
        eventBus.dealPerson(this.student, this.isSelected)
      }
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
