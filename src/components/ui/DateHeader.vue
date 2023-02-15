<template>
  <div class="date">
    <h1 :class="{ today: props.today }">{{ dateDisplay.day }}</h1>
    <h2 class="sub-date">
      {{ dateDisplay.month }}
      <span>
        {{ dateDisplay.dayName }}
      </span>
    </h2>
  </div>
</template>

<script setup>
import { computed } from "vue";
// today prop from home view
const props = defineProps(["date", "today"]);
const dateDisplay = computed(() => {
  const day = props.date.toLocaleString("en-GB", { day: "numeric" });
  const dayName = props.date.toLocaleString("en-GB", { weekday: "long" });
  const month = props.date.toLocaleString("en-GB", { month: "long" });
  return { day, dayName, month };
});
</script>

<style lang="scss" scoped>
.date {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  & p {
    grid-area: today;
    align-self: end;
  }
  & h1 {
    font-size: 6rem;
    position: relative;
    line-height: 1.8;
  }
  & h2 {
    font-size: 3.1rem;
    line-height: 0.9;
    & span {
      display: block;
      font-size: var(--header-font-size);
      font-weight: 400;
    }
  }
  & .today {
    &::after {
      content: "Today";
      position: absolute;
      left: 0;
      width: 100%;
      text-align: center;
      font-size: var(--normal-font-size);
      font-weight: 400;
      color: var(--text-color-3);
    }
    //to get closer to today text
  }
}
</style>
