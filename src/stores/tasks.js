import { defineStore } from "pinia";
import tasks from "../assets/tasks";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    allTasks: [...tasks],
  }),
  getters: {
    todaysTasks: (state) => {
      const today = new Date().toLocaleDateString("en-GB");
      const tasks = [];
      state.allTasks.forEach((list) => {
        list.tasks.map((task) => {
          if (task.date === today) {
            tasks.push(task);
          }
        });
      });
      return tasks;
    },
  },
  actions: {},
});
