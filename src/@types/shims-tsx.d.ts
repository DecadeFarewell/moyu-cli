import Vue, { VNode, VueConstructor } from 'vue';
import VueRouter from 'vue-router';
import { StoreOptions, Store } from 'vuex';
// import jq from 'jquery';

// 全局命名空间

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }

  interface Window {
    Vue: VueConstructor;
    store: Store<any>;
    router: VueRouter;
    // $: Jquery;
  }
}
