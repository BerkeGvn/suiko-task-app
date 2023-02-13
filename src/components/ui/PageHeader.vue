<template>
  <header class="header">
    <button @click="goToPrevious">
      <span class="material-symbols-rounded"> arrow_back </span>
    </button>
    <h1>
      <span class="material-symbols-rounded"> {{ props.icon }} </span
      >{{ props.headerText }}
    </h1>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";
const props = defineProps(["icon", "headerText"]);
const router = useRouter();
function goToPrevious() {
  router.go(-1);
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  & h1 {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: var(--header-font-size);
  }
  & .material-symbols-rounded {
    font-size: 3.2rem;
  }

  & button {
    border: none;
    background-color: transparent;
  }
}
</style>
