<template>
    <div class="search-container" v-click-target="clickTargetHandler">
        <input class="search" placeholder="Поиск по кадастровому номеру" type="search" v-model="query" :class="{'search-input-no-down-border-radius': showQueryResults && query !== ''}">
        <div v-if="showQueryResults && query !== ''" class="search-result">
            <template v-for="(object, key) in queryObjects" :key="key">
                <div class="query-item">
                    <p>
                        {{ object.cadastral_number }}
                    </p>
                    <p>
                        {{ object.area }} м²
                    </p> 
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref, onBeforeMount, computed } from 'vue';
import { fetchGet } from '@/subFuncs';

let objects = ref([]);

const query = ref('');

const showQueryResults = ref(false)

function clickTargetHandler({isInside, isOutside}) {
  if (isInside && showQueryResults.value === false) {
    showQueryResults.value = true;
  } else if (isOutside && showQueryResults.value === true) {
    showQueryResults.value = false;
  }
}

const queryObjects = computed(() => {
  return objects.value.filter((object) => object.cadastral_number.toLowerCase().indexOf(query.value.toLowerCase()) !== -1)
})

onBeforeMount(async () => {
  let object = await fetchGet("objects/details");
  objects.value = object;
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

.search-result {
  @extend %overflow-scroll;

  z-index: 1;
  position: absolute;
  margin-top: 1px;
  top: 35px;
  background-color: #f5f5f5;
  width: 470px;
  max-height: 300px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 5px 15px 5px 15px;
  animation: ani 0.5s forwards;

  border-bottom: 5px solid black;
  border-left: 1.5px solid;
  border-right: 1.5px solid;
  left: -0.5px;
}

@keyframes ani {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

.query-item {
  display: flex;
  justify-content: space-between;

  &:hover {
    background-color: white;
  }
}

input {
    width: 400px;
    border-radius: 5px;
    padding: 10px;
    font-size: 13pt;
}
</style>