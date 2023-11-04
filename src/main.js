import './assets/main.css'

// load createApp function
import { createApp } from 'vue'
// load root component
import App from './App.vue'
// build Vue app object
import router from './router'
// mount under HTML label
const app = createApp(App) 

app.use(router)

app.mount('#app')
