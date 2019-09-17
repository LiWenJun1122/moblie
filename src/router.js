import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List.vue'
import Details from './views/Details'
import Reg from './views/Reg'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'home',component: Home},
    {path: '/list',name: 'list',component: List},
    {path: '/details',name: 'details',component: Details},
    {path:'/reg',name:'reg',component:Reg},
  ]
})
