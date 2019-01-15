import Vue from 'vue';
import App from './App';
import store from './store';

new Vue({
    store, //store: store es6
    render: h => h(App)
}).$mount('#app')