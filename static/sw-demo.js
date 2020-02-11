
/** * *
   如果不指定scope 的话，
   默认情况下service worker控制的作用域为sw-demo.js
   即该文件对应的父级作用域所在的路径下，
   如示例中，如果不加scope， 默认作用域为以static为
   开头的页面所发出的请求
*/
/** *
   指定scope时不能越域， 否则将注册失败，
   但是服务端给service worker的文件
   设置头部信息 service-worker-allowed，
   并给它设置最大的域， 如果注册的时候跨域了，
   但是在service-worker-allowed允许的最大范围内， 注册将会成功
*/
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    // 页面资源加载结束后，调用，避免与其他资源征用带宽，从而导致页面性能下降
    navigator.serviceWorker.register('./static/sw-demo.js', {scope: '/static/'}) // 具体路径根据实际情况，有可能放到ngix中，则写对应的路径
      .then(function (registion) { // 注册成功后，返回promise 对象 login was successful ， Return promise object
        console.log('register')
        // console.log(registion)
      })
      .catch(function (err) { // 注册失败 login has failed
        console.log(err)
      })
  })
}
