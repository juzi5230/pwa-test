import Vue from 'vue'
const axios = window.axios

// store既当爹又当妈，既用来传递事件也用来作为唯一数据源
export default new Vue({
  data () {
    return {
      mode: null,
      // mode:
      // 0 多选，选择部门和人，不返回部门下的人
      // 1 多选，在0的基础上返回部门下的人
      // 2 单选
      // NOTE：实际获取数据的方式是一样的，关键在于怎么根据模式筛选出需要的混杂式信息
      persons: [], // 实际选中的人
      departments: []
    }
  },
  computed: {
    filtedPersons () {
      let dptIds = new Set()
      this.departments.forEach((dpt) => {
        dptIds.add(dpt.id)
      })
      let persons = JSON.parse(JSON.stringify(this.persons.filter((person) => {
        return !dptIds.has(person.departmentId)
      })))

      let psIds = new Set()
      let result = []
      persons.forEach((ps, index) => {
        if (!psIds.has(ps.id)) {
          result.push(ps)
          psIds.add(ps.id)
        }
      })

      return result
    },
    filtedDepartments () {
      let dptIds = new Set()
      let departments = JSON.parse(JSON.stringify(this.departments))
      let length = departments.length
      departments.sort((a, b) => {
        return a.uid - b.uid
      })
      let result = []
      for (let i = 0; i < length; i++) {
        let dpt = departments[i]
        dptIds.add(dpt.id)
        if (!dptIds.has(dpt.fatherId)) {
          result.push(dpt)
        }
      }
      return result
    }
  },
  methods: {
    setInitData (arr) {
      arr.forEach((item) => {
        if (item.type === 'group') {
          this.$emit('department:setSelected', item.id, true)
        }
        else {
          // 只有非重复id时才能使用
          if (this.persons.findIndex(function (ps) {
            return ps.id === item.id
          }) < 0) {
            this.persons.push(Object.assign({needUpdate: true}, item))
          }
        }
      })
    },
    getRootData () {
      return axios.get('/lexueserver/group/treeAndTeacherCount.do')
    },
    queryPerson (name) {
      return axios.get(' /lexueserver/query/queryteacher.do', {
        params: {
          name
        }
      })
    },
    getDptPersons (id) {
      return axios.get('/lexueserver/query/teachersByNodeId.do', {
        params: {
          nodeId: id
        }
      })
    },
    init (mode) {
      this.mode = mode
      this.filtedDepartments.forEach((dpt) => {
        this.$emit()
      })
    },
    togglePerson (person, isSelected, opt = {}) {
      // 如果是单选就整个替换
      if (this.mode === 2 && isSelected) {
        this.$set(this, 'persons', [person])
      }
      let index = this.persons.findIndex((item) => {
        return (item.id === person.id) && (item.departmentId === person.departmentId || item.needUpdate)
      })
      if ((index > -1) && !isSelected) this.persons.splice(index, 1)
      else if ((index > -1) && isSelected && opt.force) {
        this.persons.splice(index, 1, person)
      }
      else if ((index < 0) && isSelected) this.persons.push(person)
    },
    toggleDepartment (department, isSelected, opt = {}) {
      let uid = opt.uid
      let departments = this.departments
      let index = this.departments.findIndex((dpt) => {
        return dpt.id === department.id
      })
      if (index > -1 && !isSelected) {
        let id = departments[index].id
        departments.splice(index, 1)
        if (!opt.escape) {
          this.$emit('department:setSelected', id, false)
        }
      }
      else if (index < 0 && isSelected) {
        departments.push(Object.assign({}, department, {
          uid: opt.uid
        }))
      }
      this.$set(this, 'departments', departments)
    },
    getResult () {
      // return a promise
      if (this.mode === 0) {
        return Promise.resolve({
          data: [...this.filtedDepartments, ...this.filtedPersons]
        })
      }
      else if (this.mode === 1) {
        let pArr = []
        this.filtedDepartments.forEach((dpt) => {
          pArr.push(axios.get('/lexueserver/query/teachersByNodeId.do', {
            params: {
              nodeId: dpt.id
            }
          }))
        })
        return Promise.all(pArr).then((resList) => {
          resList.forEach((res, index) => {
            this.filtedDepartments[index].members = res.data
          })
          return Promise.resolve({
            data: [...this.filtedDepartments, ...this.filtedPersons]
          })
        })
      }
      else if (this.mode == 2) {
        return Promise.resolve({
          data: [...this.filtedPersons]
        })
      }
      return Promise.resolve({
        data: []
      })
    }
  }
})
