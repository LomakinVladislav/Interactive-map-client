<template>
  <div class="project">
    <button>Проект</button>
    <img src="@/assets/arrow-down.png"/>

    <div class="project-popup-container">
      <div class="project-popup-content">
        <div class="project-popup-content-container">
          <span
              v-for="(item, id) in nameProjects"
              class="project-popup-content-container__item"
              :key=id
              :class="{ 'project-popup-content-container__item_active': item.project_name === projectName }"
              @click="onClickProject(item)"
          >
            {{ item.project_name }}
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

const store = useStore()

const map = computed(() => store.state.mapStore.map)

const nameProjects = ref([]);
const projectName = computed(() => store.state.objectsStore.filters.project_name);

onMounted(async () => {
  nameProjects.value = await fetchGet("projects/");
})

function onClickProject(project) {
  store.commit('objectsStore/setFilter', {
    key: 'project_name',
    value: projectName.value === project.project_name
        ? null
        : projectName
  })

  map.value.setZoom(store.state.mapStore.zoom)

  map.value.setCenter([
    project.center_latitude,
    project.center_longitude
  ])

  store.dispatch('objectsStore/fetchObjects')
}

</script>

<style lang="scss" scoped>
button {
  font-size: 16pt;
}

.project {
  display: flex;
  align-items: center;
  justify-content: center;
  height: $top-panel-height;


  &:hover {
    .project-popup-container {
      display: inherit;
    }
  }

  img {
    width: 15%;
  }
}

.project-popup-container {
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

.project-popup-content {
  background-color: #f5f5f5;

  display: flex;
  justify-content: left;

  border-bottom: 5px solid $border-element;

  width: 100%;
  min-height: 100px;
}

.project-popup-content-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;

  span {
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