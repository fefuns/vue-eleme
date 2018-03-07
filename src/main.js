import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import 'normalize.css/normalize.css'
import App from './App'
import router from './router'

Vue.use(Vuex)

Vue.prototype.$ajax = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
