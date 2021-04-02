import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import '../main.scss'
import moment from 'moment'
Vue.prototype.moment = moment

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
