import Vue from 'vue'
import Router from 'vue-router'
import PageNotFound from '@/components/PageNotFound'
import Header from '@/components/Header'
import Memo from '@/components/Memo'
import Search from '@/components/Search'
import Detail from '@/components/Detail'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/session',
      component: Login
    },
    {
      path: '/',
      component: Header,
      children: [
        {
          path: 'memo', component: Memo
        },
        {
          path: 'users', component: Search
        },
        {
          path: 'users/:username', component: Detail
        },
        // 入れ子構造になってしまうから、redirect
        {
          path: '/',
          redirect: '/404'
        }
      ]
    },
    {
      path: '*',
      component: PageNotFound
    },
  ]
})
