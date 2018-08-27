import Home from './components/Home'
import Bookshelf from './components/Bookshelf'
import Produce from './components/Produce'
import Personal from './components/Personal'
import Edit from './components/home/Edit'
import Library from './components/home/Library'


const routes = [
  {
    path: '/home',
    name: '首页',
    component: Home,
    children: [
      {
        path: '/home/edit',
        name: '编辑推荐',
        component: Edit
      },
      {
        path: '/home/library',
        name: '全部作品',
        component: Library
      }
    ]
  },
  {
    path: '/bookshelf',
    name: '书架',
    component: Bookshelf
  },
  {
    path: '/produce',
    name: '创作',
    component: Produce
  },
  {
    path: '/personal',
    name: '我的',
    component: Personal
  }
];


export default routes;
