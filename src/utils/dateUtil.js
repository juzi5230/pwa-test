export default {
  /**
   *时间戳转换为时间
   *
   * @param {number} timestamp 时间戳 291913132191
   * @param {string} format 格式 YYYY-MM-DD hh-mm-ss
   * @returns
   */
  timestampFormat (timestamp, format = 'YYYY-MM-DD hh-mm-ss') {
    let stamp = Number(timestamp)
    if (Number.isNaN(stamp)) {
      return stamp
    } else {
      if (stamp.toString().length === 10) { // 10位时间戳,表示后端返回的时间戳。
        stamp = stamp * 1000
      }
      let date = new Date(stamp)
      let regs = [{
        reg: /Y+/,
        fn: function ($1) {
          let year = date.getFullYear().toString()
          if ($1 === 'YYYY') {
            return year
          } else {
            return year.substring(year.length - $1.length, year.length)
          }
        }
      }, {
        reg: /MM/,
        fn: function () {
          let t = date.getMonth() + 1
          return fixNumber(t)
        }
      }, {
        reg: /DD/,
        fn: function () {
          let t = date.getDate()
          return fixNumber(t)
        }
      }, {
        reg: /hh/,
        fn: function () {
          let t = date.getHours()
          return fixNumber(t)
        }
      }, {
        reg: /mm/,
        fn: function () {
          let t = date.getMinutes()
          return fixNumber(t)
        }
      }, {
        reg: /ss/,
        fn: function () {
          let t = date.getSeconds()
          return fixNumber(t)
        }
      }]
      regs.map((r) => {
        format = format.replace(r.reg, r.fn)
      })
    }
    return format
  },
  getWeek (timestamp) {
    let day = ['日', '一', '二', '三', '四', '五', '六']
    let stamp = Number(timestamp)
    if (Number.isNaN(stamp)) {
      return stamp
    } else {
      if (stamp.toString().length === 10) { // 10位时间戳,表示后端返回的时间戳。
        stamp = stamp * 1000
      }
      let date = new Date(stamp)
      return '星期' + day[date.getDay()]
    }
  }
}

function fixNumber (number) {
  if (number < 10) {
    number = '0' + number
  } else {
    number = number.toString()
  }
  return number
}
