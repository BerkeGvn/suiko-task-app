<template>
  <div class="no-task">
    <img
      src="../../assets/png-svg/no-task-small.png"
      alt="no task illustration"
    />
    <p>
      Looks like you don't have any task. Or you already completed all your
      tasks!
    </p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.no-task {
  text-align: center;
  img {
    width: 100%;
  }
  p {
    font-size: var(--normal-font-size);
  }
}
</style>
