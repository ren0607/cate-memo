import Vue from 'vue'
import App from './App.vue'
import 'material-icons/iconfont/material-icons.css'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
