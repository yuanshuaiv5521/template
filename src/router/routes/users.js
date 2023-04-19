import Layout from '../../layout'
// users的路由
export default {
  path: '/users',
  redirect: '/users/list',
  component: Layout,
  meta: {
    title: '用户管理',
    icon: 'user'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/Users/List'),
      meta: {
        title: '用户列表'
      }
    }, {
      path: 'list1',
      meta: {
        title: '用户列表1'
      }
    }, {
      path: 'list2',
      meta: {
        title: '用户列表2'
      }
    }
    
  ]
}