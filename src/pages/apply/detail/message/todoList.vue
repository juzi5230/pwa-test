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
            @load="getDetail(0)"
          >
            <van-cell v-for="item in detail.launchList" :key="item" :title="item" />
          </van-list>
        </van-tab>
        <van-tab title="待处理">
          <van-list
            v-model="listLoading"
            :finished="finished"
            finished-text="没有更多了"
            @load="getDetail(1)"
          >
            <van-cell v-for="item in detail.todoList" :key="item" :title="item" />
          </van-list>
        </van-tab>
        <van-tab title="已处理">
          <van-list
            v-model="listLoading"
            :finished="finished"
            finished-text="没有更多了"
            @load="getDetail(2)"
          >
            <van-cell v-for="item in detail.handledList" :key="item" :title="item" />
          </van-list>
        </van-tab>
        <van-tab title="抄送我">
          <van-list
            v-model="listLoading"
            :finished="finished"
            finished-text="没有更多了"
            @load="getDetail(3)"
          >
            <van-cell v-for="item in detail.copyList" :key="item" :title="item" />
          </van-list>
        </van-tab>
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
        handledList: [],
        copyList: []
      }
    }
  },
  methods: {
    getDetail (type) {
      this.listLoading = true
      service.getTodoList({type: type}).then(res => {
        if (res.code === '1') {
          // this.detail.push(res.data)
          if (type === 0) {
            // console.log(1)
            this.detail.launchList.push(...res.data.launchList)
          } else if (type === 1) {
            this.detail.todoList.push(...res.data.todoList)
          } else if (type === 2) {
            this.detail.handledList.push(...res.data.handledList)
          } else {
            this.detail.copyList.push(...res.data.copyList)
          }
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
    this.getDetail(this.active)
  }
}
</script>
