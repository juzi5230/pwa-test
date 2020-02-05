### 常用样式

这里面有一些常用的样式，可以选用。

### .page
在所有的页面采用淡灰色背景，能给用户带来更加舒适的体验。
```css
/*app.vue style*/
.page {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background-color: #f8f8f8;
}
```
