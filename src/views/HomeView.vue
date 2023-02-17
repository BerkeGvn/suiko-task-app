<template>
  <div class="homepage">
    <div class="homepage-header">
      <div class="main-logo">
        <svg
          width="37"
          height="27"
          version="1.1"
          viewBox="0 0 28.917 21.102"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            transform="matrix(.817 0 0 1.0208 -29.884 -89.969)"
            stroke-linejoin="round"
          >
            <g transform="matrix(1.1759 0 0 1.1274 -36.075 -14.488)">
              <g
                transform="translate(-3.2249 2.0773)"
                fill="none"
                stroke="#f03b1c"
                stroke-linecap="round"
                stroke-linejoin="miter"
              >
                <path
                  d="m66.085 98.145 6.4934 5.5263"
                  stroke-width="1.5631px"
                />
                <path
                  d="m72.708 103.71 11.831-13.784"
                  stroke-width="1.6346px"
                />
              </g>
            </g>
            <g
              transform="matrix(-1.1759 0 0 -1.1274 144.69 211.43)"
              stroke-linejoin="round"
            >
              <g
                transform="translate(-3.2249 2.0773)"
                fill="none"
                stroke="#122c6f"
                stroke-linecap="round"
                stroke-linejoin="miter"
              >
                <path
                  d="m66.085 98.145 6.4934 5.5263"
                  stroke-width="1.5631px"
                />
                <path
                  d="m72.708 103.71 11.831-13.784"
                  stroke-width="1.6346px"
                />
              </g>
            </g>
          </g>
        </svg>
        <span>Suiko</span>
      </div>
      <HomeCalendar></HomeCalendar>
      <WeekCalendar @getSelectedDate="getSelectedDate"></WeekCalendar>
    </div>
    <main>
      <ProgressBar
        :taskNum="selectedTasks.length"
        :taskDone="tasksDone.length"
        :day="day"
      ></ProgressBar>
      <TaskList
        :tasks="selectedTasks"
        :home="true"
        @deleteTask="deleteTask"
        @toggleDone="toggleDone"
        :getListDetails="store.getListDetails"
      ></TaskList>
    </main>
  </div>
</template>

<script setup>
import HomeCalendar from "../components/home/HomeCalendar.vue";
import ProgressBar from "../components/home/ProgressBar.vue";
import TaskList from "../components/task/TaskList.vue";
import { useTaskStore } from "../stores/tasks";
import { ref, computed } from "vue";
import WeekCalendar from "../components/home/WeekCalendar.vue";

const store = useTaskStore();
const today = new Date().toLocaleDateString("en-GB");
const date = ref(today);
// day for display on progress circle
const day = ref("Today");
// when date updates, task list updates too
let selectedTasks = computed({
  get: () => store.getTasksFromDate(date.value),
  set: (newDate) => store.getTasksFromDate(newDate),
});

const tasksDone = computed(() =>
  selectedTasks.value.filter((task) => task.isDone)
);
function deleteTask(taskId) {
  store.deleteTask(taskId);
}
function toggleDone(taskId) {
  store.toggleTaskIsDone(taskId);
}
//this emit updates date
function getSelectedDate(selectedDate) {
  date.value = selectedDate.date;
  // getting day for displaying in progress bar
  if (selectedDate.date == today) {
    day.value = "Today";
  } else {
    day.value = selectedDate.day;
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/breakpoints.scss";
.homepage {
  position: relative;
  background: linear-gradient(#fafafa, #fafafa);
  & .main-logo {
    position: absolute;
    display: flex;
    align-items: center;
    left: 50%;
    top: 1rem;
    font-size: var(--header-font-size);
    font-weight: 600;
    color: var(--main-orange-color);
    transform: translateX(-50%);
    & span {
      margin-left: 1rem;
    }
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 2rem 8rem 2rem;
    min-height: 70vh;
    //test
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.09);
    border-radius: 20px 20px 0 0;
    background-color: #fafafa;
  }
  p {
    font-size: 2rem;
  }
  @media only screen and (min-width: $bp-medium) {
    padding-left: 10rem;
    padding-right: 5rem;
    background: inherit;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23CFD4E2' d='M48.8 -66.5C59.7 -59.2 62.7 -40.2 63.5 -23.9C64.4 -7.5 63.1 6.3 60.5 21.3C57.9 36.4 54 52.7 43.7 60.6C33.4 68.5 16.7 67.9 2.3 64.8C-12.2 61.7 -24.3 55.9 -39.9 49.8C-55.6 43.6 -74.7 37 -82.1 24.3C-89.6 11.5 -85.3 -7.4 -79.3 -25.7C-73.3 -44.1 -65.5 -61.7 -52 -68.2C-38.5 -74.7 -19.2 -70 -0.2 -69.8C18.9 -69.6 37.8 -73.8 48.8 -66.5Z' transform='translate(100 100)' /%3E%3C/svg%3E");
    background-position: left;
    & main {
      background-color: inherit;
      box-shadow: none;
      border-radius: 0;
      flex-direction: row-reverse;
      align-items: flex-start;
      gap: 2rem;
      padding: 4rem 0 8rem 0;
    }
  }
}
</style>
