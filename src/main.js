import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { routes } from './routes.js'
Vue.use(BootstrapVue);
import VueParticles from 'vue-particles'
Vue.use(VueParticles)


Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    mode: 'history'
})
Vue.config.productionTip = false
new Vue({
 router,
  render: h => h(App)
}).$mount('#app')
