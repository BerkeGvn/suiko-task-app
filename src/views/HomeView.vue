<template>
  <HomeCalendar></HomeCalendar>
  <main>
    <ProgressBar :taskNum="tasks.length"></ProgressBar>
    <li v-for="task in tasks" :key="task.id">
      <p :class="{ done: task.isDone }">
        {{ task.title }}
      </p>
      <p>
        {{ task.desc }}
      </p>
    </li>
    <TaskList></TaskList>
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
}
p {
  font-size: 2rem;
}
.done {
  color: red;
}
</style>
