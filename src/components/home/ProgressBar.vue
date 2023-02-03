<template>
  <div>
    <p>You have {{ props.taskNum }} task today.</p>
  </div>
</template>

<script setup>
const props = defineProps(["taskNum"]);
</script>

<style lang="scss" scoped>
div {
  width: 90%;
  height: 12rem;
  background-color: var(--main-dark-blue-color);
  margin: 2rem 0;
  border-radius: 10px;
  font-size: var(--normal-font-size);
  color: var(--text-color-2);
}
</style>
