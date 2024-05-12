<template>
  <div class="map">
    <div class="map__container" id="map__container"/>
    <layerSwitcher/>
    <map-legend/>
  </div>
</template>

<script setup>
import {computed, onMounted, ref, watch} from 'vue';
import {useStore} from 'vuex';
import layerSwitcher from './Layer-switcher.vue';
import MapLegend from "@/components/MapLegend.vue";

const store = useStore()

const mapApi = computed(() => store.state.mapStore.mapApi)
const map = computed(() => store.state.mapStore.map)

const polygons = ref([])

const boundaries = computed(() => store.getters['objectsStore/getBoundaries'])

function updatePolygons() {
  boundaries.value.forEach((boundary) => {
    const cords = [boundary.map(({cords}) => cords)]

    const color = store.getters['layersStore/getCurrentColor'](boundary[0].layerId)

    const polygon = new mapApi.value.Polygon(map.value, {
      coordinates: cords,
      color: `${color}55`,
      strokeWidth: 1,
      strokeColor: color,
    })

    polygons.value.push(polygon)
  })
}

function destroyPolygons() {
  polygons.value
      .forEach(polygon => polygon.destroy())
}

watch(boundaries, () => {
  destroyPolygons()
  updatePolygons()
})

onMounted(async () => {
  await store.dispatch('layersStore/fetchLayers')
  await store.dispatch('mapStore/initMap')
  await store.dispatch('objectsStore/fetchObjects')
})
</script>

<style lang="scss">
.map {
  flex-grow: 1;
  position: relative;

  &__container {
    height: 100%;
  }

  .layer-switcher {
    position: absolute;
    top: 85px;
    right: 10px;
  }

  .map-legend {
    position: absolute;
    bottom: 10px;
    left: 10px;
  }
}
</style>