import { VueConstructor } from 'vue';

import Dialog from './components/Dialog';
import directives from './directives';
import filters from './filters';
import http from './http';
import utils from './utils';
import api from './api';

const components = [{ com: Dialog, name: 'GxDialog' }];

const install = (Vue: VueConstructor) => {
  components.forEach((Components: any) => {
    Vue.component(Components.name, Components.com);
  });

  Vue.prototype.$http = http;
  Vue.prototype.$utils = utils;
  Vue.prototype.$api = api;

  const filter: any = filters;
  Object.keys(filter).forEach((key: any) => {
    Vue.filter(key, filter[key]);
  });

  const directive: any = directives;
  Object.keys(directive).forEach((key: any) => {
    Vue.directive(key, directive[key]);
  });

  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }
};

export default {
  install,
};
