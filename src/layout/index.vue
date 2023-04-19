<template>
  <el-container class="main">
    <el-aside width="auto">
      <Menu :data="routes" :collapse="isCollapse"></Menu>
    </el-aside>
    <el-container class="panel">
      <el-header class="header">
        <div class="header-left">
          <ToggleCollapse @toggle-collapse="toggle" :collapse="isCollapse"></ToggleCollapse>
          <BreadCrumb></BreadCrumb>
        </div>
      </el-header>
      <CacheRoutes :data="cacheRoutes" @tab-remove="remove"></CacheRoutes>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapState } from "vuex";

import Menu from './components/Menu'
import CacheRoutes from './components/CacheRoutes'
import ToggleCollapse from './components/ToggleCollapse'
import BreadCrumb from './components/BreadCrumb'

export default {
  components: {
    Menu,
    CacheRoutes,
    ToggleCollapse,
    BreadCrumb
  },

  watch: {
    '$route': {
      // 路由访问后立马触发函数
      immediate: true,
      handler (to, from) {
        // console.log(to)
        if (to.meta.title) {
          const route = {
            title: to.meta.title,
            path: to.path
          }

          // 把route放在vuex layout模块里
          this.$store.dispatch('layout/getRouteForCacheRoutes', route)
        }
        
      }
    }
  },

  computed: {
    // 如果要是用模块中的数据，则使用mapState('模块名', ['state属性名'])
    ...mapState('layout', ['routes', 'cacheRoutes', 'isCollapse'])
    /* routes () {
      return this.$store.state.menu.routes
    } */
  },

  methods: {
    remove (name) {
      const index = this.cacheRoutes.findIndex(route => route.path === name)

      /* 
        dispatch返回的是一个promise对象，如果action有异步操作，则需要将异步操作得到的promise return
      
      */

      this.$store.dispatch('layout/getCacheRoutePath', name).then(() => {
        // 判断当前激活的路由是否和name一致
        if (this.$route.path === name) {
          // 如果一样则跳转到前一个路由
          const path = this.cacheRoutes[index - 1].path
          this.$router.push(path)
        }
      })
    },

    toggle () {
      this.$store.commit('layout/toggleCollapse')
    }
  }
}
</script>

<style>
.main {
  height: 100%;
}

.panel {
  background: #f5f7f9;
}

.header {
  background: #fff;
  margin-bottom: 15px;
  padding-left: 0 !important;
}

.header-left {
  display: flex;
  align-items: center;
}

.control {
  height: 60px;
  line-height: 60px;
  text-align: center;
  width: 46px;
  padding: 0 12px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all .2s ease-in-out;
}

.control:hover {
  background: #f8f8f9;
}
</style>