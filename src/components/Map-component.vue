<template>
    <div id="container-map">
    </div>
</template>

<script setup>

import { load } from '@2gis/mapgl';
load().then((mapglAPI) => {
    const map = new mapglAPI.Map('container-map', {
        center: [65.60144491376327, 57.13738502177971],
        zoom: 17,
        key: '4f4f6aee-f6b4-42e7-86be-8a23efc49b28',
        lang: 'ru'
    });
    map;
    const polygon1 = new mapglAPI.Polygon(map, {
    coordinates: [
        // Вершины многоугольника
        [
            [65.59715541111474, 57.13774906035667],
            [65.59869878067045, 57.13859056237202],
            [65.59957111941294, 57.13814554041366],
            [65.59807248664835, 57.13736876223132]
        ],
    ],
    color: '#99000055',
    strokeWidth: 1,
    strokeColor: '#bb0000',
    });
    const polygon2 = new mapglAPI.Polygon(map, {
    coordinates: [
        // Вершины многоугольника
        [
            [65.59924669558109, 57.13892431035206],
            [65.60077515418467, 57.13977387622694],
            [65.60216940467258, 57.139078043761344],
            [65.60053656612494, 57.138212280588746],
        ],
    ],
    color: '#99000055',
    strokeWidth: 1,
    strokeColor: '#bb0000',
    });
    const polygon3 = new mapglAPI.Polygon(map, {
    coordinates: [
        // Вершины многоугольника
        [
            [65.60375931100359, 57.138222975583275],
            [65.60230541366629, 57.13735719240986],
            [65.6008962495823, 57.138061149516346],
            [65.6024040721743, 57.13890727461574],
        ],
    ],
    color: '#99000055',
    strokeWidth: 1,
    strokeColor: '#bb0000',
    });
    const polygon4 = new mapglAPI.Polygon(map, {
    coordinates: [
        // Вершины многоугольника
        [
            [65.60305338490647, 57.137546026668176],
            [65.60395554803458, 57.138104335650794],
            [65.60560329844995, 57.13730328201407],
            [65.60468622452528, 57.13669641154714],
        ],
    ],
    color: '#99000055',
    strokeWidth: 1,
    strokeColor: '#bb0000',
    });
    const polygon5 = new mapglAPI.Polygon(map, {
    coordinates: [
        // Вершины многоугольника
        [
            [65.60287444205079, 57.13744893039387],
            [65.60449236898191, 57.136672137511034],
            [65.60359020663941, 57.1361138074593],
            [65.60195978391558, 57.136911225063876],
        ],
    ],
    color: '#99000055',
    strokeWidth: 1,
    strokeColor: '#bb0000',
    });
    const polygon6 = new mapglAPI.Polygon(map, {
    coordinates: [
        // Вершины многоугольника
        [
            [65.60192250446869, 57.13687885853019],
            [65.60349569598287, 57.13603731934859],
            [65.60205671034828, 57.13522003700417],
            [65.60042386907243, 57.13615869790366]
        ],
    ],
    color: '#99000055',
    strokeWidth: 1,
    strokeColor: '#bb0000',
    });
    polygon1;
    polygon2;
    polygon3;
    polygon4;
    polygon5;
    polygon6;
});

</script>

<style scoped lang="scss">
#container-map {
    flex-grow: 1;
    //display: flex;
    // width: 800px;
    // height: 800px;
}
</style>