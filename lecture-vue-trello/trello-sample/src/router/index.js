import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/TrelloHome.vue'
import Login from '../components/TrelloLogin.vue'
import NotFound from '../components/NotFound.vue'
import Board from '../components/TrelloBoard.vue'
import Card from '../components/TrelloCard.vue'

Vue.use(Router)

const requireAuth

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/b/:bid',
      component: Board,
      children: [
        { path: 'c/:cid', component: Card }
      ]
    },
    { path: '*', component: NotFound }
  ]
})
