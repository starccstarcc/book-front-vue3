import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mitt from "mitt";

import "./assets/sass/main.scss";
import { store } from "./store";

const app = createApp(App);
const emitter = mitt();

app.use(router);
app.config.globalProperties.$store = store;
app.config.globalProperties.emitter = emitter;
app.provide("$store", store);
app.mount("#app");
