import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import TaskCard from "./components/ui/TaskCard.vue";
import ListBadge from "./components/ui/ListBadge.vue";
import BackgroundBlob from "./components/ui/BackgroundBlobs.vue";
import router from "./router";

import "./assets/main.scss";

const app = createApp(App);
app.component("TaskCard", TaskCard);
app.component("ListBadge", ListBadge);
app.component("BackgroundBlob", BackgroundBlob);

app.use(createPinia());
app.use(router);

app.mount("#app");
