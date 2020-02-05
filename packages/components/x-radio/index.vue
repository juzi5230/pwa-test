<template>
  <div class="weui-cells_checkbox">
    <label>
      <input type="checkbox" :name="name" :id="id" class="weui-check" v-model="currentValue" :disabled="isDisable">
      <i class="weui-icon-checked vux-checklist-icon-checked" style="cstyle"></i>
    </label>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    value: Boolean,
    id: String,
    isDisable: Boolean,
    cstyle: Object
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  watch: {
    currentValue (val) {
      this.$emit('on-change', val)
    }
  }
}
</script>
<style lang="less">
@import '../../styles/weui/icon/weui_font.less';
@import '../../styles/weui/widget/weui_cell/weui_cell_global.less';
@import '../../styles/weui/widget/weui_cell/weui_check.less';

.weui-cells_checkbox .weui-check:checked + .vux-checklist-icon-checked:before {
  color: @checklist-icon-active-color;
}

.weui-cells_checkbox > label > * {
  pointer-events: none;
}
.weui-cells_checkbox .weui-icon-checked:before {
  font-size: 1em;
}
</style>
