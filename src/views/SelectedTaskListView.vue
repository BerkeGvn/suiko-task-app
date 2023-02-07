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
  </div>
</template>

<script setup>
import { provide } from "vue";
import { useTaskStore } from "../stores/tasks";
import { useRouter } from "vue-router";
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
</script>

<style lang="scss" scoped></style>
