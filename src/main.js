import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "./assets/css/main.scss";
import './assets/js/app.js'

const app = createApp(App)
app.use(router)
app.mount('#app')

export const AppExport = app
