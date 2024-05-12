import {fetchGet} from "@/subFuncs"

export const objectsStore = {
  namespaced: true,

  state: () => ({
    objects: [],
    filters: {
      object_type_id: null,
      layer_id: null,
      city: null,
      project_name: null
    }
  }),

  getters: {
    getBoundaries(state) {
      return state.objects
        .map(({boundaries}) => boundaries
          .map(({latitude, longitude, layer_id}) => {
            return {
              cords: [latitude, longitude],
              layerId: layer_id
            }
          }))
    },

    getFilters(state) {
      const params = new URLSearchParams()

      Object.entries(state.filters)
        .filter(filterEntry => filterEntry[1])
        .map(([key, value]) => params.append(key, value))

      return params.toString()
    }
  },

  mutations: {
    setFilter(state, {key, value}) {
      state.filters[key] = value
    }
  },

  actions: {
    async fetchObjects({state, getters}) {
      state.objects = await fetchGet(`object/?${getters.getFilters}`)
    }
  }
}