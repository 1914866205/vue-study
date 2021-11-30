import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            username:'涛涛',
            password:'',
            gender:'',
            hoppy:'',
            subject:'',
            fileName:'',
            message:''
        }
    },
    mutations: {
        setUser(state, data) {
            state.user = data;
        }
    },
    getters: {

    },
    actions: {
    },
    modules: {}
})
