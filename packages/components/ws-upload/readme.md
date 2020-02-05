# websocket上传控件

> 使用websocket实现的文件上传控件。实现了文件的秒传等功能。

### ws-upload-sdk

> 要想完全自定义外观和操作。可以直接使用ws-upload-sdk。

`npm install ws-upload-sdk --save`

```js
import wsUpload from 'ws-upload-sdk'

var uploader = new wsUpload({
  wsUrl: 'ws://10.4.80.30:2426/websocket',
  files: files, // 本地选择的文件对象。
  wsOption: {
    md5: true, // 启用md5秒传功能（默认启用）。
    blob: 1024 * 127, // 每次提交的buffer流.注意：由于chrome websocket单次传输数据超过128K会丢失，建议使用默认127K。（默认127 * 1024）
    queued: 2, //同时上传的文件数（默认同时上传2个
    maxMd5Size: 1024 * 1024 * 100 // 最大计算MD5文件大小，由于太大的文件计算MD5值的时候会超过浏览器内存上限，所以过大的文件直接上传。（默认100M）
  }
})
uploader.on('progress', (file, files) => {
  console.log(arguments)
  this.files = files
})
uploader.upload() // 开始上传
```

#### event

<table>
  <tr>
    <th>名称</th><th>回调参数</th><th>参数描述</th><th>事件描述</th>
  </tr>
  <tr>
    <td>start</td><td>files</td><td>要上传的所有文件对象</td><td>开始上传</td>
  </tr>
  <tr>
    <td rowspan="2">uploaded</th><td>file</td><td>上传完成的文件</td><td rowspan="2">文件上传完成</td>
  </tr>
  <tr>
    <td>cystorage</td><td>服务器返回的上传结果</td>
  </tr>
  <tr>
    <td>allUploaded</td><td>files</td><td>文件对象数组</td><td>所有文件上传完成</td>
  </tr>
  <tr>
    <td rowspan="2">progress</th><td>file</th><td>正在上传的文件</th><td rowspan="2">文件上传中</td>
  </tr>
  <tr>
    <td>files</th><td>文件对象数组</td>
  </tr>
  <tr>
    <td rowspan="2">error</td><td>file</td><td>文件对象</td><td rowspan="2">上传失败</td>
  </tr>
  <tr>
    <td>msg</td><td>失败信息</td>
  </tr>
  <tr>
    <td>md5Start</td><td>file</td><td>文件对象</td><td>开始计算文件的md5值</td>
  </tr>
  <tr>
    <td>md5End</td><td>file</td><td>文件对象</td><td>文件MD5值计算完毕</td>
  </tr>
  <tr>
    <td>pause</td><td>file</td><td>文件对象</td><td>文件暂停上传</td>
  </tr>
  <tr>
    <td>cancel</td><td>file</td><td>文件对象</td><td>取消文件上传</td>
  </tr>
</table>

#### method

|name|arguments|description|
|----|---------|-----------|
|upload||开始上传|
|cancel|file（文件对象） or fileIndex（文件在文件对象数组中的序号）|取消上传|
|pause|file or fileIndex|暂停上传|
|continue|file or fileIndex|继续上传|

#### file对象

监听事件返回的file对象属性

|name|type|desc|
|----|----|----|
|progress|number|上传进度|
|index|number|文件对象序号|
|size|number|文件大小|
|status|number|文件状态（-1表示暂停上传， -2表示取消上传， -3表示上传失败，1表示待上传，2表示上传中， 3表示上传成功）|
|f|file|文件的具体内容，也就是浏览器返回的文件原生对象|

### 直接引用的方式使用ws-upload-sdk

```html
<script type="text/javascript" src="ws-upload-sdk.js"></script></body>
<script>
  document.getElementById('demoupload').addEventListener('change', function (e) {
    var files = e.target.files
    var upload = new wsUpload({
      wsUrl: 'ws://10.4.80.30:2426/websocket',
      files: files,
      wsOption: {
        md5: true
      }
    })
  })
</script>
```

### ws-upload

> H5专用，websocket图片上传预览控件

### 怎么使用css实现完全自定义的文件选择按钮？

```html
<div class="upload-wrapper">
  <div class="my-upload">这里就是按钮</div>
  <input type="file" @change="change" ref="file" accept="image/*" multiple>
</div>
```

```css
/*包裹按钮元素*/
.upload-wrapper {
  position: relative;
  width: 40px;
  height: 40px;
  overflow: hidden;
  margin:0 60px;
}
/*使file透明*/
.upload-wrapper input[type="file"] {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0;
  height: 100%;
  width: 100%;
  font-size: 10000px;
  cursor: pointer;
}
```
