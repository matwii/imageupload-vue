import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store';
import AuthHandler from './components/AuthHandler';

Vue.use(VueRouter);

//Config for the router
const router = new VueRouter({
    mode: 'history', //Remove # from the url
    routes: [{ path: '/oauth2/callback', component: AuthHandler }]
});

new Vue({
    router, //router: router shorthand
    store, //store: store es6
    render: h => h(App)
}).$mount('#app')