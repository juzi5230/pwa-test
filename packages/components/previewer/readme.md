### previewer

> 图片预览组件，支持缩略图预览，点击查看全图。而且还可以在查看全图的时候使用手势放大图片。

### Props

|name|type|description|
|----|----|-----------|
|list|Array|图片列表|
|options|Object|[photoswipe](https://github.com/dimsemenov/photoswipe)的设置|

list的数据示例如图：
```javascript
[{
  src: 'https://placekitten.com/800/400',
  w: 600,
  h: 400
},
{
  src: 'https://placekitten.com/1200/900',
  w: 1200,
  h: 900
}]
```

显示特定index的图片，使用ref:

this.$refs.previewer.show(index)
