<template>
  <div class="app-page-wrapper">
    <slot></slot>
  </div>
</template>
<style lang="less">
  @import '../../styles/weui/base/reset.less';
  @import '../../styles/weui/icon/weui_icon_font.less';

  html, body {
     height: 100%;
     width: 100%;
     overflow-x: hidden;
     margin: 0;
     padding: 0;
  }
  .app-page-wrapper {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
  .vux-popup-dialog,.vux-popup {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #eee;
    z-index: 501;
    transition-property: transform;
    transition-duration: 300ms;
  }
  .vux-popup-mask {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    tap-highlight-color: rgba(0,0,0,0);
    z-index: -1;
  }
  .vux-popup-mask.vux-popup-show {
    opacity: 1;
    z-index: 900;
    transition: opacity 0.3s;
  }
  .vux-popup-animate-transiton {}
  .vux-popup-animate-enter {
    transform: translate3d(0, 100%, 0);
  }
  .vux-popup-animate-leave-active {
    transform: translate3d(0, 100%, 0);
  }
</style>
