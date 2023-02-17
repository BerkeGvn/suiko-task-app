<template>
  <div class="progress">
    <div class="progress-cirlce">
      <!-- inline style of progress circle's inner bar -->
      <div
        class="progress-cirlce-outer progress-bar"
        :style="{
          background: `conic-gradient(#f13b1c ${percentage * 3.6}deg,
          #fafafa ${percentage * 3.6}deg
          )`,
        }"
      >
        <div class="progress-cirlce-inner">
          <div class="progress-cirlce-percentage">{{ percentage }}%</div>
        </div>
      </div>
      <p>{{ `${props.day}'s progress` }}</p>
    </div>
    <div class="progress-text">
      <p>Let's to do this!</p>
      <p v-if="taskPercentage >= 100">
        Congratulations! You completed all your tasks!
      </p>

      <p v-else>
        {{
          `You have ${taskNum} ${taskNum > 1 ? "tasks" : "task"} ${selectedDay}`
        }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";

const props = defineProps(["taskNum", "taskDone", "day"]);

// Checking selected day for display
const selectedDay = computed(() =>
  props.day === "Today" ? "today" : `on ${props.day}`
);

// initial percentage of task percentage
let percentage = ref(0);

// total percentage of done task to total tasks
const taskPercentage = computed(() =>
  ((props.taskDone / props.taskNum) * 100).toFixed()
);

// interval for animation of percentage bar + text
function progresser(value) {
  const progress = setInterval(() => {
    if (props.taskNum == 0) {
      clearInterval(progress);
      percentage.value = 0;
    } else {
      if (value <= percentage.value) {
        percentage.value -= 1;
        if (percentage.value == value) {
          clearInterval(progress);
        }
      } else {
        percentage.value += 1;
        if (percentage.value == value) {
          clearInterval(progress);
        }
      }
    }
  }, 10);
}
progresser(taskPercentage.value);

// watching task percentage for reactive percentage bar + text
watch(taskPercentage, (newValue) => {
  progresser(newValue);
});
</script>

<style lang="scss" scoped>
@import "../../assets/scss/breakpoints.scss";
.progress {
  width: 100%;
  padding: 1rem;
  background-color: var(--main-dark-blue-color);
  margin-bottom: 2rem;
  border-radius: 10px;
  font-size: var(--normal-font-size);
  color: var(--text-color-2);
  display: flex;
  justify-content: space-evenly;
  min-height: 17rem;
  gap: 1rem;

  &-cirlce {
    width: 12rem;
    height: 12rem;
    position: relative;
    &-outer {
      width: 12rem;
      height: 12rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 1s ease-in;
    }
    &-inner {
      background-color: var(--main-dark-blue-color);
      width: 80%;
      height: 80%;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    & p {
      width: 90%;
      color: #a7bcf2;
      text-align: center;
      font-size: var(--small-font-size);
    }
  }
  &-text {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    text-align: center;
    justify-content: space-evenly;
  }
  @media only screen and (min-width: $bp-small) {
    width: 70%;
  }
  @media only screen and (min-width: $bp-medium) {
    width: 30%;
    flex-direction: column;
    align-items: center;
    gap: 10rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
    &-cirlce {
      width: 16rem;
      height: 16rem;
      &-outer {
        width: 16rem;
        height: 16rem;
      }
    }
  }
}
</style>
