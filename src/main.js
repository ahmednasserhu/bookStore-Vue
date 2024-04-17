import { createApp } from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import App from './App.vue'
import router from './router/routes'
import { createPinia } from 'pinia'
import homecomponent from './components/homecomponent.vue'
 
// createApp(App).use(router).mount('#app')
const pinia = createPinia()
const app = createApp(homecomponent)
app.use(router)
app.use(pinia)
app.mount('#app')