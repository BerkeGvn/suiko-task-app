<template>
  <div class="not-found">
    <img
      src="../assets/png-svg/404-small.png"
      srcset="../assets/png-svg/404-big.png 1400w"
      alt="no page found illustration"
      draggable="false"
    />
    <div class="not-found-text">
      <p>
        Hmmm, we can't find that page! But don't worry, you can always get back
        in track!
      </p>
      <router-link to="/home">Go back!</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/breakpoints.scss";
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
  @media only screen and (min-width: $bp-medium) {
    display: flex;
    flex-direction: column;
    align-items: center;
    & img {
      margin-top: 0;
      width: 40%;
    }
    &-text {
      & a {
        transition: all 0.5s;
        &:hover {
          cursor: pointer;
          transform: translateY(-0.5rem);
          box-shadow: 1px 2px 4px #616161;
        }
        &:active {
          transform: translateY(0);
        }
      }
    }
  }
}
</style>
