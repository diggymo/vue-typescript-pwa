import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import PageNotFound from '@/components/PageNotFound'
import Header from '@/components/Header'
import Memo from '@/components/Memo'

import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Buefy);
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/session',
      component: Hello
    },
    {
      path: '/',
      component: Header,
      children: [
        {
          path: 'memo', component: Memo
        },
        {
          path: '*', component: PageNotFound
        },
      ]
    },
    {
      path: '/',
      component: PageNotFound
    },
  ]
})
