import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import '../main.scss'
import moment from 'moment'
import store from './store'

Vue.prototype.moment = moment
Vue.use(Vuex)

Vue.config.devtools = true
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
