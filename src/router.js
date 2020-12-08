import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import EventCreate from './views/EventCreate.vue'
import EventList from './views/EventList.vue'
import EventShow from './views/EventShow.vue'
import NotFound from './views/NotFound.vue'
import NetworkIssue from './views/NetworkIssue.vue'
import LoginUser from './views/LoginUser.vue'
import RegisterUser from './views/RegisterUser.vue'

import NProgress from 'nprogress'
import store from '@/store/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: LoginUser
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterUser
    },
    {
      path: '/list',
      name: 'list',
      component: EventList,
      props: true,
      meta: { requiresAuth: true }
    },
    {
      path: '/event/create',
      name: 'create',
      component: EventCreate,
      meta: { requiresAuth: true }
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: EventShow,
      props: true,
      meta: { requiresAuth: true },
      beforeEnter (routeTo, routeFrom, next) {
        store.dispatch('event/fetchEvent', routeTo.params.id).then(event => {
          routeTo.params.event = event
          next()
        }).catch(error => {
          if (error.resource && error.resource.status === '404') {
            next({ name: '404', params: { resource: 'event' } })
          } else {
            next({ name: 'network-issue' })
          }
        })
      }
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
      props: true
    },
    {
      path: '/network-issue',
      name: 'network-issue',
      component: NetworkIssue
    },
    {
      path: '*',
      redirect: { name: '404', params: { resource: 'page' } }
    }
  ]
})

router.beforeEach((routeTo, routeFrom, next) => {
  const loggedIn = localStorage.getItem('user')
  if (routeTo.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/')
  } else {
    NProgress.start()
    next()
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
