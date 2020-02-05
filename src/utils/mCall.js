/**
 * 校信提供的统一的方法
 */

let mCall = window.mCall
let hasMCall = !!mCall

export default {
  /**
   * 判断是否支持mCall校信方法
   */
  hasMCall () {
    return hasMCall
  },
  /**
   * 监听物理键盘返回按钮, 并阻止返回，只能监听一个
   * @param {function} fn - 回调函数
   */
  setLeftButtonListener (fn) {
    if (!hasMCall || !mCall.setLeftButtonListener) {
      return false
    }
    window.mCallback_setLeftButton = fn
    mCall.setLeftButtonListener('window.mCallback_setLeftButton()')
    return true
  },
  /**
   * 取消控制物理键返回
   */
  cancelLeftButtonListener () {
    if (!hasMCall || !mCall.setLeftButtonListener) {
      return false
    }
    mCall.setLeftButtonListener('')
    return true
  },
  /**
   * 获取校信版本
   */
  getDaviceVersion () {
    if (!hasMCall || !mCall.getVersion) {
      return '0.0.0'
    }
    return mCall.getVersion()
  },
  /**
   * 校信4.6.0开始支持H5应用全屏显示。也就是自定义导航条。
   */
  hasFullScreen () {
    // return true
    let version = this.getDaviceVersion()
    return this.compareVersion(version, '4.6.0') > -1
  },
  /**
   * 比较校信版本
   * @param {string} a version a
   * @param {string} b version b
   * @returns {number} 0 表示相等，1表示a > b, -1表示 a < b
   */
  compareVersion (a, b) {
    let versionA = a.split('.')
    let versionB = b.split('.')
    for (let i = 0; i < versionA.length; i++) {
      let n1 = Number(versionA[i]) || 0
      let n2 = Number(versionB[i]) || 0
      if (n1 - n2 !== 0) {
        return (n1 - n2) > 0 ? 1 : -1
      }
    }
    return 0
  },
  /**
   * 获取设备ID，每个设备唯一。
   */
  getDaviceId () {
    if (!hasMCall || !mCall.getDeviceId) {
      return false
    }
    return mCall.getDeviceId()
  },
  /**
   * 关闭H5应用，返回校信
   */
  closeH5 () {
    if (!hasMCall) {
      window.history.back(-(window.history.length - 1))
    }
    mCall.close()
  },
  /**
   * 查看图片,使用原生的方式查看图片
   * @example
   * viewImage([http://example.com/a.png, http://example.com/b.png])
   */
  viewImage (images) {
    if (!hasMCall || !mCall.onImageShow) {
      return false
    }
    mCall.onImageShow(images)
    return true
  },
  /**
   * 预览附件
   * @param {string} src 文件路径，注意，文件路径不要有中文和控件
   * @param {string} filename 可选，文件名称
   * @param {string} type 可选，文件类型 doc, pdf
   * @param {number} size 可选，文件大小 12312
   */
  viewFile (src, filename, type, size) {
    if (!hasMCall || !mCall.filePreview) {
      return false
    }
    mCall.filePreview(src, filename, type, size)
  },
  /**
   * 设置导航条右上角文字
   * @param {string} text 文字
   * @param {function} fn 回调函数
   */
  showRightButton (text, fn) {
    if (!hasMCall || !mCall.showShareButton || !mCall.setRightButtonText || !mCall.setRightButtonListener) {
      return false
    }
    mCall.showShareButton(true)
    mCall.setRightButtonText(text)
    window.showRightButtonCallBack = fn
    mCall.setRightButtonListener('showRightButtonCallBack()')
    return true
  },
  /**
   * 打开扫码界面,获取扫码回调
   * @param {function} fn
   */
  scanCode (fn) {
    // todo: 微信调用微信SDK
    if (!hasMCall || !mCall.scanCode) {
      return false
    }
    mCall.scanCode()
    window.scanHandle = fn
    return true
  },
  /**
   * 支付
   * @param {number} type 支付类型，1表示微信支付，2表示支付宝付钱
   * @param {number} count 支付的数额, 带小数点
   * @param {string} tradeNo 交易ID
   * @param {string} name 交易商品名称
   * @param {string} desc 交易商品描述
   */
  pay (type, count, tradeNo, name, desc) {
    if (!hasMCall || !mCall.wxPay || !mCall.wxPay) {
      return false
    }
    if (type === 1) {
      mCall.wxPay(count, tradeNo, name, desc)
    } else if (type === 2) {
      mCall.wxPay(count, tradeNo, name, desc)
    }
    return true
  }
  // 下面是校信4.7.0的功能
  // 1) 录音
  // 2) 前置摄像头
  // 3) 校信内部分享
  // 4) 校信内部聊天
  // 5) 通讯录
  // 6）监听键盘弹出和关闭
}
