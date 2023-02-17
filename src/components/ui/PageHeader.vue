<template>
  <header class="header">
    <button @click="goToPrevious">
      <span class="material-symbols-rounded"> arrow_back </span>
    </button>
    <div class="logo">
      <svg
        width="37"
        height="27"
        version="1.1"
        viewBox="0 0 28.917 21.102"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          transform="matrix(.817 0 0 1.0208 -29.884 -89.969)"
          stroke-linejoin="round"
        >
          <g transform="matrix(1.1759 0 0 1.1274 -36.075 -14.488)">
            <g
              transform="translate(-3.2249 2.0773)"
              fill="none"
              stroke="#f03b1c"
              stroke-linecap="round"
              stroke-linejoin="miter"
            >
              <path d="m66.085 98.145 6.4934 5.5263" stroke-width="1.5631px" />
              <path d="m72.708 103.71 11.831-13.784" stroke-width="1.6346px" />
            </g>
          </g>
          <g
            transform="matrix(-1.1759 0 0 -1.1274 144.69 211.43)"
            stroke-linejoin="round"
          >
            <g
              transform="translate(-3.2249 2.0773)"
              fill="none"
              stroke="#122c6f"
              stroke-linecap="round"
              stroke-linejoin="miter"
            >
              <path d="m66.085 98.145 6.4934 5.5263" stroke-width="1.5631px" />
              <path d="m72.708 103.71 11.831-13.784" stroke-width="1.6346px" />
            </g>
          </g>
        </g>
      </svg>
      <span>Suiko</span>
    </div>
    <h1>
      <span class="material-symbols-rounded"> {{ props.icon }} </span
      >{{ props.headerText }}
    </h1>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";
const props = defineProps(["icon", "headerText"]);
const router = useRouter();
function goToPrevious() {
  router.go(-1);
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/breakpoints.scss";
header {
  display: flex;
  align-items: center;
  position: relative;
  height: 10rem;
  margin-top: -2rem;
  @media only screen and (min-width: $bp-small) {
    align-self: normal;
  }
  .logo {
    position: absolute;
    display: flex;
    left: 0;
    top: 0;
    font-size: var(--header-font-size);
    font-weight: 600;
    color: var(--main-orange-color);
    & span {
      margin-left: 1rem;
    }
  }
  & h1 {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: var(--header-font-size);
  }
  & .material-symbols-rounded {
    font-size: 3.2rem;
  }

  & button {
    border: none;
    background-color: transparent;
  }
}
</style>
