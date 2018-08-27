import Vue from 'vue';
import App from './App';
import router from './router';
import MintUI from 'mint-ui';
import './api'

Vue.use(MintUI);

Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});


/*
import {Tabbar, Navbar, TabItem, TabContainer, TabContainerItem, Loadmore} from 'mint-ui';

Vue.base(Tabbar.name, Tabbar);
Vue.base(Navbar.name, Navbar);
Vue.base(TabItem.name, TabItem);
Vue.base(TabContainer.name, TabContainer);
Vue.base(TabContainerItem.name, TabContainerItem);
Vue.base(Loadmore.name, Loadmore);
*/
