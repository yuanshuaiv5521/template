import axios from '@/utils/server'

// 获取所有的用户
export const GET_USERS = params => axios.get('/users', {
  params: {
    _sort: 'DESC',
    _order: 'id',
    ...params
  }
})