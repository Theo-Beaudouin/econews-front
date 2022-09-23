import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
/* Axios installation */
import axios from 'axios'
import VueAxios from 'vue-axios'

import './assets/base.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
/* Axios installation */
app.use(VueAxios, axios)

app.mount('#app')
