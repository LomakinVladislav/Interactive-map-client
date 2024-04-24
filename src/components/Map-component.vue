<template>
  <div id="container-map" />
</template>

<script setup>
import { load } from '@2gis/mapgl';
import { onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

onMounted(async () => {
  await store.dispatch('mapObjectsStore/fetchMapObjects')

  const mapglAPI = await load()

  const map = new mapglAPI.Map('container-map', {
    center: [65.60144491376327, 57.13738502177971],
    zoom: 17,
    key: 'f7124a3e-77ac-446c-b3bd-b480396882f9',
    lang: 'ru'
  });


  const mapObjects = store.getters["mapObjectsStore/mapObjects"]

  mapObjects.forEach((mapObject) => {
    Object.values(mapObject)
    .forEach(mapLayer => {
      new mapglAPI.Polygon(map, {
      coordinates: [mapLayer],
      color: '#99000055',
      strokeWidth: 1,
      strokeColor: '#bb0000',
    });
    })
  })
})
</script>

<style scoped lang="scss">
#container-map {
  flex-grow: 1;
  //display: flex;
  // width: 800px;
  // height: 800px;
}
</style>