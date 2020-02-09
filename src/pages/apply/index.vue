<template>
  <div class="page-apply">
    <div class="white-block">
      <div class="flex-row">
        <div>乐之行智慧校园</div>
        <van-icon name="chat-o" info="99+" />
      </div>
    </div>
    <div class="telecommuting-wrap">
      <!--图片懒加载-->
      <van-image
        fit="fill"
        height="200"
        lazy-load
        src="../../../static/images/telecommuting.jpg"
      />
      <div class="tele-title" @click="toGuide">远程办公指南 >></div>
    </div>
    <van-cell value="更多" is-link @click="toNotice">
      <!-- 使用 title 插槽来自定义标题 -->
      <template slot="title">
        <van-tag type="danger">公告</van-tag>
        <span class="custom-title">重要信息传达不到位？ 试试用公告</span>
      </template>
    </van-cell>
    <van-collapse v-model="activeNames" v-for="(item, index) in contentList" :key="index" size="large" :border="collapseBorder">
      <van-collapse-item :title="item.title" :name="item.name">
        <van-grid :gutter="30" :column-num="3" :border="false">
          <van-grid-item :text="detail.text" :url='detail.rightUrl' v-for="(detail, ind) in item.list" :key="ind*100">
            <van-image :src="detail.iconSrc" lazy-load height='60' width='60'/>
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
</template>

<script>
export default {
  data () {
    return {
      collapseBorder: false,
      activeNames: [],
      contentList: [
        {
          name: 'remote',
          title: '远程办公',
          list: [
            {
              text: '日志',
              rightUrl: 'http://www.baidu.com',
              iconSrc: 'https://img.yzcdn.cn/vant/apple-3.jpg'
            },
            {
              text: '视频会议',
              rightUrl: 'http://www.baidu.com',
              iconSrc: 'https://img.yzcdn.cn/vant/apple-2.jpg'
            },
            {
              text: '钉钉运动',
              rightUrl: 'http://www.baidu.com',
              iconSrc: 'https://img.yzcdn.cn/vant/apple-1.jpg'
            },
            {
              text: '钉邮',
              rightUrl: 'http://www.baidu.com',
              iconSrc: 'https://img.yzcdn.cn/vant/apple-4.jpg'
            },
            {
              text: '钉盘',
              rightUrl: 'http://www.baidu.com',
              iconSrc: 'https://img.yzcdn.cn/vant/apple-5.jpg'
            },
            {
              text: '电话会议',
              rightUrl: 'http://www.baidu.com',
              iconSrc: 'https://img.yzcdn.cn/vant/apple-6.jpg'
            }
          ]
        },
        {
          name: 'aiHr',
          title: '智能人事',
          list: [
            {
              text: '日志',
              rightUrl: 'http://www.baidu.com',
              iconSrc: 'https://img.yzcdn.cn/vant/apple-3.jpg'
            },
            {
              text: '日志',
              rightUrl: 'http://www.baidu.com',
              iconSrc: 'https://img.yzcdn.cn/vant/apple-2.jpg'
            },
            {
              text: '钉钉运动',
              rightUrl: 'http://www.baidu.com',
              iconSrc: 'https://img.yzcdn.cn/vant/apple-1.jpg'
            },
            {
              text: '钉邮',
              rightUrl: 'http://www.baidu.com',
              iconSrc: 'https://img.yzcdn.cn/vant/apple-4.jpg'
            },
            {
              text: '钉盘',
              rightUrl: 'http://www.baidu.com',
              iconSrc: 'https://img.yzcdn.cn/vant/apple-5.jpg'
            },
            {
              text: '电话会议',
              rightUrl: 'http://www.baidu.com',
              iconSrc: 'https://img.yzcdn.cn/vant/apple-6.jpg'
            }
          ]
        }
      ],
      show: false,
      index: 0,
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-3.jpg',
        'https://img.yzcdn.cn/vant/apple-4.jpg',
        'https://img.yzcdn.cn/vant/apple-5.jpg',
        'https://img.yzcdn.cn/vant/apple-6.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    }
  },
  methods: {
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
@import '../../assets/less/variable.less';
@import './apply.less';
</style>
<style scoped>
.page-apply /deep/ .van-cell {
  line-height: 50px;
}
.page-apply /deep/ .van-cell__title {
  font-size: 23px;
}
.page-apply /deep/ .custom-title {
  color: lightgrey;
}
</style>
