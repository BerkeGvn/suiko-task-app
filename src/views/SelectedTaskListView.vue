<template>
  <div class="page background-blob selected-list">
    <PageHeader
      :icon="'checklist_rtl'"
      :headerText="props.listName"
    ></PageHeader>

    <TaskList
      :tasks="taskList.tasks"
      @deleteTask="deleteTask"
      @toggleDone="toggleDone"
    ></TaskList>
    <router-link to="/newTask">
      <button
        @click="newListForm = true"
        class="create-button fixed-task-button"
      >
        <span class="material-symbols-rounded circle"> add_circle </span> Add
        new task
      </button>
    </router-link>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { useTaskStore } from "../stores/tasks";
import { useRouter, onBeforeRouteLeave } from "vue-router";
import TaskList from "../components/task/TaskList.vue";

const props = defineProps(["listName"]);
const router = useRouter();
const store = useTaskStore();
const taskList = store.getSelectedTaskList(props.listName);
provide("getListDetails", store.getListDetails);

if (!taskList) {
  router.push("/home");
}
function deleteTask(taskId) {
  store.deleteTask(taskId);
}
function toggleDone(taskId) {
  store.toggleTaskIsDone(taskId);
}

// when adding task from selected list, this automaticly adds list name as a query
onBeforeRouteLeave((to, from, next) => {
  if (to.fullPath === "/newTask") {
    return next({
      path: "/newTask",
      query: {
        list: from.params.listName,
      },
    });
  } else {
    next();
  }
});
</script>

<style lang="scss" scoped>
.selected-list {
  position: relative;
}
</style>
