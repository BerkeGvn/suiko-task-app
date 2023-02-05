<template>
  <HomeCalendar></HomeCalendar>
  <main>
    <ProgressBar :taskNum="tasks.length"></ProgressBar>
    <TaskList :tasks="tasks"></TaskList>
  </main>
</template>

<script setup>
import HomeCalendar from "../components/home/HomeCalendar.vue";
import ProgressBar from "../components/home/ProgressBar.vue";
import TaskList from "../components/task/TaskList.vue";
import { useTaskStore } from "../stores/tasks";
import { computed } from "vue";

const store = useTaskStore();
const tasks = computed(() => store.todaysTasks);
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
