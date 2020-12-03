import axios from 'axios'

const apiClien = axios.create({
  baseURL: 'https://api.mocki.io/v1/49255df6',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'pplication/json'
  }
})

export default {
  getEvents () {
    return apiClien.get('/events')
  },

  getEvent (id) {
    return apiClien.get(`/events/${id}`)
  }
}
