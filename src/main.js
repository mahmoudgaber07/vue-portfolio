import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/scss/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { MotionPlugin } from '@vueuse/motion'

import store from "./store/store.js";

library.add(fas,fab,far)
const app = createApp(App)

app.use(router)
app.use(bootstrap).component('font-awesome-icon', FontAwesomeIcon)
app.use(MotionPlugin)
app.use(store)
app.mount('#app')
