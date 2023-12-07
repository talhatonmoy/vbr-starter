import { createApp } from 'vue'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import router from './routes/router'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'


import App from './App.vue'

createApp(App).use(router, bootstrap).mount('#app')