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

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home/edit'
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
          path: 'channel/:title/:tid',
          name:'channel',
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
});

// router.beforeEach(function () {
//   //
//   console.log(1);
//   next();
// });
// beforeEnter: (to, from, next) => {
//   window.scrollTo(0, 0);
//   next('/home/channel');
// }

export default router;


