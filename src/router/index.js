import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/Guide",
    },
    {
      path: "/Guide",
      name: "guide",
      component: () => import("../views/GuideView.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/AllTasks",
      name: "AllTasks",
      component: () => import("../views/AllTasksView.vue"),
    },
    {
      path: "/SelectedTask/:listName",
      name: "SelectedTask",
      component: () => import("../views/SelectedTaskListView.vue"),
      props: true,
    },
    {
      path: "/newTask",
      name: "newTask",
      props: true,
      component: () => import("../views/NewTaskView.vue"),
    },
    {
      path: "/calendar",
      name: "calendar",
      component: () => import("../views/CalendarView.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/ProfileView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
