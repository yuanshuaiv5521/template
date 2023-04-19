<template>
  <div class="cache-routes">
    <el-tabs  
      @tab-click="navagate"
      @tab-remove="remove"
      :value="$route.path"
      type="card">
      <el-tab-pane
        v-for="(route, index) in data"
        :closable="index !== 0"
        :key="route.path"
        :label="route.title" 
        :name="route.path"></el-tab-pane>
    </el-tabs>
  </div>
  
</template>

<script>
export default {
  props: {
    // [{title, path}, {title, path}]
    data: Array
  },

  methods: {
    navagate (tab) {
      // 自行打印tab 查看name属性是否是path
      this.$router.push(tab.name)
    },
    remove (name) {
      this.$emit('tab-remove', name)
    }
  }
}
</script>

<style scoped>
.cache-routes {
  padding: 0 15px;
}


</style>