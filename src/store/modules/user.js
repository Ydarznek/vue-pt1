import UserService from '@/services/UserService.js'

export const namespaced = true

export const state = {
  user: null,
  isNewUser: true
}

export const mutations = {
  SET_USER_DATA (state, userData) {
    state.user = userData
    localStorage.setItem('user', JSON.stringify(userData))
  },
  CLEAR_USER_DATA () {
    localStorage.removeItem('user')
    location.reload()
  }
}

export const actions = {
  register ({ commit, dispatch }, credentials) {
    return UserService.register(credentials).then((res) => {
      commit('SET_USER_DATA', res.data)

      const notification = {
        type: 'success',
        message: 'Register finished!'
      }
      dispatch('notification/add', notification, { root: true })
    }).catch(error => {
      const notification = {
        type: 'error',
        message: 'There was a problem with registration: ' + error.message
      }
      dispatch('notification/add', notification, { root: true })
      throw error
    })
  },
  enter ({ commit }, data) {
    commit('SET_USER_DATA', data)
  },
  login ({ commit }, credentials) {
    return UserService.login(credentials)
      .then(({ data }) => {
        commit('SET_USER_DATA', data)
      })
  },
  logout ({ commit }) {
    commit('CLEAR_USER_DATA')
  }
}

export const getters = {
  loggedIn (state) {
    return !!state.user
  }
}
