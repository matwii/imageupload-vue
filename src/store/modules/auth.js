import api from '../../api/imgur';

const state = {
    token: null
};

const getters = {
    isLoggedIn: (state) => !!state.token
};

const actions = {
    logout: ({ commit }) => { //Commit used to call mutations
        commit('setToken', null);
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