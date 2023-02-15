<template>
  <div class="page">
    <PageHeader :icon="'calendar_month'" :headerText="'Calendar'"></PageHeader>
    <section class="calendar">
      <div class="calendar-section">
        <DatePicker
          locale="en-GB"
          is-expanded
          :attributes="attributes"
          v-model="date"
          color="red"
          :model-config="modelConfig"
        >
        </DatePicker>
        <DateHeader v-if="date" :date="dateDisplay"></DateHeader>
      </div>
      <div class="no-task" v-if="selectedDateTasks.length <= 0">
        <p>Oh, seems you don't have any task.</p>
        <p>
          Click <router-link to="/newTask">here</router-link> to add a new task!
        </p>
      </div>
      <TaskList
        v-else
        :tasks="selectedDateTasks"
        @deleteTask="deleteTask"
        @toggleDone="toggleDone"
        :getListDetails="store.getListDetails"
      ></TaskList>
    </section>
  </div>
</template>

<script setup>
import "v-calendar/dist/style.css";
import { DatePicker } from "v-calendar";
import { useTaskStore } from "../stores/tasks";
import { ref, computed, watchEffect } from "vue";
import TaskList from "../components/task/TaskList.vue";
import DateHeader from "../components/ui/DateHeader.vue";

const store = useTaskStore();
const tasks = computed(() => store.getAllTasks);
const today = new Date().toLocaleDateString("en-GB");
const date = ref(today);
let selectedDateTasks = ref(store.getTasksFromDate(date.value));

// if date changes on calendar list changes too
watchEffect(() => {
  selectedDateTasks = ref(store.getTasksFromDate(date.value));
});
console.log(selectedDateTasks.value);
function deleteTask(taskId) {
  store.deleteTask(taskId);
}
function toggleDone(taskId) {
  store.toggleTaskIsDone(taskId);
}

const dateDisplay = computed(() => {
  return formatDate(date.value);
});

// for formatting string date to new Date()
function formatDate(date) {
  const [day, month, year] = date.split("/");
  return new Date(+year, +month - 1, +day);
}
// Settings for format of v-calendar
const modelConfig = ref({
  type: "string",
  mask: "DD/MM/YYYY",
});
const attributes = computed(() => {
  return [
    ...tasks.value.map((task) => ({
      dates: formatDate(task.date),
      bar: {
        style: {
          backgroundColor: "#f13b1c",
        },
      },
      popover: {
        label: task.title,
        visibility: "hover",
      },
      customData: task,
    })),
  ];
});
</script>

<style lang="scss" scoped>
.calendar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  & .calendar-section {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & .date-display {
    font-size: var(--normal-font-size);
  }
  & .no-task {
    font-size: var(--normal-font-size);
    text-align: center;
    & a {
      color: var(--main-orange-color);
    }
  }
}
</style>
