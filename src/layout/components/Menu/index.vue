<template>
  <!-- 菜单 -->
  <el-menu
    router
    :collapse="collapse"
    :default-active="$route.path"
    class="el-menu-vertical">
    <template v-for="parentRoute in data">
      <el-submenu 
      v-if="parentRoute.meta && !parentRoute.meta.hidden"
      :key="parentRoute.path"
      :index="parentRoute.path">
      <template slot="title">
        <i 
          :class="'el-icon-' + parentRoute.meta.icon" 
          v-if="parentRoute.meta.icon"></i>
        <span>{{parentRoute.meta.title}}</span>
      </template>
      <template v-if="parentRoute.children">
        <template v-for="childRoute in parentRoute.children" >
          <el-menu-item 
            v-if="childRoute.meta && !childRoute.meta.hidden"
            :key="childRoute.path" 
            :index="parentRoute.path + '/' + childRoute.path">
            <i 
              :class="'el-icon-' + childRoute.meta.icon" 
              v-if="childRoute.meta.icon"></i>
            {{childRoute.meta.title}}
          </el-menu-item>
        </template>
      </template>
    </el-submenu>
    </template>
    
    
    <!-- <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item> -->
  </el-menu>
</template>

<script>
export default {
  props: {
    data: Array,
    collapse: Boolean
  }
}
</script>

<style scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>