import Vue from 'vue'
import axios from 'axios'
import VueFirestore from 'vue-firestore';
import App from './App.vue'

Vue.config.productionTip = false;
Vue.use(VueFirestore, { key: 'id' });
Vue.config.productionTip = false
Vue.prototype.axios = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
 