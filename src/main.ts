import { createApp } from "vue";
import ElementPlus from "element-plus";
import { createPinia } from "pinia";
import "element-plus/dist/index.css";
import App from "@/App.vue";
import router from "@/routers";
import "@/styles/common.scss";
import { Icon } from "@iconify/vue";
import { install as i18n } from "./locales";

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router)
  .component("Icon", Icon)
  .use(i18n)
  .use(ElementPlus)
  .mount("#app");
