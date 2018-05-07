import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuelidate from 'vuelidate';
import FullCalendar from 'vue-full-calendar';

import App from './App';
import router from './router';
import store from './store';

Vue.use(FullCalendar);
Vue.use(Vuetify);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
