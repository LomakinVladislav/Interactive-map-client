<template>
  <div class="layer-switcher" v-click-target="clickTargetHandler">
    <div class="layer-switcher__wrapper">
      <button class="layer-switcher__button" @click="isActive = !isActive">
        <img src="@/assets/layer.png" width="30" />
      </button>

      <div v-show="isActive" class="layer-switcher__container">
        <ul class="layer-switcher__list">
          <li v-for="({ id, title }) in layers" class="layer-switcher__item"
              :key="id"
              :class="{ 'layer-switcher__item_active': layerId === id }"
              @click="onClickLayer(id)"
          >
            <span>{{ title }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useStore} from 'vuex';
import {computed, ref} from 'vue';

const store = useStore()

const isActive = ref(false)
const layerId = computed(() => store.state.objectsStore.filters.layer_id)

const layers = ref([
  {
    id: 1,
    title: 'По статусу выкупа'
  },
  {
    id: 2,
    title: 'По праву собственности'
  },
  {
    id: 3,
    title: 'По ценовой категории'
  }
])

function onClickLayer(id) {
  store.commit('objectsStore/setFilter', {
    key: 'layer_id',
    value: layerId.value === id
        ? null
        : id
  })

  store.dispatch('objectsStore/fetchObjects')
}

function clickTargetHandler({isOutside, isParent}) {
  if (isOutside || isParent) {
    isActive.value = false
  }
}
</script>

<style lang="scss">
.layer-switcher {
  &__wrapper {
    position: relative;
  }

  &__button {
    width: 32px;
    height: 32px;
    background-color: white;
    border-radius: 0.3rem;
  }

  &__container {
    position: absolute;
    top: 40px;
    transform: translateX(calc(-100% + 32px));

    background-color: white;
    width: max-content;
    border-radius: 0.5rem;
  }

  &__list {
    list-style: none;
    padding: 1rem;
    margin: 0;
  }

  &__item {
    padding: 0.3rem;
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
</style>