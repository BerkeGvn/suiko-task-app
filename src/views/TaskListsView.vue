<template>
  <div class="page background-blob task-lists">
    <header class="task-lists-header">
      <span class="material-symbols-rounded"> arrow_back </span>
      <h1>
        <span class="material-symbols-rounded list"> list_alt </span>Task List
      </h1>
    </header>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.task-lists {
  font-size: 1.6rem;
  &-header {
    display: flex;
    align-items: center;

    & h1 {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      font-size: var(--header-font-size);
    }
    .material-symbols-rounded {
      font-size: 3.2rem;
    }
  }
}
</style>
