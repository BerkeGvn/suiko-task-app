import { createApp } from "vue";
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";
import App from "./App.vue";
import TaskCard from "./components/ui/TaskCard.vue";
import ListBadge from "./components/ui/ListBadge.vue";
import PageHeader from "./components/ui/PageHeader.vue";
import router from "./router";

import "./assets/main.scss";

const app = createApp(App);
app.component("TaskCard", TaskCard);
app.component("ListBadge", ListBadge);
app.component("PageHeader", PageHeader);

app.use(createPinia());
app.use(router);
app.use(MotionPlugin);
app.mount("#app");
