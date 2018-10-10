// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import Antd from 'ant-design-vue';
import vueMoment from 'vue-moment';
import moment from 'moment';
import 'vuetify/dist/vuetify.css';
import 'ant-design-vue/dist/antd.css';
import '@mdi/font/css/materialdesignicons.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(Antd);
Vue.use(vueMoment);
Vue.prototype.moment = moment;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
  },
  template: '<App/>',
});
