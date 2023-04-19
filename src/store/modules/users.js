import { GET_USERS } from "../../api/users"

export default {
  state: {
    users: [],

    total: 0,

    params: {
      _page: 5,
      _limit: 10
    },

    columns: [
      {
        key: 'username',
        title: '用户名'
      }, {
        key: 'status',
        title: '状态'
      }
    ]
  },

  mutations: {
    setUsers (state, users) {
      state.users = users
    },

    setTotal (state, total) {
      state.total = total
    },

    setParams (state, params) {
      state.params = {
        ...state.params,
        ...params
      }
    }
  },

  actions: {
    getUsers ({commit, state}) {
      GET_USERS(state.params).then(res => {
        const total = +res.headers['x-total-count']
        const users = res.data

        // 把这两个值提交给mutation用来修改state
        commit('setUsers', users)
        commit('setTotal', total)
      })
    }
  }
}