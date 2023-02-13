<template>
  <header>
    <div class="home-icon">
      <span class="material-symbols-rounded home"> home </span>
    </div>
    <DateHeader :date="date" :today="true"></DateHeader>
  </header>
</template>

<script setup>
import { ref } from "vue";
import DateHeader from "../ui/DateHeader.vue";

const date = ref(new Date());
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
}
</style>
