import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/page/Home'
import Bookshelf from '../components/page/Bookshelf'
import Produce from '../components/page/Produce'
import Personal from '../components/page/Personal'
import Edit from '../components/home/Edit'
import Library from '../components/home/Library'
import Search from '../components/page/Search'
import SearchResult from '../components/page/SearchResult'
import Channel from '../components/home/Channel'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home/edit'
    },
    {
      path: '/home',
      redirect: '/home/edit',
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
          path: 'channel/:title/:tid',
          name: 'channel',
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
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/searchresult/:keyword',
      name: 'searchresult',
      component: SearchResult
    },
  ]
});

export default router;


