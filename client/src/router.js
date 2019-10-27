import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: { name: 'about' }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/Signup.vue'),
      meta: { notRequiresAuth: true }
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('./views/Signin.vue'),
      meta: { notRequiresAuth: true }
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const notRequiresAuth = to.matched.some(record => record.meta.notRequiresAuth)

  if (requiresAuth || notRequiresAuth) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        if (requiresAuth) {
          next()
        } else if (notRequiresAuth) {
          next({
            path: '/home'
          })
        }
      } else {
        if (requiresAuth) {
          next({
            path: '/signin',
            query: { redirect: to.fullPath }
          })
        } else if (notRequiresAuth) {
          next()
        }
      }
    })
  } else {
    next()
  }
})

export default router
