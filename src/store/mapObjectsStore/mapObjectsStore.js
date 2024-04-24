import { fetchGet } from "@/subFuncs"
import { mapObjectsAdapter } from "./mapObjectsAdapter"

export const mapObjectsStore = {
    namespaced: true,

    state: () => ({
        mapObjects: {}
    }),

    getters: {
        mapObjects(state) {
            return Object.values(state.mapObjects)
        }
    },

    mutations: {

    },

    actions: {
        async fetchMapObjects({state}) {
            const data = await fetchGet("boundaries")
            state.mapObjects = mapObjectsAdapter.toClient(data)
        }
    }
}