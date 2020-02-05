<template>
  <div class="zy_media_wrap">
    <div class="zy_media">
      <video :poster="cover" id="video" :data-config="mediaTitle">
          <source :src="video" :type="type" @error="error">
          您的浏览器不支持HTML5视频
      </video>
    </div>
    <div class="zy_media_error" v-show="playerror">播放出现错误</div>
  </div>
</template>

<script>
require('./zy.media.js')
let Media = window.zymedia

export default {
  props: {
    cover: String,
    video: String,
    type: {
      type: String,
      default: 'video/mp4'
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      playerror: false
    }
  },
  computed: {
    mediaTitle () {
      let mt = ''
      if (this.title) {
        mt = JSON.stringify({
          mediaTitle: this.title
        })
      }
      return mt
    }
  },
  methods: {
    error (e) {
      this.playerror = true
    }
  },
  mounted () {
    this._player = Media(this.$el.querySelector('video'))
  }
}
</script>

<style>
@import './zy.media.css';
.zy_media_wrap {
  position: relative;
}
.zy_media_error {
  position: absolute;
  left: 10px;
  top: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 0 10px;
}
</style>
