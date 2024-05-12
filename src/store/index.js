import { createStore } from 'vuex';
import {objectsStore} from '@/store/objectsStore/objectsStore';
import {mapStore} from '@/store/mapStore/mapStore';
import {layersStore} from "@/store/layersStore/layersStore";

export default createStore({
    state: {
        api: "http://localhost:8000",
    },
    getters: {},

    mutations: {},

    actions: {},
    
    modules: {
        objectsStore,
        mapStore,
        layersStore,
    }
})