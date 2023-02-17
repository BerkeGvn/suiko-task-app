<template>
  <nav>
    <div class="nav-logo">
      <svg
        width="47"
        height="37"
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
      <span class="nav-logo-text">Suiko</span>
    </div>
    <div class="nav-links">
      <router-link to="/home">
        <span class="material-symbols-rounded home"> home </span>
        <span class="nav-text">Home</span>
      </router-link>
      <router-link to="/AllTasks">
        <span class="material-symbols-rounded list"> list_alt </span>
        <span class="nav-text">Lists</span>
      </router-link>
      <router-link to="/newTask">
        <span class="material-symbols-rounded circle"> add_circle </span>
        <span class="nav-text">New Task</span>
      </router-link>
      <router-link to="/calendar">
        <span class="material-symbols-rounded calendar"> calendar_month </span>
        <span class="nav-text">Calendar</span>
      </router-link>
      <router-link to="/profile">
        <span class="material-symbols-rounded person"> person </span>
        <span class="nav-text">Profile</span>
      </router-link>
    </div>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../assets/scss/breakpoints.scss";
nav {
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.09);
  border-radius: 10px 10px 0 0;
  color: var(--icon-color);
  background-color: var(--background-color-1);
  z-index: 5;
  & .nav-logo {
    display: none;
  }
  & .nav-links {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    & a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      & .nav-text {
        font-size: var(--normal-font-size);
        display: none;
      }
    }
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
  @media only screen and (min-width: $bp-medium) {
    top: 0;
    width: 6rem;
    padding-top: 12rem;
    padding-bottom: 4rem;
    transition: all 0.4s;
    & .nav-logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding-top: 1rem;
      padding-left: 1rem;
      position: absolute;
      top: 0;
      &-text {
        width: 0;
        opacity: 0;
        font-size: var(--header-font-size);
        color: var(--main-orange-color);
        font-weight: 600;
      }
    }
    & .nav-links {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      gap: 4rem;
      padding-left: 1rem;
      & a {
        border-radius: 10px;
        width: 90%;
        height: 5rem;
        & .circle {
          margin-left: -1rem;
        }
        & .nav-text {
          display: block;
          width: 0;
          opacity: 0;
        }
      }
    }

    &:hover {
      width: 20rem;
      & .nav-logo {
        &-text {
          opacity: 1;
          transition: all 0.4s;
        }
      }
      & .nav-links {
        a {
          white-space: nowrap;
          transition: all 0.2s;
          &:hover {
            padding-left: 1rem;
            background-color: var(--main-orange-color);
            color: var(--text-color-2);
            & .circle {
              color: var(--text-color-2);
            }
          }
          & .nav-text {
            font-weight: 500;
            opacity: 1;
            transition: all 0.4s;
          }
        }
      }
    }
  }
}
</style>
