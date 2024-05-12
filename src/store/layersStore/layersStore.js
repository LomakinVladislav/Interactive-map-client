import {fetchGet} from "@/subFuncs";

export const layersStore = {
  namespaced: true,

  state: () => ({
    layers: [],
  }),

  getters: {
    getCurrentColor: (state) => (layerId) => {
      return state.layers.find(({id}) => id === layerId).color
    }
  },

  mutations: {},

  actions: {
    async fetchLayers({state}) {
      state.layers = await fetchGet("layer")
    }
  }
}