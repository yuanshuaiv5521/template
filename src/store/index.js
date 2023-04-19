import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 动态引入模块
const files = require.context('./modules', false, /\.js$/)

const modules = {}

files.keys().forEach(key => {
  // files(key).default
  // key就是我们的文件名 ./xxx.js 我们要获取xxx
  const fileName = key.slice(2, -3)
  modules[fileName] = {
    namespaced: true,
    ...files(key).default
  }
})


export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    // key: {}
    ...modules
  }
})
