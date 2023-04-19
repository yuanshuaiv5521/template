import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

import Layout from '@/layout'

const files = require.context('./routes', false, /\.js$/)
const _routes = []
files.keys().forEach(key => {
  _routes.push(files(key).default)
})

// 导出routes 为了渲染菜单
export const routes = [
  {
    path: '/',
    redirect: '/users'
  },

  ..._routes,


  // 路由在前面的优先级更高，在后面的优先级更低
  {
    path: '/error',
    component: Layout,
    children: [
      // 404
      {
        path: '404',
        component: () => import("@/views/Error/404.vue")
      }, {
        path: '403',
        component: () => import('@/views/Error/403.vue')
      }
    ]
  }, 
  {
    path: '*',
    redirect: '/error/404'
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // 开始跳转显示进度条
  NProgress.start()

  next()
})


router.afterEach((to, from) => {
  // 跳转结束，隐藏进度条
  NProgress.done()
  const title = to.meta.title ? to.meta.title + ' - xxxx管理系统' : 'xxxx管理系统' 
  document.title = title
})

export default router
