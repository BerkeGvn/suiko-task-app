<template>
  <div class="task-list">
    <TransitionGroup appear name="tasks" tag="ul">
      <TaskCard
        v-for="task in props.tasks"
        :key="task.id"
        :list="props.getListDetails(task.id)"
      >
        <template #checkbox>
          <input
            type="checkbox"
            name="isDone"
            :id="task.id"
            class="checkbox-isDone"
            :checked="task.isDone"
            @change="toggleDone(task.id)"
          />
          <label class="label-isDone" :for="task.id"></label>
        </template>
        <template #default>
          <p>
            {{ task.title }}
          </p>
          <div>
            <p>
              {{ task.desc }}
            </p>
            <p v-if="!props.home">
              {{ task.date }}
            </p>
          </div>
        </template>
        <template #badge-delete>
          <!--list prop coombines store action with task id prop to get correct badge-->
          <ListBadge
            :taskId="task.id"
            :list="props.getListDetails(task.id)"
          ></ListBadge>
          <button class="delete-button" @click="deleteTask(task.id)">
            <span class="material-symbols-rounded delete-icon"> delete </span>
          </button>
        </template>
      </TaskCard>
    </TransitionGroup>
    <NoTask v-if="!props.tasks || props.tasks.length <= 0"></NoTask>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const NoTask = defineAsyncComponent(() => import("../ui/NoTask.vue"));
const props = defineProps(["tasks", "home", "getListDetails"]);
const emit = defineEmits(["deleteTask", "toggleDone"]);
// Task actions are in parent component Home/Selectedlist/Calendar
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
input[type="checkbox"] {
  display: none;

  & + label {
    display: inline-block;
    height: 3rem;
    width: 3rem;
    border: #cfd4e2 1px solid;
    border-radius: 50%;
    background-color: var(--background-color-1);
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 7px;
      height: 15px;
      border-right: 3px solid var(--background-color-1);
      border-bottom: 3px solid var(--background-color-1);
      top: 44%;
      left: 50%;
      transform: translate(-50%, -50%) rotateZ(40deg) scale(2);
      opacity: 0;
      transition: all 0.4s;
    }
  }
  &:checked + label {
    background-color: #f13b1c;
    border: none;
  }
  &:checked + label::after {
    transform: translate(-50%, -50%) rotateZ(40deg) scale(1);
    opacity: 1;
  }
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
