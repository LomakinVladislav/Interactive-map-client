<template>
  <div class="city">
    <button>Город</button>
    <img src="@/assets/arrow-down.png"/>
    <div class="city-popup-container">
      <div class="city-popup-content">
        <div class="city-popup-content-container">
          <span
              v-for="(item, id) in cityNames"
              :key=id
              class="city-popup-content-container__item"
              :class="{ 'city-popup-content-container__item_active': cityName === item.city }"
              @click="onClickCity(item.city)"
          >
            {{ item.city }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {fetchGet} from '@/subFuncs';
import {computed, onMounted, ref} from 'vue';
import {useStore} from 'vuex';

const store = useStore();

const cityNames = ref([]);
const cityName = computed(() => store.state.objectsStore.filters.city);

onMounted(async () => {
  cityNames.value = await fetchGet("cities/");
})

function onClickCity(city) {
  store.commit('objectsStore/setFilter', {
    key: 'city',
    value: cityName.value === city
        ? null
        : city
  })

  store.dispatch('objectsStore/fetchObjects')
}

</script>

<style lang="scss" scoped>
button {
  font-size: 16pt;
}

.city {
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    .city-popup-container {
      display: inherit;
    }
  }

  img {
    width: 15%;
  }
}

.city-popup-container {
  display: none;
  position: absolute;
  top: calc($top-panel-height - 2px);
  left: 0;
  width: 100%;
  max-height: 100%;
  z-index: 1;
  animation: ani 0.5s forwards;
}

@keyframes ani {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.city-popup-content {
  background-color: #f5f5f5;

  display: flex;
  justify-content: left;
  //gap: 5px;
  //flex-wrap: wrap;

  border-bottom: 5px solid $border-element;
  //border-left: 2px solid $border-element;
  //border-right: 2px solid $border-element;

  // border-bottom-left-radius: 5px;
  // border-bottom-right-radius: 5px;
  //padding: 5px;

  width: 100%;
  min-height: 100px;

  // span {
  //   // border-bottom: 1px solid black;
  //   display: flex;
  //   text-align: center;
  //   justify-content: center;
  //   align-items: center;
  //   width: 20%;
  //   border-radius: 3px;
  //   font-size: 16pt;
  //   cursor: pointer;

  //   &:hover {
  //     background-color: rgba(0, 0, 0, 0.07);
  //   }
  // }
}

.city-popup-content-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  //height: 100px;

  span {
    // border-bottom: 1px solid black;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 230px;
    border-radius: 3px;
    font-size: 16pt;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.07);
    }
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