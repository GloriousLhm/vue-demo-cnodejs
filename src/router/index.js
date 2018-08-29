import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index.vue'
import Content from '../page/content.vue'
import Ue from '../page/bauduue.vue'
import demo from '../components/demo'



Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      // name: '/',
      component: Index
    },
    {
      path: '/content/:id',
      // name: '/content',
      component: Content
    },
    {
      path: '/Ue',
      // name: '/content',
      component: Ue
    },
    {
      path: '/demo',
      // name: '/content',
      component: demo
    },

  ]
})
