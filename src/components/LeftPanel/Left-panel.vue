<template>
    <div id="container">
        <div id="head-panel">
            <button>Земельные участки</button>
            <button>Целевые участки</button>
            <button>Объекты строительства</button>
        </div>
        <div id="content-list">
            <left-panel-item
                :coordinates="'66:41:0403007:15'"
                :address="'г. Тюмень, Улица 50 лет Октября, 63 к2'"
                :square="660"
            />

            <left-panel-item
                :coordinates="'66:41:0403007:15'"
                :address="'г. Тюмень, Улица 50 лет Октября, 63 к2'"
                :square="660"
            />

            <left-panel-item
                :coordinates="'66:41:0403007:15'"
                :address="'г. Тюмень, Улица 50 лет Октября, 63 к2'"
                :square="660"
            />

            <left-panel-item
                :coordinates="'66:41:0403007:15'"
                :address="'г. Тюмень, Улица 50 лет Октября, 63 к2'"
                :square="660"
            />

            <left-panel-item
                :coordinates="'66:41:0403007:15'"
                :address="'г. Тюмень, Улица 50 лет Октября, 63 к2'"
                :square="660"
            />

            <left-panel-item
                :coordinates="'66:41:0403007:15'"
                :address="'г. Тюмень, Улица 50 лет Октября, 63 к2'"
                :square="660"
            />

            <left-panel-item
                :coordinates="'66:41:0403007:15'"
                :address="'г. Тюмень, Улица 50 лет Октября, 63 к2'"
                :square="660"
            />

            <left-panel-item
                :coordinates="'66:41:0403007:15'"
                :address="'г. Тюмень, Улица 50 лет Октября, 63 к2'"
                :square="660"
            />

            <left-panel-item
                :coordinates="'66:41:0403007:15'"
                :address="'г. Тюмень, Улица 50 лет Октября, 63 к2'"
                :square="660"
            />

            <left-panel-item
                :coordinates="'66:41:0403007:15'"
                :address="'г. Тюмень, Улица 50 лет Октября, 63 к2'"
                :square="660"
            />

            <left-panel-item
                :coordinates="'66:41:0403007:15'"
                :address="'г. Тюмень, Улица 50 лет Октября, 63 к2'"
                :square="660"
            />

            <left-panel-item
                :coordinates="'66:41:0403007:15'"
                :address="'г. Тюмень, Улица 50 лет Октября, 63 к2'"
                :square="660"
            />

            <left-panel-item
                :coordinates="'66:41:0403007:15'"
                :address="'г. Тюмень, Улица 50 лет Октября, 63 к2'"
                :square="660"
            />

            <left-panel-item
                :coordinates="'66:41:0403007:15'"
                :address="'г. Тюмень, Улица 50 лет Октября, 63 к2'"
                :square="660"
            />

            <left-panel-item
                :coordinates="'66:41:0403007:15'"
                :address="'г. Тюмень, Улица 50 лет Октября, 63 к2'"
                :square="660"
            />

            <left-panel-item
                :coordinates="'66:41:0403007:15'"
                :address="'г. Тюмень, Улица 50 лет Октября, 63 к2'"
                :square="660"
            />

            <left-panel-item
                :coordinates="'66:41:0403007:15'"
                :address="'г. Тюмень, Улица 50 лет Октября, 63 к2'"
                :square="660"
            />

            <left-panel-item
                :coordinates="'66:41:0403007:15'"
                :address="'г. Тюмень, Улица 50 лет Октября, 63 к2'"
                :square="660"
            />

            <left-panel-item
                :coordinates="'66:41:0403007:15'"
                :address="'г. Тюмень, Улица 50 лет Октября, 63 к2'"
                :square="660"
            />

            <left-panel-item
                :coordinates="'66:41:0403007:15'"
                :address="'г. Тюмень, Улица 50 лет Октября, 63 к2'"
                :square="660"
            />
        </div>
    </div>
</template>

<script setup>
import leftPanelItem from '@/components/LeftPanel/Left-panel-item.vue';
</script>

<style lang="scss" scoped>

#container {
    display: flex;
    width: 30%;
    border: 2px solid;
    border-color: $border-element;
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