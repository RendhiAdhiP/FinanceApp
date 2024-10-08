import { createApp } from 'vue'
import './assets/index.css'
import App from './App.vue'
import router from './router'
import VueApexCharts from 'vue3-apexcharts'

createApp(App).use(router).use(VueApexCharts).mount('#app')
