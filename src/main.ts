import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { getActivePinia } from 'pinia'
import app from '@/App.vue'

app.use(getActivePinia())

createApp(App).mount('#app')
