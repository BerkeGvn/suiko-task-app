<template>
  <li>
    <div class="checkbox">
      <slot name="checkbox"></slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <div class="badges-delete">
      <slot name="badge-delete"></slot>
    </div>
  </li>
</template>

<script setup></script>

<style lang="scss" scoped>
li {
  position: relative;
  background-color: var(--background-color-2);
  display: flex;
  gap: 2rem;
  padding: 2rem;
  border-radius: 10px;
  margin: auto;
  margin-bottom: 2rem;
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 50vw;
  }
  & .checkbox {
    align-self: center;
  }
  & .main {
    font-size: var(--normal-font-size);
    font-weight: 500;
    margin-right: auto;
    & :last-child {
      color: var(--text-color-3);
      font-size: var(--small-font-size);
    }
  }
  & .badges-delete {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: -1rem;
    margin-bottom: -2rem;
  }
}
</style>
