import commonPromise from './commonPromise'

export default {
  getStatistics () {
    return commonPromise('leave/statistics')
  },
  getDepartAttendance () {
    return commonPromise('leave/depart')
  },
  getWorkDetail () {
    return commonPromise('/work')
  },
  getTodoList (data) {
    return commonPromise('/todoList', data)
  }
}
