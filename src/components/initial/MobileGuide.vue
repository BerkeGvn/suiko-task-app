<template>
  <div class="mobile">
    <transition name="slide-right" mode="out-in">
      <div v-if="firstPage" class="mobile-first">
        <img src="../../assets/png-svg/first-page-small.png" alt="" srcset="" />
        <div class="mobile-details">
          <h1>Hey, Welcome to <span class="emphasize">Suiko</span>!</h1>
          <p>
            Organize your daily tasks, become more productive and never miss
            anything!
          </p>
          <p>
            Are you with us? <br />
            Great, Let's get started!
          </p>
        </div>
        <button @click="changePage('firstPage')" class="start-button">
          Start Exploring!
        </button>
      </div>

      <div v-else-if="secondPage" class="mobile-first">
        <img
          src="../../assets/png-svg/second-page-small.png"
          alt=""
          srcset=""
        />
        <div class="mobile-details">
          <h1>Are you overwhelmed?</h1>
          <p>
            We build habits with time. Making task lists help you beat
            procrastination.
          </p>
        </div>
        <button @click="changePage('secondPage')" class="start-button">
          Continue To Explore
        </button>
      </div>

      <div v-else-if="thirdPage" class="mobile-first">
        <img src="../../assets/png-svg/third-page-small.png" alt="" srcset="" />
        <div class="mobile-details">
          <h1><span class="emphasize">Suiko</span> is here to help you!</h1>
          <p>
            Remember the bigger picture here. Why you chose
            <span class="emphasize">Suiko</span>.
          </p>
          <p>
            With <span class="emphasize">Suiko</span> you can create tasks and
            custom lists. <br />
            It is possible to view your tasks on calendar and track your daily
            progress.
          </p>
        </div>

        <router-link to="/home">
          <button class="start-button">Let's Get Started!</button>
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
const firstPage = ref(true);
const secondPage = ref(false);
const thirdPage = ref(false);
function changePage(page) {
  if (page === "firstPage") {
    firstPage.value = false;
    secondPage.value = true;
    thirdPage.value = false;
  } else if (page === "secondPage") {
    firstPage.value = false;
    secondPage.value = false;
    thirdPage.value = true;
  }
}
</script>

<style lang="scss" scoped>
.mobile {
  height: 100vh;
  position: relative;
  z-index: 15;
  background-color: var(--background-color-1);
  &-first {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & img {
    width: 100%;
    margin: 2rem 0;
  }
  &-details {
    padding: 2rem;
    text-align: center;

    & h1 {
      font-size: 3.1rem;
    }
    & p {
      font-size: var(--normal-font-size);
      margin-top: 2rem;
    }
    & .emphasize {
      color: var(--main-orange-color);
      font-weight: 600;
    }
  }
  & .start-button {
    border: none;
    background-color: var(--main-orange-color);
    border-radius: 20px;
    padding: 2rem 4rem;
    font-size: 1.6rem;
    font-weight: 500;
    margin-top: 2rem;
    color: var(--text-color-2);
  }

  .slide-right-enter-active,
  .slide-right-leave-active {
    transition: all 0.5s ease-out;
  }

  .slide-right-enter-from {
    opacity: 0;
    transform: translateX(-30px);
  }

  .slide-right-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
}
</style>
