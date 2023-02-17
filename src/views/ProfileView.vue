<template>
  <div class="page">
    <PageHeader :icon="'person'" :headerText="'Profile'"></PageHeader>
    <div class="profile">
      <img
        src="../assets/png-svg/login-illustration-small.png"
        alt="log in page illustration"
      />
      <p>Start your Journey now!</p>
      <form action="">
        <div class="user-input">
          <label class="input-label-text" for="username"> Username </label>
          <input placeholder="Your username" id="username" type="text" />
        </div>
        <div class="user-input">
          <label class="input-label-text" for="password"> Password </label>
          <input placeholder="Your password" id="password" type="password" />
        </div>
        <button class="create-button">Login</button>
        <p>Or</p>
        <button class="create-button">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/scss/breakpoints.scss";
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -4rem;
  @media only screen and (min-width: $bp-small) {
    width: 70%;
  }
  & img {
    width: 100%;
    // special bp for image at 500px because it grows so big
    @media only screen and (min-width: 31.2em) {
      width: 80%;
    }
  }
  & p {
    font-size: var(--normal-font-size);
    text-align: center;
  }
  & form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    & button {
      font-size: var(--normal-font-size);
    }
  }
}
</style>
