<template>
  <div class="map-legend">
    <div v-for="layer in layers" :key="layer.id" class="map-legend__item">
      <div
          class="map-legend__color"
          :style="`background-color: ${layer.color}`"
      />

      <span class="map-legend__name">{{ layer.description }}</span>
    </div>
  </div>
</template>

<script setup>
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore()

const layers = computed(() => {
  const currentLayer = store.state.objectsStore.filters.layer_id
  const layers = store.state.layersStore.layers

  if (!currentLayer) return layers

  return layers.filter(({id}) => id === currentLayer)
})
</script>

<style lang="scss">
.map-legend {
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: whitesmoke;

  &__item {
    display: flex;
    gap: 0.5rem;
  }

  &__color {
    width: 16px;
    height: 16px;
    border-radius: 5px;
  }
}
</style>