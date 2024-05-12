<template>
  <div class="container">
    <div class="head-panel">
      <searchBar
          @filtered-objects="filteredObjects = $event"
      />
    </div>

    <div class="head-panel">
      <button
          v-for="(objectType, idx) in objectTypes"
          :key="idx"
          class="head-panel__button"
          :class="{ 'head-panel__button_active': objectTypeIdFilter === idx + 1 }"
          @click="setObjectTypeIdFilter(idx + 1)"
      >
        {{ objectType }}
      </button>
    </div>

    <template v-if="filteredObjects.length">
      <div class="content-list">
        <div class="content-list__item" v-for="(object, id) in filteredObjects" :key=id>
          <left-panel-item
              :cadastralNumber="object.cadastral_number"
              :address="object.address"
              :square="object.area"
              @click="onPanelItemClick(object)"
          />
        </div>
      </div>
    </template>

    <p
        v-else
        class="content-list__not-found"
    >
      Ничего не найдено
    </p>
  </div>
</template>

<script setup>
import {useStore} from 'vuex';
import leftPanelItem from '@/components/LeftPanel/Left-panel-item.vue';
import {computed, ref} from 'vue';
import searchBar from '@/components/LeftPanel/Search-bar.vue';

const objectTypes = [
  'Земельные участки',
  'Целевые участки',
  'Объекты строительства'
]

const store = useStore()

const map = computed(() => store.state.mapStore.map)

const objectTypeIdFilter = computed(() => store.state.objectsStore.filters.object_type_id)

const filteredObjects = ref([])

function onPanelItemClick(object) {
  map.value.setZoom(store.state.mapStore.zoom)

  map.value.setCenter([
    object.center_latitude,
    object.center_longitude
  ])
}

function setObjectTypeIdFilter(value) {
  store.commit('objectsStore/setFilter', {
    key: 'object_type_id',
    value: objectTypeIdFilter.value === value
        ? null
        : value,
  })

  store.dispatch('objectsStore/fetchObjects')
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 30%;
  flex-direction: column;
}

.head-panel {
  display: flex;
  justify-content: center;


  &__button {
    padding: 10px;
    border-radius: 0.3rem;

    &:hover {
      background-color: whitesmoke;
    }

    &_active {
      $background-color: #d6d6d6;
      background-color: $background-color;

      &:hover {
        background-color: $background-color;
      }
    }
  }
}

.content-list {
  overflow-y: scroll;
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  &__not-found {
    margin: auto;
    color: darkgrey;
    font-size: 2rem;
    font-weight: bold;
  }
}

.content-list__item {
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  :hover {
    background-color: whitesmoke;
  }
}

.search-container {
  position: relative;
}

input {
  width: 550px;
  margin: 5px;
  border-radius: 5px;
  padding: 10px;
  font-size: 13pt;
}

</style>