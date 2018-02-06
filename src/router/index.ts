import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import PageNotFound from '@/components/PageNotFound'

import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Buefy);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/session',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/untititi',
      name: 'Hello00000',
      component: PageNotFound
    },
    { path: "*", component: PageNotFound }
  ]
})
