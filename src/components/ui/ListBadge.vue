<template>
  <p :class="`badge ${props.listName}`">
    <span></span>
    {{ formatText(props.listName) }}
  </p>
</template>

<script setup>
const props = defineProps(["listName"]);
function formatText(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
</script>

<style lang="scss" scoped>
.badge {
  font-size: var(--small-font-size);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  min-width: 7rem;
  text-align: center;
  color: var(--text-color-2);
}
.personal {
  background-color: var(--main-blue-color);
}
.work {
  background-color: var(--main-red-color);
}
.home {
  background-color: var(--main-green-color);
}
</style>
