import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "@/router";
import "@/styles/global.css";
/*import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "@/styles/element/index.scss"*/

let app = createApp(App);

app.use(router);

app.mount('#app');
