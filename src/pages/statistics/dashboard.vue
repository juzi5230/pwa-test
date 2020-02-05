<template>
  <div class="statis-panel">
    <div class="statis-panel-circle">
      <x-circle :percent="percent" :stroke-width="6" :trail-width="6" stroke-color="#109eff">
        <div class="statis-panel-subtitle"><span>打卡人数/应到人数</span></div>
        <div class="statis-panel-data"><span>{{clocked}}</span><span class="statis-panel-data-split">/</span><span>{{total}}</span></div>
        <div class="statis-panel-link"><span>打卡明细></span></div>
      </x-circle>
    </div>
  </div>
</template>

<script>
import { XCircle } from 'maroon'
export default {
  props: {
    clocked: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    }
  },
  computed: {
    percent: function () {
      if (this.total <= 1) {
        return 0
      } else {
        return this.clocked / this.total * 100
      }
    }
  },
  components: {
    XCircle
  }
}
</script>

<style>

</style>
