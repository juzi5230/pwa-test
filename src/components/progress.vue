<template>
  <div class="progress-wrap" :style="{height: height + 'px'}"><div class="progress" :style="{width: percent}"></div></div>
</template>

<script>
export default {
  props: {
    height: {
      default: 10,
      type: Number
    },
    percent: String
  }
}
</script>
