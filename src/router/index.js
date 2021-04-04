import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/statistics',
    name: 'Statisticss',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "statistics" */ '../views/Statistics.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () =>
      import(/*webpackChunkName: "settings" */ '../views/Settings.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
