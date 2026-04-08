import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "@/main.css";
import BaseIcon from "@/components/ui/BaseIcon.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("BaseIcon", BaseIcon);

app.mount("#app");
