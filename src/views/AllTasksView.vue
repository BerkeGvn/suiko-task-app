<template>
  <div class="page background-blob task-lists">
    <PageHeader :icon="'list_alt'" :headerText="'Task List'"></PageHeader>
    <AllTasksList :allTasks="allTasks" @deleteList="deleteList"></AllTasksList>
    <button @click="newListForm = true" class="create-button fixed-task-button">
      <span class="material-symbols-rounded circle"> add_circle </span>
      New task list
    </button>
    <!-- backdrop for prevent clicking background -->
    <div v-if="newListForm" class="backdrop"></div>
    <Transition>
      <NewList
        @submitNewList="submitNewList"
        @cancelSubmit="cancelSubmit"
        v-if="newListForm"
      ></NewList>
    </Transition>
  </div>
</template>

<script setup>
import AllTasksList from "../components/task/AllTasksList.vue";
import { useTaskStore } from "../stores/tasks";
import { ref, computed } from "vue";
import NewList from "../components/task/NewList.vue";

const newListForm = ref(false);
const store = useTaskStore();
// to the list page for stored task details
const allTasks = computed(() => store.allListDetails);
function deleteList(listId) {
  store.deleteList(listId);
}
function submitNewList(list) {
  const newList = {
    name: list.name,
    color: list.color,
    tasks: [],
  };
  store.createNewList(newList);
  newListForm.value = false;
}
function cancelSubmit() {
  newListForm.value = false;
}
</script>

<style lang="scss" scoped>
.task-lists {
  font-size: 1.6rem;
  position: relative;
}
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  z-index: 5;
}
.v-enter-active,
.v-leave-active {
  transition: transform 0.5s;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(100%);
}
</style>
