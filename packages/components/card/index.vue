<template>
	<div class="weui-panel weui-panel_access mr-card">
    <div class="mr-card__hd" v-if="header && header.title" v-html="header.title" @click="$emit('on-click-header')"></div>
    <slot name="header"></slot>
    <div class="mr-card__content"><slot name="content"></slot></div>
    <div class="mr-card__footer" v-if="footer">
      <slot name="footer"></slot>
    </div>		
  </div>
</template>

<script>
import { go } from '../../libs/router'

export default {
  props: {
    header: Object,
    footer: Object
  },
  methods: {
    onClickFooter () {
      this.footer.link && go(this.footer.link, this.$router)
      this.$emit('on-click-footer')
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../styles/weui/widget/weui_cell/weui_cell_global';
@import '../../styles/weui/widget/weui_cell/weui_access';
@import '../../styles/weui/widget/weui_panel/weui_panel';

.weui-panel .weui-cell:first-child:before {
  display: block;
}
.mr-card {
  background: #fff;
  box-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.3);
  margin: 0.5rem;
  position: relative;
  border-radius: 0.1rem;
  font-size: 0.7rem;
}
.mr-card__hd, .mr-card__footer {
  min-height: 2.2rem;
  position: relative;
  padding: 0.5rem 0.75rem;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.mr-card__content {
	color: #333;
	min-height: 16px;
}
.mr-card__hd {
  border-radius: 0.1rem 0.1rem 0 0;
  font-size: 0.85rem;
}
.mr-card__hd:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  right: auto;
  top: auto;
  height: 1px;
  width: 100%;
  background-color: #e1e1e1;
  display: block;
  z-index: 15;
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
}
.mr-card__footer {
  border-radius: 0 0 0.1rem 0.1rem;
  color: #5f646e;
}
.mr-card__footer:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: auto;
  right: auto;
  height: 1px;
  width: 100%;
  background-color: #e1e1e1;
  display: block;
  z-index: 15;
  -webkit-transform-origin: 50% 0%;
  transform-origin: 50% 0%;
}
</style>
