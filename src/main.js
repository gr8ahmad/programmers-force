import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {
    routes
} from './router/routes.js'
import {
    store
} from './store/store'
import firebase from 'firebase'
Vue.use(BootstrapVue);
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

Vue.use(VueResource);

Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    mode: 'history'
})
Vue.config.productionTip = false
let app;
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDyN2jDVXmOyzfqXHG4a-4cMEdXgadGMhA",
    authDomain: "programmers-force.firebaseapp.com",
    databaseURL: "https://programmers-force.firebaseio.com",
    projectId: "programmers-force",
    storageBucket: "programmers-force.appspot.com",
    messagingSenderId: "1020758920108"
};
firebase.initializeApp(config);
router.beforeEach((to, from, next) => {
    let currentUser = firebase.auth().currentUser;
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth && !currentUser) {
        next('login')
    } else if (!requiresAuth && currentUser) {
        next('admin')
    } else {
        next()
    }
})

firebase.auth().onAuthStateChanged(function (user) {
    if (!app) {

    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app')

    }

});
