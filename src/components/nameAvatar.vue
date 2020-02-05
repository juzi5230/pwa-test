<template>
  <canvas ref="avatar" class="name-avatar"></canvas>
</template>

<script>
// import { invertColor, randomColor} from '@/utils/color.js'

export default {
  props: {
    name: String
  },
  mounted () {
    let el = this.$refs.avatar
    let style = getComputedStyle(el)
    this.width = +style.width.substr(0, style.width.length - 2)
    this.height = +style.height.substr(0, style.height.length - 2)
    el.width = this.width
    el.height = this.height
    this.ctx = el.getContext('2d')
    this.renderAvatar()
  },
  watch: {
    name: function () {
      return this.renderAvatar()
    }
  },
  data () {
    return {
      bgColor: '#409eff',
      nameColor: '#FFFFFF'
    }
  },
  methods: {
    renderAvatar () {
      if (!this.name) return

      let fontSize = this.width / (this.name.length + 1)
      let x = this.width / 2
      let y = this.height / 2
      this.ctx.fillStyle = this.bgColor
      this.ctx.fillRect(0, 0, this.width, this.height)
      this.ctx.textBaseline = 'middle'
      this.ctx.textAlign = 'center'
      this.ctx.fillStyle = this.nameColor
      this.ctx.font = fontSize + 'px sans-serif'
      this.ctx.fillText(this.name, x, y)
    }
  }
}
</script>

<style scoped>
.name-avatar {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
</style>
