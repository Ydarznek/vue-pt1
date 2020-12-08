import axios from 'axios'
import NProgress from 'nprogress'
import store from './../store/store.js'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

apiClient.interceptors.request.use(config => {
  const user = store.state.user.user
  if (user) {
    const token = user.token
    config.headers.Authorization = `Bearer ${token}`

    NProgress.start()
    return config
  }
})

apiClient.interceptors.response.use(response => {
  NProgress.done()
  return response
})

export default {
  getEvents (perPage, page) {
    return apiClient.get(`/events?limit=${perPage}&page=${page}`)
  },
  getEvent (id) {
    return apiClient.get(`/events/${id}`)
  },
  postEvent (event) {
    return apiClient.post('/events', event)
  }
}
