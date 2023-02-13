<template>
  <div class="progress">
    <div class="progress-cirlce">
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
    </div>
    <p>You have {{ taskNum }} task today.</p>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";

const props = defineProps(["taskNum", "taskDone"]);

// initial percentage of task percentage
let percentage = ref(0);

// total percentage of done task to total tasks
const taskPercentage = computed(() =>
  ((props.taskDone / props.taskNum) * 100).toFixed()
);

// for animation of percentage bar + text
const progress = setInterval(() => {
  if (props.taskNum == 0) {
    clearInterval(progress);
    percentage.value = 0;
  } else {
    percentage.value += 1;
    if (percentage.value == taskPercentage.value) {
      clearInterval(progress);
    }
  }
}, 10);

// watching task percentage for reactive percentage bar + text
watch(taskPercentage, (newValue) => {
  const progress = setInterval(() => {
    if (props.taskNum == 0) {
      clearInterval(progress);
      percentage.value = 0;
    } else {
      if (newValue <= percentage.value) {
        percentage.value -= 1;
        if (percentage.value == newValue) {
          clearInterval(progress);
        }
      } else {
        percentage.value += 1;
        if (percentage.value == newValue) {
          clearInterval(progress);
        }
      }
    }
  }, 10);
});
</script>

<style lang="scss" scoped>
.progress {
  width: 100%;
  padding: 1rem;
  background-color: var(--main-dark-blue-color);
  margin: 2rem 0;
  border-radius: 10px;
  font-size: var(--normal-font-size);
  color: var(--text-color-2);
  display: flex;
  align-items: center;
  gap: 1rem;
  &-cirlce {
    width: 12rem;
    height: 12rem;
    position: relative;
    &-outer {
      width: 100%;
      height: 100%;
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
  }
}
</style>
