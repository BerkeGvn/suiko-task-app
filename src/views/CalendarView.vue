<template>
  <div class="page background-blob calendar">
    <PageHeader :icon="'calendar_month'" :headerText="'Calendar'"></PageHeader>
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
      <h2 class="date-display">
        {{ dateDisplay }}
      </h2>
    </div>

    <p v-if="selectedDateTasks.length <= 0">You have no tasks</p>
    <TaskList
      :tasks="selectedDateTasks"
      @deleteTask="deleteTask"
      @toggleDone="toggleDone"
    ></TaskList>
  </div>
</template>

<script setup>
import "v-calendar/dist/style.css";
import { DatePicker } from "v-calendar";
import { useTaskStore } from "../stores/tasks";
import { ref, computed, provide, watchEffect } from "vue";
import TaskList from "../components/task/TaskList.vue";

const store = useTaskStore();
const tasks = computed(() => store.getAllTasks);

const date = ref(new Date().toLocaleDateString("en-GB"));
let selectedDateTasks = ref(store.getTasksFromDate(date.value));

watchEffect(() => {
  selectedDateTasks = ref(store.getTasksFromDate(date.value));
});

provide("getListDetails", store.getListDetails);
function deleteTask(taskId) {
  store.deleteTask(taskId);
}
function toggleDone(taskId) {
  store.toggleTaskIsDone(taskId);
}

const dateDisplay = computed(() => {
  const longDate = formatDate(date.value);
  return longDate.toLocaleString("en-gb", {
    year: "numeric",
    day: "numeric",
    month: "long",
    weekday: "long",
  });
});

// for formatting string date to Date
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
    margin: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & .date-display {
    font-size: var(--normal-font-size);
  }
}
</style>
