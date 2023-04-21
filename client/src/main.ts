import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import appHeader from './components/Shared/appHeader.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('app-header', appHeader)

app.mount('#app')
