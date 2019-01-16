import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';

Vue.use(VueRouter);

//Config for the router
export const router = new VueRouter({
    mode: 'history', //Remove # from the url
    routes: [
        { path: '/', component: ImageList},
        { path: '/oauth2/callback', component: AuthHandler },
        { path: '/upload', component: UploadForm }
    ]
});

new Vue({
    router, //router: router shorthand
    store, //store: store es6
    render: h => h(App)
}).$mount('#app')