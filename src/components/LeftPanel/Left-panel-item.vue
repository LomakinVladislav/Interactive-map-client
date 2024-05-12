<template>
  <div class="left-panel-item">
    <div class="left-panel-item__container">
      <img src="@/assets/folders.png"/>

      <div>
        <h3>{{ cadastralNumber }}</h3>
        <p>{{ address }}</p>
      </div>
    </div>

    <div class="left-panel-item__container">
      <p>{{ square }} м²</p>
    <img src="@/assets/three-dots.png"/>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  cadastralNumber: String,
  address: String,
  square: Number,
})
</script>

<style lang="scss">
.left-panel-item {
  display: flex;
  justify-content: space-between;
  margin: 10px;

  &__container {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  h3 {
    max-width: 350px;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  p {
    max-width: 350px;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 11pt;
  }

  img {
    width: 25px;
    height: 25px;
  }
}
</style>