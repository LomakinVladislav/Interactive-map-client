<template>
  <div class="city">
    <button>Город</button>
    <img src="@/assets/arrow-down.png" />
    <div class="city-popup-container">
      <div class="city-popup-content">
        <div class="city-popup-content-container">
          <span>Тюмень</span>
          <span>Москва</span>
          <span>Екатеринбург</span>
          <span>Тюмень</span>
          <span>Москва</span>
          <span>Екатеринбург</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
button {
  font-size: 16pt;
}

.city {
  position: relative;
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
  position: fixed;
  top: 33px;
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

  margin-top: 30px;
  border-bottom: 5px solid $border-element;
  //border-left: 2px solid $border-element;
  //border-right: 2px solid $border-element;

  // border-bottom-left-radius: 5px;
  // border-bottom-right-radius: 5px;
  //padding: 5px;

  width: 100%;
  height: 100px;

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
  width: 40%;
  height: 100px;

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
}
</style>