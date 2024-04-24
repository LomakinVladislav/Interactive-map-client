import { createStore } from 'vuex';
import {mapObjectsStore} from './mapObjectsStore/mapObjectsStore';

export default createStore({
    state: {
        api: "http://localhost:8000",
    },
    getters: {},

    mutations: {},

    actions: {},
    
    modules: {
        mapObjectsStore
    }
})