<template>
  <li class="card">
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

<script setup>
import { ref } from "vue";

const props = defineProps(["list"]);

const color = ref(props.list.color);
</script>

<style lang="scss" scoped>
@import "../../assets/scss/breakpoints.scss";
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
  min-width: 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 1rem;
    height: 100%;
    background-color: v-bind(color);
    top: 0;
    left: 0;
    border-radius: 1rem 0 0 1rem;
  }

  & .checkbox {
    align-self: center;
  }
  & .main {
    font-size: var(--normal-font-size);
    font-weight: 500;
    margin-right: auto;
    // card description`
    & :last-child {
      color: var(--text-color-3);
      font-size: var(--small-font-size);
      // card date
      & :not(:first-child) {
        font-size: 0.9rem;
        margin-top: 0.5rem;
      }
    }
  }
  & .badges-delete {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: -1rem;
    margin-bottom: -0.5rem;
  }
  @media only screen and (min-width: $bp-medium) {
    height: 100%;
    border-radius: 0 10px 0 0;
    box-shadow: 1px -2px 1px #cfd4e2;
    &::before {
      width: 1%;
      height: 100%;
      left: -0.3rem;
      border-radius: 20px 0 0 20px;
    }
    &::after {
      content: "";
      position: absolute;
      background-color: v-bind(color);
      width: 100%;
      height: 2%;
      left: -0.3rem;
      bottom: 0;
      border-radius: 0 0 20px 20px;
    }
    & .main {
      align-self: center;
    }
  }
}
</style>
