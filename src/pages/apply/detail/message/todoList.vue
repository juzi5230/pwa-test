<template>
  <div>
    <van-loading type="spinner" v-if="loading"/>
    <div v-else>
      <van-tabs v-model="active" color="#409eff" title-active-color="#409eff" animated swipeable>
        <van-tab title="已发起">
          <van-list
            v-model="listLoading"
            :finished="finished"
            finished-text="没有更多了"
            @load="getDetail"
          >
            <van-cell v-for="item in detail.launchList" :key="item" :title="item" />
          </van-list>
        </van-tab>
        <van-tab title="待处理">内容 2</van-tab>
        <van-tab title="已处理">内容 3</van-tab>
        <van-tab title="抄送我">内容 4</van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import service from '../../../../services'
export default {
  data () {
    return {
      active: 0,
      loading: false,
      listLoading: false,
      finished: false,
      detail: {
        launchList: [],
        todoList: [],
        handled: [],
        copyList: []
      }
    }
  },
  methods: {
    getDetail () {
      this.listLoading = true
      service.getTodoList().then(res => {
        if (res.code === '1') {
          this.detail = res.data
        } else {
          this.$notify(res.message)
        }
        this.listLoading = false
      }).catch(err => {
        console.log(err)
        this.listLoading = false
      })
    }
  },
  created () {
    this.getDetail()
  }
}
</script>
