<template>
  <div class="container">
    <div class="item-top-panel">
      <img src="@/assets/logo-strana.png" />
    </div>

    <div class="item-top-panel">
      <projectBlock />
      <cityBlock />
    </div>
  </div>
</template>

<script setup>
import projectBlock from "./Top-panel-project.vue";
import cityBlock from "./Top-panel-city.vue";
</script>

<style scoped lang="scss">
.container {
  position: relative;
  width: 100%;
  border-bottom: 2px solid;
  border-color: $border-element;
  height: $top-panel-height;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 10px;
  box-sizing: border-box;
}

.item-top-panel {
  display: flex;
  gap: 15px;

  img {
    width: 20%;
  }
}
</style>