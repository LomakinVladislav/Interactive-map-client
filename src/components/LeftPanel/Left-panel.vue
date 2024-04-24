<template>
    <div id="container">
        <div id="head-panel">
            <button>Земельные участки</button>
            <button>Целевые участки</button>
            <button>Объекты строительства</button>
        </div>
        <div id="content-list" v-for="(object, id) in objects" :key=id>
            <left-panel-item
                :coordinates="object.cadastral_number"
                :address="object.address"
                :square="object.area"
            />
        </div>
    </div>
</template>

<script setup>
import leftPanelItem from '@/components/LeftPanel/Left-panel-item.vue';
import { fetchGet } from '@/subFuncs';
import { ref, onBeforeMount } from 'vue';

let objects = ref({});

onBeforeMount(async () => {
    getObject()
})

async function getObject() {
    let data = await fetchGet("objects/details");
    objects.value = data;
}

</script>

<style lang="scss" scoped>

#container {
    display: flex;
    width: 30%;
    // border-right: 2px solid;
    // border-color: $border-element;
    flex-direction: column;
}

#head-panel {
    display:flex;
    justify-content: center;

    button {
        padding: 10px;
    }

    button:hover {
        color: gray;
    }
}

#content-list {
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }

    :hover {
        background-color: #f3f3f3;
    }
}

// #element {
//     display: flex;
//     flex-direction: row;
//     margin: 10px;
//     div {
//         margin-right: 20px;
//     }
//     #area {
//         display: flex;
//         align-items: center;
//     }
//     img {
//         width: 40px;
//         height: 40px;
//     }
// }
</style>