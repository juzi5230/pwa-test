### Article

文字视图显示大段文字，这些文字通常是页面上的主体内容。Article支持分段、多层标题、引用、内嵌图片、有/无序列表等富文本样式，并可响应用户的选择操作。

在微信客户端webview中使用Article，必须保证文字有足够的可读性和可辨识性、使用规范字体、保证足够的段间距、段首无缩进。

### 使用方法

```vue

<template>
  <div class="page">
    <div class="page__hd">
      <h1 class="page__title">Article</h1>
      <p class="page__desc">文章</p>
    </div>
    <x-article>
      <h1>大标题1</h1>
      <section>
        <h2 class="title">章标题</h2>
        <section>
          <h3>1.1 节标题</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <p>
              <img src="https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg" alt="">
              <img src="https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg" alt="">
          </p>
        </section>
        <section>
          <h3>1.2 节标题</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
      </section>
    </x-article>
  </div>
</template>
<script>
import {XArticle} from 'maroon'
export default {
  components: {
    XArticle
  }
}
</script>
<style scoped>
  .page__title {
      text-align: left;
      font-size: 20px;
      font-weight: 400;
  }
  .page__desc {
    margin-top: 5px;
    color: #888;
    text-align: left;
    font-size: 14px;
  }
  .page {
    background: #fff;
    padding: 0 10px;
  }
  .page__hd {
    padding: 40px;
  }
</style>

```

### 说明。
这个组件是只调用了`weui_article.less`
