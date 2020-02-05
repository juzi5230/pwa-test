### department-picker 选部门组件


### 手机预览
|qrcode:#/extends/department-picker|


### 演示代码
```vue
<template>
  <div>
    <x-button @click.native="isShow = !isShow">开始选择</x-button>
    <div class="">
      选择结果：
      {{ result }}
    </div>
    <department-picker :isShow="isShow" @update:isShow="val => isShow = val" @complete="val => result = val"></department-picker>
  </div>
</template>

<script>
import { XButton, DepartmentPicker } from 'maroon'
export default {
  components: {
    DepartmentPicker,
    XButton
  },
  data () {
    return {
      isShow: false,
      result: []
    }
  }
}
</script>

<style scoped lang="less">
</style>
```
