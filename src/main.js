import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
