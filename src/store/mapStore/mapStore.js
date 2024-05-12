import {load} from '@2gis/mapgl';

export const mapStore = {
  namespaced: true,

  state: () => ({
    mapApi: null,
    map: null,
    zoom: 17,
  }),

  getters: {},

  mutations: {},

  actions: {
    async initMap({state}) {
      state.mapApi = await load()

      state.map = new state.mapApi.Map('map__container', {
        center: [65.60144491376327, 57.13738502177971],
        zoom: state.zoom,
        key: 'deb03fce-612f-43aa-aab5-e19eec8cc458',
        lang: 'ru'
      })
    }
  }
}