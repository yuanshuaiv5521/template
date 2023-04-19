import axios from 'axios'
import router from '../router'

const _axios = axios.create({
  baseURL: process.env.VUE_APP_BASEURL
})

_axios.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})


_axios.interceptors.response.use(res => {
  return res
}, err => {
  if (err.response.status === 403) {
    router.push('/error/403')
  }

  return Promise.reject(err)
})

export default _axios