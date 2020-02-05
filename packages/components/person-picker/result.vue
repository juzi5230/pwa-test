<template lang="html">
  <div>
    <span v-for="item in departments" class="item-cell" @click="deleteDepartment(item)">
      <span class="name">{{ item.text }}</span>
      <icon type="clear"></icon>
    </span>
    <span v-for="item in persons" class="item-cell" @click="deletePerson(item)">
      <span class="name">{{ item.name }}</span>
      <icon type="clear"></icon>
    </span>
  </div>
</template>

<script>
import store from './store'
import Icon from '../icon'
export default {
  components: {
    Icon
  },
  computed: {
    departments () {
      return store.filtedDepartments
    },
    persons () {
      return store.filtedPersons
    }
  },
  methods: {
    deletePerson (data) {
      store.togglePerson(data, false)
    },
    deleteDepartment (data) {
      store.toggleDepartment(data, false)
    }
  }
}
</script>

<style lang="css">
</style>
