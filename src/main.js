import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

const app = createApp(App)

app.directive("click-target", {
    beforeMount: (el, binding) => {
        el.clickTargetHandler = (event) => {
            const isInside = el === event.target || el.contains(event.target); //inside contextMenu
            const isParent = el.parentNode === event.target || el.parentNode.contains(event.target) && !isInside; //click on parent or element in parent
            const isOutside = !isInside && !isParent;
            let click;

            if (event.type === "click") {
                click = "left";
            } else if (event.type === "contextmenu") {
                click = "right";
            } else {
                throw `unknown event type ${event.type} in click-target directive`;
            }

            binding.value({
                click: click,
                isParent: isParent,
                isOutside: isOutside,
                isInside: isInside,
                targetPosition: event.target.getBoundingClientRect(),
                targetElement: event.target
            }, event);
        }

        window.addEventListener("click", el.clickTargetHandler);
        window.addEventListener("contextmenu", el.clickTargetHandler);
    },
    unmounted: el => {
        window.removeEventListener("click", el.clickTargetHandler);
        window.removeEventListener("contextmenu", el.clickTargetHandler);
    }
})

app.use(store).mount('#app')