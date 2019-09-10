import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'
import Vant from 'vant'
import axios from 'axios'
import { Lazyload } from 'vant';

Vue.prototype.$ajax = axios
Vue.use(Vant);
Vue.use(Lazyload);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
