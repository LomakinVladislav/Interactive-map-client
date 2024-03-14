<template> 
  <topPanel/>
  <div class="main">
    <leftPanel/>
    <mapBlock/>
  </div>
</template>

<script setup>
import topPanel from "./components/Top-panel.vue";
import mapBlock from "./components/Map-component.vue";
import leftPanel from "./components/LeftPanel/Left-panel.vue"
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100vh;
  max-height: 100vh;

  display: flex;
  flex-direction: column;

  .main {
    display: flex;
    flex-grow: 1;
    max-height: calc(100vh - 65px);
  }
}
</style>
