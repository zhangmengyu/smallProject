import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/page/Home'
import Bookshelf from '../components/page/Bookshelf'
import Produce from '../components/page/Produce'
import Personal from '../components/page/Personal'
import Edit from '../components/home/Edit'
import Library from '../components/home/Library'
import Search from '../components/home/second/Search'
import Channel from '../components/home/second/Channel'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'edit',
          component: Edit
        },
        {
          path: 'library',
          component: Library
        },
        {
          path: 'search',
          component: Search
        },
        {
          path: 'channel',
          component: Channel
        },
      ]
    },
    {
      path: '/bookshelf',
      component: Bookshelf
    },
    {
      path: '/produce',
      component: Produce
    },
    {
      path: '/personal',
      component: Personal
    }
  ]
})



