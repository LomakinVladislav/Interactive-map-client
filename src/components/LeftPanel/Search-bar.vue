<template>
  <div class="search-container">
    <input v-model="query" class="search" placeholder="Поиск по кадастровому номеру" type="search">
  </div>
</template>

<script setup>
import {ref, defineEmits, watch, computed} from 'vue';
import { useDebounce } from '@/composables/useDebounce'
import {useStore} from "vuex";

const emits = defineEmits(['filteredObjects'])

const store = useStore()

const objects = computed(() => store.state.objectsStore.objects)

const query = ref('');

function filterObjects (query) {
  if (!query) {
    return emits('filteredObjects', objects.value)
  }

  const result = objects.value
  .filter(
    (object) => 
    object.cadastral_number
    .toLowerCase()
    .indexOf(query.toLowerCase()) !== -1
  )

  emits('filteredObjects', result)
}

const filteredObjectsWithDebounce = useDebounce(filterObjects)

watch(query, value => {
  filteredObjectsWithDebounce(value)
})

watch(objects, () => {
  filterObjects(query.value)
})
</script>

<style lang="scss" scoped>
.search-container {
  position: relative;
}

.search-input-no-down-border-radius {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}

input {
  width: 550px;
  margin: 5px;
  border-radius: 5px;
  padding: 10px;
  font-size: 13pt;
}
</style>