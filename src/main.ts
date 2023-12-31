import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "@/router";
import "virtual:svg-icons-register";
import "element-plus/dist/index.css";
import "@/styles/global.css";
import "normalize.css";
/*import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils";

toggleTheme({
    scopeName: "theme-default",
});*/

let app = createApp(App);

app.use(router);

app.mount('#app');
