<template>
  <div class="greet">
    <div class="greet-text">
      <p>
        {{ greeting.header }}
      </p>
      <span>
        {{ greeting.text }}
      </span>
    </div>
    <img
      src="../../assets/png-svg/greet.png"
      alt="a person waving from a window"
      draggable="false"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const greeting = ref("");
const day = new Date();
const hr = day.getHours();

if (hr >= 6 && hr < 12) {
  greeting.value = {
    header: "Good Morning!",
    text: "Are you ready for today?",
  };
} else if (hr >= 12 && hr < 18) {
  greeting.value = {
    header: "Good Afternoon!",
    text: "How is your day going?",
  };
} else if (hr >= 18 && hr <= 23) {
  greeting.value = {
    header: "Good Evening!",
    text: "Today is almost over",
  };
} else {
  greeting.value = {
    header: "Good Night!",
    text: "Have a good sleep!",
  };
}
</script>

<style lang="scss" scoped>
.greet {
  background-color: #f13b1c;
  margin-bottom: 2rem;
  border-radius: 10px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  &-text {
    color: var(--text-color-2);
    text-align: center;
    & p {
      font-size: var(--normal-font-size);
      font-weight: 500;
    }
    & span {
      font-size: var(--small-font-size);
    }
  }
  img {
    margin-top: -0.5rem;
  }
}
</style>
