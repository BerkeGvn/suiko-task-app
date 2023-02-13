<template>
  <div class="task-list">
    <TransitionGroup name="tasks" tag="ul">
      <TaskCard v-for="task in props.tasks" :key="task.id">
        <template #checkbox>
          <label class="label-isDone" :for="task.title">
            <input
              type="checkbox"
              name="isDone"
              :id="task.title"
              class="checkbox-isDone"
              :checked="task.isDone"
              @change="toggleDone(task.id)"
            />
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
    </TransitionGroup>
  </div>
</template>

<script setup>
const props = defineProps(["tasks"]);
const emit = defineEmits(["deleteTask", "toggleDone"]);
function deleteTask(taskId) {
  emit("deleteTask", taskId);
}
function toggleDone(taskId) {
  emit("toggleDone", taskId);
}
</script>

<style lang="scss" scoped>
.task-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
ul {
  position: relative;
  width: 100%;
}
.done {
  color: red;
}

.tasks-move, /* apply transition to moving elements */
.tasks-enter-active,
.tasks-leave-active {
  transition: all 0.5s;
}

.tasks-enter-from,
.tasks-leave-to {
  opacity: 0;
  transform: translateY(20rem) scale(0.7);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.tasks-leave-active {
  position: absolute;
}
</style>
