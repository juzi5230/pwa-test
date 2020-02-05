
var i = 0
function timedCount () {
  i = i + 1
  let s = new Date()
  i = s.getHours() + ' : ' + s.getMinutes() + ' : ' + s.getSeconds()
  postMessage(i)
  // eslint-disable-next-line no-implied-eval
  setTimeout('timedCount()', 1000)
}
timedCount()
