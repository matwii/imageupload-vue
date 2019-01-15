import api from '../../api/imgur';
import qs from 'qs';

const state = {
    token: window.localStorage.getItem('imgur_token') //Looks to see if token is stored in LocalStorage
};

const getters = {
    isLoggedIn: (state) => !!state.token
};

const actions = {
    logout: ({ commit }) => { //Commit used to call mutations
        commit('setToken', null);
        window.localStorage.removeItem('imgur_token');
    },
    finalizeLogin: ({ commit }, hash) => {
        const query = qs.parse(hash.replace('#', '')); //turns the string into an object

        commit('setToken', query.access_token); //Calls the setToken on the commute function
        window.localStorage.setItem('imgur_token', query.access_token) //Stores the token in localstorage
    },
    login: () => {
        api.login(); //Takes the login method from the api object.
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}