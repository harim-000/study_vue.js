import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/TrelloHome.vue'
import Login from '../components/TrelloLogin.vue'
import NotFound from '../components/NotFound.vue'
import Board from '../components/TrelloBoard.vue'
import Card from '../components/TrelloCard.vue'

Vue.use(Router)

const requireAuth = (to, from, next) => {
  const isAuth = localStorage.getItem('token')
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  isAuth ? next() : next(loginPath)
}

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home, beforeEnter: requireAuth },
    { path: '/login', component: Login },
    { path: '/b/:bid',
      component: Board,
      beforeEnter: requireAuth,
      children: [
        { path: 'c/:cid', component: Card, beforeEnter: requireAuth }
      ]
    },
    { path: '*', component: NotFound }
  ]
})
