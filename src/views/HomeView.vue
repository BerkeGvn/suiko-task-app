<template>
  <HomeCalendar></HomeCalendar>
  <main>
    <ProgressBar :taskNum="tasks.length"></ProgressBar>
    <TaskList
      :tasks="tasks"
      @deleteTask="deleteTask"
      @toggleDone="toggleDone"
    ></TaskList>
  </main>
</template>

<script setup>
import HomeCalendar from "../components/home/HomeCalendar.vue";
import ProgressBar from "../components/home/ProgressBar.vue";
import TaskList from "../components/task/TaskList.vue";
import { useTaskStore } from "../stores/tasks";
import { computed, provide } from "vue";

const store = useTaskStore();
const tasks = computed(() => store.todaysTasks);
function deleteTask(taskId) {
  store.deleteTask(taskId);
}
function toggleDone(taskId) {
  store.toggleTaskIsDone(taskId);
}
// Sending action to ListBadge.vue to get correct list badges
provide("getListDetails", store.getListDetails);
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 2rem 8rem 2rem;
}
p {
  font-size: 2rem;
}
.done {
  color: red;
}
</style>
