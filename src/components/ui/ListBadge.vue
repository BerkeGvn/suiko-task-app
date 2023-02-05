<template>
  <p class="badge">
    <span></span>
    {{ formatText(listDetails.name) }}
  </p>
</template>

<script setup>
import { ref, inject, computed } from "vue";

const props = defineProps(["taskId"]);

const getListDetails = inject("getListDetails");
// Combine injected action with task id prop to get correct badge
const listDetails = computed(() => getListDetails(props.taskId));
const color = ref(listDetails.value.color);

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
  background-color: v-bind(color);
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
