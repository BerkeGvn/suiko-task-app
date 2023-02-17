<template>
  <div class="task-list">
    <TransitionGroup appear name="tasks" tag="ul" @before-leave="onBeforeLeave">
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

function onBeforeLeave(el) {
  const { marginLeft, marginTop, width, height } = window.getComputedStyle(el);

  el.style.left = `${el.offsetLeft - parseFloat(marginLeft, 10)}px`;
  el.style.top = `${el.offsetTop - parseFloat(marginTop, 10)}px`;
  el.style.width = width;
  el.style.height = height;
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/breakpoints.scss";
.task-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: all 0.5s;
  position: relative;
  ul {
    position: relative;
    width: 100%;
    transition: all 0.5s;
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

  .tasks-leave-active {
    position: absolute;
  }
  @media only screen and (min-width: $bp-small) {
    width: 70%;
  }
  @media only screen and (min-width: $bp-medium) {
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem 2rem;
    }
    .tasks-move, /* apply transition to moving elements */
.tasks-enter-active,
.tasks-leave-active {
      transition: all 0.5s;
    }

    .tasks-enter-from,
    .tasks-leave-to {
      opacity: 0;
    }

    .tasks-leave-active {
      position: absolute;
    }
  }
}
</style>
