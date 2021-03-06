import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/css/custom.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
