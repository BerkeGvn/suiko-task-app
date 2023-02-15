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
.profile {
  margin-top: -4rem;
  & img {
    width: 100%;
  }
  & p {
    font-size: var(--normal-font-size);
    text-align: center;
  }
  & form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    & button {
      font-size: var(--normal-font-size);
    }
  }
}
</style>
