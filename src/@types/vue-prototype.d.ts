import Vue from 'vue';
import utils from '@/lib/utils';
import axios from '@/lib/http';
import api from '@/lib/api';

type api = typeof api;
type axios = typeof axios;
type utils = typeof utils;

// 在vue的原型上新增的变量，需要声明类型

declare module 'vue/types/vue' {
  interface Vue {
    $api: api;
    $http: axios;
    $utils: utils;
  }
}
