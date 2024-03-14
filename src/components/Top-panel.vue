<template>
    <div id="container">
        <input placeholder="Поиск по кадастровому номеру"/>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">

#container {
    width: 100%;
    border: 2px solid;
    border-color: $border-element;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
    box-sizing: border-box;
}

input {
    width: 400px;
    border-radius: 5px;
    padding: 10px;
    font-size: 13pt;
}
</style>