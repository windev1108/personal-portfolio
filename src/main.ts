import { createApp } from 'vue'
import './index.css'
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";
import App from './App.vue'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Toast from "vue-toastification";

library.add(fas, far ,fab)

createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.use(Toast)
.mount('#app')
