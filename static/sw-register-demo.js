this.addEventListener('install', function(event) {
  event.waitUntil( // 控制以下代码的流程，只有以下代码resolve了，安装过程才能结束
    // 安装过程中开辟一个跟service worker所对应的缓存区域， 并命名为my-cache-v1
    caches.open('my-cache-v1').then(function(cache) { // 获取到缓存区域， 并命名为cache
        // 调用catch.addAll 方法来缓存我们指定的文件列表
        // addAll 是一个原始操作，如果所有指定的资源都缓存成功，则安装成功，否则安装失败
        // 如果预缓存的文件列表过长就会增加失败的几率
        return cache.addAll([
            '/',
            '/test.js',
            '/test.css'
        ])
    
      })
  )

})

// activate 触发， 表示该service worker即将获得它所注册的作用域的控制权
this.addEventListener('activate', function(event) {
    event.waitUntil( // 控制激活的过程
        Promise.all([
            /***
             * 使得激活的service worker获得页面的完全控制权，
             *  如果不使用这行代码，需要重新加载页面，才能使
             * service worker真正获得完全的控制，本行代码
             * 就是跳过刷新页面这个步骤， 使得service worker真正获得页面的控制权
             */
            this.clients.claim(),
            caches.keys().then(function(cacheList) {
                console.log('000')
                console.log(cacheList)
              return Promise.all(
                  cacheList.map(function(cacheName) {
                      if(cacheName !== 'my-cache-v1') {
                          return caches.delete(cacheName)
                      }
                  })
              )
            })
        ])
    )
})