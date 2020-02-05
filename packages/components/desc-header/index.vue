<template>
  <div class="page__hd" :style="xstyle">
    <h1 class="page__title">
      <!-- <span ></span> -->
      <router-link class="components-icon-home backhome" to="/"></router-link>
      {{title}}
    </h1>
    <p class="page__desc">{{desc}}</p>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    desc: String,
    xstyle: Object
  }
}
</script>
<style>
@import "./icon-home.less";

.page__hd {
    padding: 40px;
}
.page__title {
    text-align: left;
    font-size: 20px;
    font-weight: 400;
}
.page__desc {
    margin-top: 5px;
    color: #888;
    text-align: left;
    font-size: 14px;
}
.backhome::before {
  font-size: 24px;
  margin-right: 20px;
  color: #000;
}
</style>
