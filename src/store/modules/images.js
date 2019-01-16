import api from '../../api/imgur';
import { router } from '../../main' //Curly bracket because of named object. Not export default


const state = {
    images: []
};

const getters = {
    allImages: state => state.images
};

const actions = {
    async fetchImages({ rootState, commit }) { //Rootstate can access other modules and get states from them.
        const { token } = rootState.auth;
        const response = await api.fetchImages(token);
        commit('setImages', response.data.data) //Images stored in data.data from imgur api response
    },
    async uploadImages({ rootState }, images) {
        // Get access token
        const { token } = rootState.auth;

        //Call API module to do the upload
        await api.upload(images, token);

        //Redirect to ImageList component
        router.push('/');
    }
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}