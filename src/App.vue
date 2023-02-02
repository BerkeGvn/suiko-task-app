<template>
  <NavBar></NavBar>
  <router-view></router-view>
</template>

<script setup>
import NavBar from "./components/nav/NavBar.vue";
</script>

<style lang="scss" scoped>
h1 {
  color: var(--main-red-color);
  font-size: var(--header-font-size);
}
</style>
