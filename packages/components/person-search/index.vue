<script>
import Search from '../search'
import LoadMore from '../load-more'
import debounce from 'lodash.debounce'
let axios = window.axios
export default {
  props: {
    data: {
      type: Object,
      default: {
        isShow: false,
        params: {
          name: ''
        },
        complete: function () {}
      }
    }
  },
  watch: {
    'data.isShow': function (val) {
      if (val) {
        setTimeout(() => {
          this.mask.classList.add('vux-popup-show')
        })
      }
      else {
        setTimeout(() => {
          this.mask.classList.remove('vux-popup-show')
        })
      }
    }
  },
  mounted () {
    /**
     * 控制请求的频率
     * @type {[type]}
     */
    this.debounced = debounce(() => {
      this.isLoading = true
      this.tip = ''
      axios.get(`/query/queryteacher.do?name=${this.val}`, {
        baseURL: '/lexueserver',
      })
      .then(({ data }) => {
        console.log(data)
        console.log(typeof data)
        if (typeof data === 'string') {
          data = JSON.parse(data)
        }
        console.log(data)
        this.isLoading = false
        if (data.length === 0) {
          this.tip = '暂无数据'
        }
        data.map((d) => d.title = d.name + ' - ' + d.fzmc)
        this.results = data
      })
      .catch(e => {
        console.log(e)
        this.isLoading = false
        this.tip = '搜索失败'
      })
    }, 300)
    // 多个模块共享一个mask
    if (!!document.querySelectorAll('.vux-popup-mask').length <= 0) {
      this.divMask = document.createElement('a')
      this.divMask.className = 'vux-popup-mask'
      this.divMask.dataset.uuid = '' // 用于多个popup共享一个mask
      this.divMask.href = 'javascript:void(0)'
      document.body.appendChild(this.divMask)
    }
    this.mask = document.querySelector('.vux-popup-mask')
    this.mask.addEventListener('click', () => {
      this.hide()
    }, false)
  },
  beforeDestroy () {
    if (this.debounced) {
      this.debounced.cancel()
    }
    // TODO: 是否需要销毁mask上的监听事件
  },
  data () {
    return {
      results: [],
      val: '',
      isLoading: false,
      tip: '',
      divMask: '',
      mask: '',
      debounced: {}
    }
  },
  methods: {
    change (val) {
      this.val = val
      this.debounced()
    },
    hide () {
      this.data.isShow = false
      this.results = []
      this.tip = ''
      this.isLoading = false
    },
    select (item) {
      this.hide()
      this.data.complete(item)
    }
  },
  components: {
    Search,
    LoadMore
  }
}
</script>
<template>
<div class="person-search-wrap" v-if="data.isShow">
  <search placeholder="请输入姓名" @on-change="change" @on-cancel="hide" @on-result-click="select" :results="results" ref="search" position="absolute"></search>
  <div v-show="isLoading || tip" class="person-load-tips">
    <load-more :show-loading="isLoading" :tip="tip" background-color="#fff"></load-more>
  </div>
</div>
</template>
<style scoped>
.person-search-wrap {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 999;
}
.person-load-tips {
  position: absolute;
  top: 50px;
  width: 100%
}
</style>