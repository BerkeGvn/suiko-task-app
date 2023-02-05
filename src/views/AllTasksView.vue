<template>
  <div class="page background-blob task-lists">
    <PageHeader :icon="'list_alt'" :headerText="'Task List'"></PageHeader>
    <AllTasksList :allTasks="allTasks" @deleteList="deleteList"></AllTasksList>
  </div>
</template>

<script setup>
import AllTasksList from "../components/task/AllTasksList.vue";
import { useTaskStore } from "../stores/tasks";
import { computed } from "vue";
const store = useTaskStore();
// to the list page for stored task details
const allTasks = computed(() => store.allListDetails);
function deleteList(listId) {
  store.deleteList(listId);
}
</script>

<style lang="scss" scoped>
.task-lists {
  font-size: 1.6rem;
}
</style>
