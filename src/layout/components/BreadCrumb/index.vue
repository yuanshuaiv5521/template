<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item
      v-for="route in routes" 
      :key="route.path"
      :to="{ path: route.path }">{{route.meta && route.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  // this.$route.matched

  computed: {
    routes () {
      return this.$route.matched
    }
  },

  created () {
    console.log(this.routes)
  }
}
</script>

<style>

</style>