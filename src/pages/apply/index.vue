<template>
  <div class="page-apply">
    <div class="white-block">
      <div class="flex-row">
        <div>请假类型</div>
        <div>事假</div>
      </div>
    </div>
    <div class="apply-type-tips">
      年假/调休余额可设置，并支持自动减扣
    </div>
    <div class="white-block">
      <div class="white-block-header">图片</div>
      <div>
        <div class="upload-wrapper">
          <div class="my-upload iconfont icon-addfile"></div>
          <input type="file" @change="change" ref="file" accept="image/*">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
@import '../../assets/less/variable.less';
@import './apply.less';
</style>
