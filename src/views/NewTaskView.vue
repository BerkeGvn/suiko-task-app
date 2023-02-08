<template>
  <div class="page background-blob">
    <PageHeader :icon="'add_circle'" :headerText="'New Task'"></PageHeader>
    <NewTaskForm
      :categories="listNames"
      @submitTaskForm="submitTaskForm"
    ></NewTaskForm>
  </div>
</template>

<script setup>
import NewTaskForm from "../components/task/NewTaskForm.vue";
import { useTaskStore } from "../stores/tasks";
import { computed } from "vue";
const store = useTaskStore();
const listNames = computed(() => store.listNames);

function submitTaskForm(task) {
  store.addNewTask(task);
}
</script>

<style lang="scss" scoped></style>
