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
        <ListBadge :taskId="task.id"></ListBadge>
        <button class="delete-button" @click="deleteTask(task.id)">
          <span class="material-symbols-rounded delete-icon"> delete </span>
        </button>
      </template>
    </TaskCard>
  </div>
</template>

<script setup>
const props = defineProps(["tasks"]);
const emit = defineEmits(["deleteTask"]);
function deleteTask(taskId) {
  emit("deleteTask", taskId);
}
</script>

<style lang="scss" scoped></style>
