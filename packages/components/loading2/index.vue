<template>
  <div class="loading-wrap" :style="{ color: color}">
    <!-- <span class="xx-icon xx-icon-loading loading"></span> -->
    <div class="load1">
    	<div class="rect1" :style="{ background: color}"></div>
    	<div class="rect2" :style="{ background: color}"></div>
    	<div class="rect3" :style="{ background: color}"></div>
    	<div class="rect4" :style="{ background: color}"></div>
    	<div class="rect5" :style="{ background: color}"></div>
    </div>
    <p>{{des}}</p>
  </div>
</template>
<script>
  export default {
    props: {
      des: {
        type: String,
        default: '加载中...'
      },
      color: {
        type: String,
        default: '#fd9653'
      }
    }
  }
</script>
<style scoped>
.loading-wrap {
  text-align: center;
}
.load1 {
    margin: 0 auto;
    width: 50px;
    height: 60px;
    text-align: center;
    font-size: 10px;
}
.load1 > div {
  height: 100%;
  width: 6px;
  display: inline-block;
  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}
.load1 .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
.load1 .rect3 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}
.load1 .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.load1 .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
@-webkit-keyframes stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
  20% { -webkit-transform: scaleY(1.0) }
}
@keyframes stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}

</style>
