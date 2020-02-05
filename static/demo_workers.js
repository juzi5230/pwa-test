
var i = 0
function timedCount () {
  i = i + 1
  let s = new Date()
  i = s.getHours() + ' : ' + String(s.getMinutes()).padStart(2, '0') + ' : ' + String(s.getSeconds()).padStart(2, '0')
  postMessage(i)
  // eslint-disable-next-line no-implied-eval
  setTimeout('timedCount()', 1000)
}
timedCount()
