import Vue from 'vue'
import Router from 'vue-router'
import EventList from './views/EventList.vue'
import EventShow from './views/EventShow.vue'
import EventCreate from './views/EventCreate.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'list',
      component: EventList
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: EventShow,
      props: true
    },
    {
      path: '/create',
      name: 'create',
      component: EventCreate
    }
  ]
})