<template>
  <nav>
    <router-link to="/home">
      <span class="material-symbols-rounded home"> home </span>
    </router-link>
    <router-link to="/AllTasks">
      <span class="material-symbols-rounded list"> list_alt </span>
    </router-link>
    <router-link to="/newTask">
      <span class="material-symbols-rounded circle"> add_circle </span>
    </router-link>
    <router-link to="/calendar">
      <span class="material-symbols-rounded calendar"> calendar_month </span>
    </router-link>
    <router-link to="/profile">
      <span class="material-symbols-rounded person"> person </span>
    </router-link>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
nav {
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 0.2rem;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.09);
  border-radius: 10px 10px 0px 0px;
  color: var(--icon-color);
  background-color: var(--background-color-1);
  z-index: 10;
  & .router-link-exact-active {
    color: var(--main-orange-color);
  }
  & .material-symbols-rounded {
    font-size: 2.5rem;
  }
  .home,
  .circle {
    font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
  }
  .circle {
    color: var(--main-orange-color);
    font-size: 5rem;
  }
}
</style>
