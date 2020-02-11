<template>
    <div class="process-wrap">
        <div>
            <van-icon name="notes-o" size="20" dot />{{formatDate(date)}}
            <img src="../../../../../static/images/telecommuting.jpg"/>>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      date: new Date()
    }
  },
  methods: {
    formatDate (date) {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    }
  }

}
</script>

<style scoped>
.process-wrap {
    margin: 20px;
}
</style>
