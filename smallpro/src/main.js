// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import axios from 'axios';
import MintUI from 'mint-ui';
import VueRouter from 'vue-router';

//IMPORT COMMPONENTS
import Home from './components/Home';
import Channel from './components/Channel';


Vue.use(MintUI);
Vue.use(VueRouter);

// axios.defaults.baseURL = 'http://i.66rpg.com';
axios.defaults.baseURL = 'http://test-service.cgapi.cn/qc-community';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.config.productionTip = false;


const routes = [
  {path: '/channel', component: Channel},
  {path: '/',component: Home}
];

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});


/*
import {Tabbar, Navbar, TabItem, TabContainer, TabContainerItem, Loadmore} from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Loadmore.name, Loadmore);
*/
