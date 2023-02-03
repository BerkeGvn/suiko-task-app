<template>
  <header>
    <div class="home-icon">
      <span class="material-symbols-rounded home"> home </span>
    </div>
    <div class="today-date">
      <h1>{{ day }}</h1>
      <h2 class="sub-date">
        {{ month }}
        <span>
          {{ dayName }}
        </span>
      </h2>
      <!--   <h3 class="sub-date">{{ dayName }}</h3> -->
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from "vue";

const date = ref(new Date());

const day = computed(() => date.value.getDate());
const dayName = computed(() =>
  date.value.toLocaleString("en-GB", { weekday: "long" })
);
const month = computed(() =>
  date.value.toLocaleString("en-GB", { month: "long" })
);
</script>

<style lang="scss" scoped>
header {
  background-color: var(--background-color-2);
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & .home {
    font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
    font-size: 5rem;
    color: var(--main-dark-blue-color);
  }
  & .today-date {
    display: flex;
    gap: 1rem;
    align-items: center;
    & p {
      grid-area: today;
      align-self: end;
    }
    & h1 {
      font-size: 4rem;
      position: relative;
      line-height: 1.8;
      &::after {
        content: "Today";
        position: absolute;
        left: 0;
        width: 100%;
        text-align: center;
        font-size: var(--small-font-size);
        font-weight: 400;
        color: var(--text-color-3);
      }
      //to get closer to today text
    }
    & h2 {
      font-size: var(--header-font-size);
      line-height: 0.9;
      & span {
        display: block;
        font-size: var(--normal-font-size);
        font-weight: 400;
      }
    }
    & h3 {
      grid-area: dayname;
      justify-self: baseline;
      margin-top: -0.5rem;
    }
  }
}

header {
  background-color: var(--background-color-2);
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & .home {
    font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
    font-size: 5rem;
    color: var(--main-dark-blue-color);
  }
  & .today-date {
    display: flex;
    gap: 1rem;
    align-items: center;
    & p {
      grid-area: today;
      align-self: end;
    }
    & h1 {
      font-size: 4rem;
      position: relative;
      line-height: 1.8;
      &::after {
        content: "Today";
        position: absolute;
        left: 0;
        width: 100%;
        text-align: center;
        font-size: var(--small-font-size);
        font-weight: 400;
        color: var(--text-color-3);
      }
      //to get closer to today text
    }
    & h2 {
      font-size: var(--header-font-size);
      line-height: 0.9;
      & span {
        display: block;
        font-size: var(--normal-font-size);
        font-weight: 400;
      }
    }
    & h3 {
      grid-area: dayname;
      justify-self: baseline;
      margin-top: -0.5rem;
    }
  }
}
</style>
