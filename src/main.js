import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './components/style/style.js'
import './components/style/style.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
