<template>
  <NavBar></NavBar>
  <div class="background-blob">
    <router-view v-slot="{ Component }">
      <transition mode="out-in" name="page">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import NavBar from "./components/nav/NavBar.vue";
/* import { onMounted } from "vue";
import { useTaskStore } from "./stores/tasks";
const store = useTaskStore();
onMounted(() => {
  store.getTasksFromDB();
}); */
</script>

<style lang="scss" scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
