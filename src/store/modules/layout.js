import { routes } from '@/router'

/* 
  删除tab
    删除tab要获取到对应的name
      @tab-remove
    通过name找到index
      dispatch(getCacheRoutePath)
      利用findIndex找到index
    利用index去删除对应的CacheRoutes
      commit(removeCacheRouteByIndex)
*/


export default {
  state: {
    routes,
    cacheRoutes: JSON.parse(localStorage.getItem('CacheRoutes')) || [],
    isCollapse: false
  },

  mutations: {
    addRouteToCacheRoutes (state, route) {
      // 既然传过来了就一定是cacheRoutes中不存在的
      state.cacheRoutes.push(route)
    },

    removeCacheRouteByIndex (state, index) {
      state.cacheRoutes.splice(index, 1)
      // 删除后，重新添加到localStorage中
      localStorage.setItem('CacheRoutes', JSON.stringify(state.cacheRoutes))
    },

    toggleCollapse (state) {
      state.isCollapse = !state.isCollapse
    }
  },

  actions: {
    getRouteForCacheRoutes ({commit, state}, route) {
      // 接收到组件中传递过来的route时，去state.cacheRoutes中判断是否已经存在，如果存在，则不执行任何操作，如果不存在，则将route添加到这个数据中
      if (!state.cacheRoutes.some(r => r.path === route.path)) {
        commit('addRouteToCacheRoutes', route)
        // 保存到loacalStorage
        localStorage.setItem('CacheRoutes', JSON.stringify(state.cacheRoutes))
      }
    },

    getCacheRoutePath ({commit, state}, path) {
      // 处理数据 根据传递过来的path找到对应的数据并且删除
      const index = state.cacheRoutes.findIndex(route => route.path === path)
      // state.cacheRoutes.filter(route => route.path !== path)
      commit('removeCacheRouteByIndex', index)
    }
  }
}