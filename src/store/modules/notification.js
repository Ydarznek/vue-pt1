export const namespaced = true
export const state = {
  notifications: []
}

let nextId = 1

export const mutations = {
  PUSH (state, notification) {
    state.notifications.push({ ...notification, id: nextId++ })
  },
  DELETE (state, notificationToRemove) {
    state.notifications.filter(n => n.id !== notificationToRemove.id)
  }
}

export const actions = {
  add ({ commit }, motification) {
    commit('PUSH', motification)
  },
  remove ({ commit }, motificationToRemove) {
    commit('DELETE', motificationToRemove)
  }
}
