import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Home from '@/components/Home'
import VuexHome from '@/components/vuex/Home'
import MemberHome from '@/components/member/Home'
import AdminHome from '@/components/admin/Home'
import Login from '@/components/auth/Login'
import Forbidden from '@/components/auth/Forbidden'
import _ from 'lodash'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/vuex',
      name: 'VuexHome',
      component: VuexHome
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/forbidden',
      name: 'Forbidden',
      component: Forbidden,
    },
    {
      path: '/member',
      name: 'MemberHome',
      component: MemberHome,
      meta: {
        requireAuthenticated: true
      }
    },
    {
      path: '/admin',
      name: 'AdminHome',
      component: AdminHome,
      meta: {
        requireAuthenticated: true,
        requireAuthorized: ['ADMIN']
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Login' && store.getters['auth/isLoggedIn']) {
    // Already logged in: to /member
    next('/member')
  } else {
    if (to.meta.requireAuthenticated && !store.getters['auth/isLoggedIn']) {
      // Not logged in: to /login
      next('/login')
    } else if (to.meta.requireAuthorized && to.meta.requireAuthorized.length > 0) {
      // Check roles
      const userRoles = store.getters['auth/roles']
      const requiredRoles = to.meta.requireAuthorized
      console.log(userRoles)
      console.log(requiredRoles)
      if (_.intersection(requiredRoles, userRoles).length === 0) {
        // Not match: to /forbidden
        next('/forbidden')
      } else {
        next()
      }
    } else {
      next()
    }
  }
})

export default router
