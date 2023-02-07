import { defineStore } from "pinia";
import tasks from "../assets/tasks";
import randomId from "../assets/GUID";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    allTasks: [...tasks],
  }),
  getters: {
    // used for AllTasksView to define links,colors,names and task length
    allListDetails: (state) => {
      const allListDetails = [];
      state.allTasks.forEach((list) =>
        allListDetails.push({
          name: list.name,
          length: list.tasks.length,
          id: list.id,
          color: list.color,
        })
      );
      return allListDetails;
    },

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
    createNewList(newList) {
      newList.id = randomId();
      this.allTasks.push(newList);
    },

    deleteList(listId) {
      const listIndex = this.allTasks.findIndex((list) => list.id === listId);
      this.allTasks.splice(listIndex, 1);
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

    toggleTaskIsDone(taskId) {
      const listIndex = this.allTasks.findIndex((lists) =>
        lists.tasks.some((task) => task.id === taskId)
      );
      const taskIndex = this.allTasks[listIndex].tasks.findIndex(
        (task) => task.id === taskId
      );
      const selectedTask = this.allTasks[listIndex].tasks[taskIndex];
      selectedTask.isDone = !selectedTask.isDone;
    },

    // For getting list name and color for badges
    getListDetails(taskId) {
      let list = this.allTasks.find((list) =>
        list.tasks.some((task) => task.id === taskId)
      );
      return { name: list.name, color: list.color };
    },
    // for getting specific list names for that list's tasks & dynamic route
    getSelectedTaskList(listName) {
      let selectedTaskList = false;
      selectedTaskList = this.allTasks.find((list) => list.name === listName);
      if (selectedTaskList) {
        return selectedTaskList;
      } else {
        return false;
      }
    },
  },
});
