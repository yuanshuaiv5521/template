<template>
  <div>
    <Table :current-page="params._page" :total="total" :data="users" :columns="columns" @current-change="currentChange"></Table>
  </div>
</template>

<script>
import Table from '@/components/Table'
import { mapState } from 'vuex'

export default {
  components: {
    Table
  },

  data () {
    return {
      
    }
  },

  computed: {
    ...mapState('users', ['users', 'total', 'columns', "params"])
  },

  methods: {
    currentChange (page) {
      console.log(page)
      this.$store.commit('users/setParams', {_page: page})
      this.$store.dispatch('users/getUsers')
    }
  },

  created () {
    this.$store.dispatch('users/getUsers')
  }
}
</script>

<style>

</style>