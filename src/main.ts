import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import Gx from './lib';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store';

import './assets/css/common.css';
import 'normalize.css/normalize.css';

Vue.config.productionTip = false;
Vue.use(Gx);
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
