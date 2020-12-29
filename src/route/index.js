import { createRouter, createWebHistory } from 'vue-router'
import home from '../view/home.vue'
import index from '../view/index/test.vue'
import search from '../view/search/index.vue'
import share from '../view/share/index.vue'
import setting from '../view/setting/index.vue'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        component: home,
        redirect:'/home'
      },
      {
        path: '/home',
        component: home,
        redirect:'/home/index',
        children:[
          {
            path: 'index',
            component: index
          },
          {
            path: 'search',
            component: search
          },
          {
            path: 'share',
            component: share
          },
          {
            path: 'setting',
            component: setting
          }
        ]
      }      
    ]
  })

  export default router