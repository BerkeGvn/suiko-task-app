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
  actions: {
    // For getting list name for badges
    getListName(id) {
      let test = this.allTasks.find((list) =>
        list.tasks.some((task) => task.id === id)
      );
      return test.list;
    },
    deleteTask(taskId) {
      // finding list index by finding task id
      const listIndex = this.allTasks.findIndex((lists) =>
        lists.tasks.some((task) => task.id === taskId)
      );
      const taskIndex = this.allTasks[listIndex].tasks.findIndex(
        (task) => task.id === taskId
      );
      this.allTasks[listIndex].tasks.splice(taskIndex, 1);
    },
    /*     deleteTask(taskId) {
      const listName = this.getListName(taskId);
      const listIndex = this.allTasks.findIndex(
        (lists) => lists.list === listName
      );
      const taskIndex = this.allTasks[listIndex].tasks.findIndex(
        (task) => task.id === taskId
      );
      this.allTasks[listIndex].tasks.splice(taskIndex, 1);
    }, */
  },
});
