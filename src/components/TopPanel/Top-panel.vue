<template>
  <div id="container">
    <div id="item-top-panel">
      <img src="@/assets/logo-strana.png" />
      <searchBar></searchBar>
    </div>
    <div id="item-top-panel">
      <!-- <div id="right-item-top-panel">
                <button>Проект</button>
                <img src="@/assets/arrow-down.png"/>
                <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div> -->
      <projectBlock></projectBlock>
      <!-- <div id="right-item-top-panel">
        <button>Город</button>
        <img src="@/assets/arrow-down.png" />
      </div> -->
      <cityBlock></cityBlock>
    </div>
  </div>
</template>

<script setup>
import searchBar from "./Search-bar.vue";
import projectBlock from "./Top-panel-project.vue";
import cityBlock from "./Top-panel-city.vue";
</script>

<style scoped lang="scss">
#container {
  width: 100%;
  border-bottom: 2px solid;
  border-color: $border-element;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 10px;
  box-sizing: border-box;
}

#item-top-panel {
  display: flex;
  gap: 15px;

  img {
    width: 20%;
  }
}

// #right-item-top-panel {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   border: 1px solid;

//   img {
//     width: 15%;
//   }
// }

input {
  width: 400px;
  border-radius: 5px;
  padding: 10px;
  font-size: 13pt;
}
</style>