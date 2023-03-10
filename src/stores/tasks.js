import { defineStore } from "pinia";
import DummyTasks from "../assets/tasks";
import { randomId } from "../assets/helpers";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    allTasks: [],
  }),
  getters: {
    getAllTasks: (state) => {
      const tasks = [];
      state.allTasks.map((list) => tasks.push(...list.tasks));
      return tasks;
    },
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
    // list name for creating category
    listNames: (state) => {
      const listNames = state.allTasks.map((list) => list.name);
      return listNames;
    },
    // Today's tasks for home page
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
      this.setTasksToDB();
    },
    addNewTask(task) {
      const newTask = {
        id: randomId(),
        title: task.title,
        desc: task.desc,
        date: task.date,
        isDone: false,
      };
      const listIndex = this.allTasks.findIndex(
        (list) => list.name === task.list
      );
      this.allTasks[listIndex].tasks.push(newTask);
      this.setTasksToDB();
    },

    deleteList(listId) {
      const listIndex = this.allTasks.findIndex((list) => list.id === listId);
      this.allTasks.splice(listIndex, 1);
      this.setTasksToDB();
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
      this.setTasksToDB();
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
      this.setTasksToDB();
    },

    // For getting list name and color for badges
    getListDetails(taskId) {
      let list = this.allTasks.find((list) =>
        list.tasks.some((task) => task.id === taskId)
      );
      return { name: list.name, color: list.color };
    },
    // for getting specific list names for that list's tasks & dynamic route
    // if returns false, there is no list with entered name
    getSelectedTaskList(listName) {
      let selectedTaskList = false;
      selectedTaskList = this.allTasks.find((list) => list.name === listName);
      if (selectedTaskList) {
        return selectedTaskList;
      } else {
        return false;
      }
    },
    getTasksFromDate(date) {
      const tasks = [];
      this.allTasks.forEach((list) => {
        list.tasks.map((task) => {
          if (task.date === date) {
            tasks.push(task);
          }
        });
      });
      return tasks;
    },
    setTasksToDB() {
      localStorage.setItem("tasks", JSON.stringify(this.allTasks));
    },
    getTasksFromDB() {
      let tasks = localStorage.getItem("tasks");
      tasks = JSON.parse(tasks);
      this.allTasks = tasks;
    },

    // If app doesn't have any task push dummy tasks to showcase
    checkTasks() {
      if (!this.allTasks) {
        this.allTasks = [...DummyTasks];
      } else {
        const hasTask = this.allTasks.every((list) => list.tasks.length <= 0);

        if (hasTask) {
          this.allTasks = [...DummyTasks];
        }
      }
    },
  },
});
