<template>
  <div class="task-card">
    <TaskCard v-for="task in props.tasks" :key="task.id">
      <template #checkbox>
        <label for="">
          <input type="checkbox" name="isDone" id="isDone" />
        </label>
      </template>
      <template #default>
        <p :class="{ done: task.isDone }">
          {{ task.title }}
        </p>
        <p>
          {{ task.desc }}
        </p>
      </template>
      <template #badge-delete>
        <ListBadge :listName="store.getListName(task.id)"></ListBadge>
        <button class="delete-button" @click="store.deleteTask(task.id)">
          <span class="material-symbols-rounded delete-icon"> delete </span>
        </button>
      </template>
    </TaskCard>
  </div>
</template>

<script setup>
import { useTaskStore } from "../../stores/tasks";
const props = defineProps(["tasks"]);
const store = useTaskStore();
</script>

<style lang="scss" scoped></style>
