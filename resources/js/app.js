require('./bootstrap');
window.Vue = require('vue');
import Vue from 'vue';
import Vuetify from 'vuetify';
import Routes from '@/js/routes.js';
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from '@/js/views/App';
Vue.use(Vuetify,VueAxios,axios,{
    iconfont: 'fa' // 'md' || 'mdi' || 'fa' || 'fa4'
  });

const app = new Vue({
    el: '#app',
    router : Routes,
    render : h => h(App)
});

export default app;
