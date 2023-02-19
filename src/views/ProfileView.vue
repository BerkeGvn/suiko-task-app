<template>
  <div class="page">
    <PageHeader :icon="'person'" :headerText="'Profile'"></PageHeader>
    <div class="profile">
      <img
        src="../assets/png-svg/login-illustration-small.png"
        alt="log in page illustration"
        srcset="../assets/png-svg/login-illustration-big.png 1400w"
        draggable="false"
      />

      <form action="">
        <p class="slogan">Start your Journey now!</p>
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
                  <path
                    d="m66.085 98.145 6.4934 5.5263"
                    stroke-width="1.5631px"
                  />
                  <path
                    d="m72.708 103.71 11.831-13.784"
                    stroke-width="1.6346px"
                  />
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
                  <path
                    d="m66.085 98.145 6.4934 5.5263"
                    stroke-width="1.5631px"
                  />
                  <path
                    d="m72.708 103.71 11.831-13.784"
                    stroke-width="1.6346px"
                  />
                </g>
              </g>
            </g>
          </svg>
          <span class="nav-logo-text">Suiko</span>
        </div>
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
  & .slogan {
    font-weight: 500;
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
    & .nav-logo {
      display: flex;
      align-items: center;
      align-self: center;
      gap: 1rem;
      &-text {
        font-size: var(--header-font-size);
        color: var(--main-orange-color);
        font-weight: 600;
      }
    }
  }
  @media only screen and (min-width: $bp-small) {
    width: 70%;
  }
  @media only screen and (min-width: $bp-medium) {
    flex-direction: row;
    width: 100%;
    height: 70vh;
    margin-top: 0.5rem;
    & img {
      width: 50%;
    }
    & .slogan {
      font-size: 2.1rem;
    }
    & form {
      width: 50%;
      background-color: #cfd4e2;
      border-radius: 14px;
      padding: 2rem 1rem;
      box-shadow: 1px 3px 6px #94979f;
      & button {
        align-self: center;
        width: 80%;
        font-size: var(--normal-font-size);
      }
    }
  }
  @media only screen and (min-width: $bp-large) {
    & form {
      width: 40%;
    }
  }
}
</style>
