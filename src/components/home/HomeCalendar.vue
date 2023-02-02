<template>
  <header>
    <span class="material-symbols-rounded home"> home </span>
    <div class="today">
      <p>{{ day }}</p>
      <p>{{ dayName }}</p>
      <p>{{ month }}</p>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from "vue";

const date = ref(new Date());

const day = computed(() => date.value.getDate());
const dayName = computed(() =>
  date.value.toLocaleString("en-us", { weekday: "long" })
);
const month = computed(() =>
  date.value.toLocaleString("en-us", { month: "long" })
);
</script>

<style lang="scss" scoped>
header {
  background-color: var(--background-color-2);
  .home {
    font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
    font-size: 5rem;
    color: var(--main-dark-blue-color);
  }
}
</style>
