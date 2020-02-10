<template>
  <div class="apply-wrap">
    <div class="page-apply" v-show="!loading">
      <div class="white-block">
        <div class="flex-row">
          <div>乐之行智慧校园</div>
          <van-icon name="comment-o" size="20" info="99+" @click="toMessage"/>
        </div>
      </div>
      <div class="telecommuting-wrap">
        <!--图片懒加载-->
        <van-image
          fit="fill"
          height="200"
          width="100%"
          lazy-load
          src="../../../static/images/telecommuting.jpg"
        >
          <template v-slot:error>图片加载失败
          </template>
        </van-image>
        <div class="tele-title" @click="toGuide">远程办公指南 >></div>
      </div>
      <van-cell value="更多" is-link @click="toNotice">
        <!-- 使用 title 插槽来自定义标题 -->
        <template slot="title">
          <van-tag type="danger">公告</van-tag>
          <span class="custom-title">试试用公告传达重要信息</span>
        </template>
      </van-cell>
      <!--首次点击下拉框， 图片资源加载两次-->
      <van-collapse v-model="activeNames" v-for="(item, index) in contentList" :key="index" size="large" :border="collapseBorder">
        <van-collapse-item :title="item.title" :name="item.name">
          <van-grid :gutter="30" :column-num="3" :border="false">
            <van-grid-item :text="detail.text" :url='detail.rightUrl' v-for="(detail, ind) in item.list" :key="ind*100">
              <van-image :src="detail.iconSrc" lazy-load height='60' width='60'>
                <template v-slot:error>加载失败</template>
              </van-image>
              <span class="grid-text">{{detail.text}}</span>
            </van-grid-item>
            <!-- {{detail.icon}} -->
          </van-grid>
        </van-collapse-item>
      </van-collapse>
      <van-button type="primary" block @click="preview">图片预览</van-button>
      <van-image-preview v-model="show" :images="images" @change="onChange">
        <template v-slot:index>第{{ index + 1 }}页</template>
      </van-image-preview>
    </div>
    <van-loading type="spinner" color="#1989fa" v-show="loading" size="50" vertical/>
  </div>
</template>

<script>
import service from '../../services'
import mCall from '@/utils/mCall'
export default {
  data () {
    return {
      loading: true,
      collapseBorder: false,
      activeNames: [],
      contentList: [
        // {
        //   name: 'remote',
        //   title: '远程办公',
        //   list: [
        //     {
        //       text: '日志',
        //       rightUrl: 'http://www.baidu.com',
        //       iconSrc: 'https://img.yzcdn.cn/vant/apple-3.jpg'
        //     },
        //     {
        //       text: '视频会议',
        //       rightUrl: 'http://www.baidu.com',
        //       iconSrc: 'https://img.yzcdn.cn/vant/apple-2.jpg'
        //     },
        //     {
        //       text: '钉钉运动',
        //       rightUrl: 'http://www.baidu.com',
        //       iconSrc: 'https://img.yzcdn.cn/vant/apple-1.jpg'
        //     },
        //     {
        //       text: '钉邮',
        //       rightUrl: 'http://www.baidu.com',
        //       iconSrc: 'https://img.yzcdn.cn/vant/apple-4.jpg'
        //     },
        //     {
        //       text: '钉盘',
        //       rightUrl: 'http://www.baidu.com',
        //       iconSrc: 'https://img.yzcdn.cn/vant/apple-5.jpg'
        //     },
        //     {
        //       text: '电话会议',
        //       rightUrl: 'http://www.baidu.com',
        //       iconSrc: 'https://img.yzcdn.cn/vant/apple-6.jpg'
        //     },
        //     {
        //       text: '电话会议',
        //       rightUrl: 'http://www.baidu.com',
        //       iconSrc: '../../../static/images/telecommuting.jpg'
        //     }
        //   ]
        // },
        // {
        //   name: 'aiHr',
        //   title: '智能人事',
        //   list: [
        //     {
        //       text: '日志',
        //       rightUrl: 'http://www.baidu.com',
        //       iconSrc: 'https://img.yzcdn.cn/vant/apple-3.jpg'
        //     },
        //     {
        //       text: '日志',
        //       rightUrl: 'http://www.baidu.com',
        //       iconSrc: 'https://img.yzcdn.cn/vant/apple-2.jpg'
        //     },
        //     {
        //       text: '钉钉运动',
        //       rightUrl: 'http://www.baidu.com',
        //       iconSrc: 'https://img.yzcdn.cn/vant/apple-1.jpg'
        //     },
        //     {
        //       text: '钉邮',
        //       rightUrl: 'http://www.baidu.com',
        //       iconSrc: 'https://img.yzcdn.cn/vant/apple-4.jpg'
        //     },
        //     {
        //       text: '钉盘',
        //       rightUrl: 'http://www.baidu.com',
        //       iconSrc: 'https://img.yzcdn.cn/vant/apple-5.jpg'
        //     },
        //     {
        //       text: '电话会议',
        //       rightUrl: 'http://www.baidu.com',
        //       iconSrc: 'https://img.yzcdn.cn/vant/apple-6.jpg'
        //     }
        //   ]
        // }
      ],
      show: false,
      index: 0,
      images: [
        // 'https://img.yzcdn.cn/vant/apple-1.jpg',
        // 'https://img.yzcdn.cn/vant/apple-2.jpg',
        // 'https://img.yzcdn.cn/vant/apple-3.jpg',
        // 'https://img.yzcdn.cn/vant/apple-4.jpg',
        // 'https://img.yzcdn.cn/vant/apple-5.jpg',
        // 'https://img.yzcdn.cn/vant/apple-6.jpg',
        // 'https://img.yzcdn.cn/2.jpg',
        // '../../../static/images/telecommuting.jpg'
      ]
    }
  },
  // components: {
  //   Image, Lazyload, Icon, Cell, Tag, Collapse, CollapseItem, Grid, GridItem, Button, Loading
  // },
  mounted () {
  },
  created () {
    this.getWorkDetail()
    this.$store.commit('SET_HEADER',
      { // header相关信息
        showBack: mCall.hasFullScreen(), // 如果是校信环境，并且支持全屏嵌入H5应用，那么就显示返回。
        preventGoBack: true,
        title: '考勤',
        backText: ''
      }
    )
    this.$store.commit('SHOW_BOTTOM', true)
  },
  methods: {
    toMessage () {
      this.$router.push('/message')
    },
    getWorkDetail () {
      // 接口中返回必须数据，对于非必须数据则不传递，避免流量浪费
      service.getWorkDetail().then(res => {
        if (res.code === '1') {
          this.contentList = res.data.contentList
          this.images = res.data.previewImages
        }
        this.loading = false
      }).catch(error => {
        this.loading = false
        console.log(error)
      })
    },
    change () {},
    onChange (index) {
      this.index = index
    },
    preview () {
      this.show = true
    },
    toGuide () {
      // this.$route.replace('/guide')
      this.$router.push({path: '/guide'})
    },
    toNotice () {
      this.$router.push({path: '/guide'})
    }
  }
}
</script>

<style lang="less">
// （使用外部样式文件， 有效利用缓存）， 但是打包后，发现打包到了js文件中，并没有和其他代码分开, 但是可以达到减少请求次数的目的
@import '../../assets/less/variable.less';
@import './apply.less';
</style>
