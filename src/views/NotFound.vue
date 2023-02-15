<template>
  <div class="not-found">
    <img
      src="../assets/png-svg/404-small.png"
      alt="no page found illustration"
    />
    <div class="not-found-text">
      <p>
        Hmmm, we can't find that page! But don't worry, you can get back in
        track!
      </p>
      <router-link to="/home">Go back!</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.not-found {
  height: 100vh;

  & img {
    width: 100%;
    margin-top: 10rem;
  }
  &-text {
    font-size: var(--normal-font-size);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    & p {
      text-align: center;
    }
    & a {
      text-align: center;
      background-color: var(--main-orange-color);
      color: var(--text-color-2);
      padding: 2rem 4rem;
      border-radius: 20px;
    }
  }
}
</style>
