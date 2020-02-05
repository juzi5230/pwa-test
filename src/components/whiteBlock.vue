<template>
  <div class="white-block reveal-item">
    <div class="white-block-header">
      <span><i class="iconfont white-block-icon" :class="icon"></i>{{text}}</span>
      <span class="white-block-tips">{{tips}}</span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    iconName: String,
    tips: String
  },
  computed: {
    icon () {
      return `icon-${this.iconName}`
    }
  }
}
</script>
