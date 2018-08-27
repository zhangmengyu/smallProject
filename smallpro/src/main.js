// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import App from './App';

import axios from 'axios';
import MintUI from 'mint-ui';

Vue.use(VueRouter);
Vue.use(MintUI);

// axios.defaults.baseURL = 'http://i.66rpg.com';
axios.defaults.baseURL = 'http://test-service.cgapi.cn/qc-community';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.config.productionTip = false;

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
});


new Vue({
  el: '#app',
  router,
  render: h => h(App),
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
