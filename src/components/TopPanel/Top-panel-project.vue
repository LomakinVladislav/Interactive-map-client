<template>
  <div class="project">
    <button>Проект</button>
    <img src="@/assets/arrow-down.png" />
    <div class="project-popup-container">
      <div class="project-popup-content">
        <div class="project-popup-content-container">
          <span>Западный</span>
          <span>Юнион</span>
          <span>Авторский</span>
          <span>Европеский берег 2.0</span>
          <span>Домашний</span>
          <span>Сердце Сибири</span>
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

.project {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

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

.project-popup-content {
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

.project-popup-content-container {
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