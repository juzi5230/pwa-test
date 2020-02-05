import Vue from 'vue'
import axios from 'axios'

// eventBus既当爹又当妈，既用来传递事件也用来作为唯一数据源，感觉这样有点像简版vuex啊
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
      departments: [] // 实际选中的部门
    }
  },
  computed: {
    filteredPersons () {
      let ids = this.departments.map(item => item.id)
      // 选中的部门之外还选中的人
      let result = this.persons.slice(0).filter((person) => {
        let isDepartmentSelected = ids.some(function (id) {
          return id === person.departmentId
        })
        return !isDepartmentSelected
      })
      return result.map((item) => {
        return {
          id: item.id,
          userid: item.userid,
          name: item.name,
          type: 'member'
        }
      })
    },
    filteredDepartments () {
      // 排除了子部门的最上层部门
      let departments = JSON.parse(JSON.stringify(this.departments)).sort((a, b) => {
        return a.uid - b.uid
      })
      let ids = departments.map(item => item.id)

      let result = []
      for (let i = departments.length - 1; i >=0; i--) {
        let department = departments[i]
        let index = -1
        let isParentSelected = ids.some(function (id, idx) {
          let result = id === department.parentId
          if (result) index = idx
          return result
        })
        if (index > -1) {
          departments[index].members = [...departments[index].members, ...department.members].map((item) => {
            return {
              id: item.id,
              userid: item.userid,
              name: item.name,
              type: 'member'
            }
          })
        }
        if (isParentSelected) continue
        result.unshift(department)
      }

      return result.map((item) => {
        let data = {
          id: item.id,
          text: item.text,
          groupType: item.type,
          type: 'group'
        }
        if (this.mode === 1) {
          Object.assign(data, {
            members: item.members
          })
        }
        return data
      })
    }
  },
  methods: {
    setMode (mode) {
      this.mode = mode
    },
    clear () {
      this.persons = []
      this.departments = []
    },
    affectResult (type, isSelected, data = {}) {
      switch (type) {
        case 'person':
          if (this.mode === 2) {
            this.clear()
          }
          this.dealPerson(data, isSelected)
          break
        case 'department':
          if (this.mode === 2) return
          let staff = data.members || []
          for (let person of staff) {
            this.dealPerson(person, isSelected)
          }
          this.dealDepartment(data, isSelected)
          this.$emit('departmentUpdatePersons', data.id, false)
          // this.departments.forEach((department) => {
          //   this.$emit('departmentUpdatePersons', data.id, false)
          // })
          break
        default:

      }
    },
    dealPerson (person, isSelected) {
      // 先判断是否已有，避免重复
      let index = getIndexOf(this.persons, person, 'id')
      if (index > -1 && !isSelected) {
        this.persons.splice(index, 1)
      }
      else if (index > -1 && !this.persons[index].departmentId) {
        this.persons.splice(index, 1, person)
      }
      else if (index === -1 && isSelected) {
        this.persons.push(person)
      }
    },
    dealDepartment (department, isSelected) {
      let index = getIndexOf(this.departments, department, 'id')
      if (index > -1 && !isSelected) {
        this.departments.splice(index, 1)
      }
      else if ((index === -1) && isSelected) {
        this.departments.push(department)
      }
    },
    setResult (result) {
      let persons = []
      let departments = []
      result.forEach((item) => {
        if (item.type === 'member') {
          persons.push(item)
        }
        else if (item.type === 'group') {
          departments.push(item)
        }
      })
      this.persons = persons
      departments.forEach((department) => {
        this.$emit('departmentUpdatePersons', department.id, true)
      })
    }
  }
})

function getIndexOf (arr, item, key) {
  let index = -1
  for (let i = 0, length = arr.length; i < length; i++) {
    if (arr[i][key] === item[key]) {
      index = i
      break
    }
  }
  return index
}
