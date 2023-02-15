<template>
  <p class="badge">
    <span></span>
    {{ formatText(props.list.name) }}
  </p>
</template>

<script setup>
import { ref } from "vue";
import { formatText } from "../../assets/helpers";

const props = defineProps(["list"]);
const color = ref(props.list.color);
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
