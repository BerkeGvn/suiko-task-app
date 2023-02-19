<template>
  <teleport to="body">
    <div class="desktop">
      <div class="desktop-first page">
        <img
          v-motion-slide-visible-left
          src="../../assets/png-svg/first-page-big.png"
          alt="people thinking about theris tasks"
        />
        <div class="desktop-details" v-motion-slide-visible-right>
          <h1>Hey, Welcome to <span class="emphasize">Suiko</span>!</h1>
          <p>
            Organize your daily tasks, become more productive and never miss
            anything!
          </p>
          <p>
            Are you with us? <br />
            Great, Let's get started!
          </p>

          <a href="#second" class="start-button start-button-orange">
            Start Exploring!
          </a>
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
            <span>Suiko</span>
          </div>
        </div>
      </div>

      <div id="second" class="desktop-second page">
        <img
          v-motion-slide-visible-right
          src="../../assets/png-svg/second-page-big.png"
          alt="a overwhelmed person"
        />
        <div class="desktop-details" v-motion-slide-visible-left>
          <h1>Are you overwhelmed?</h1>
          <p>
            We build habits with time. Making task lists help you beat
            procrastination.
          </p>

          <a href="#third" class="start-button start-button-blue">
            Continue To Explore
          </a>
        </div>
      </div>

      <div id="third" class="desktop-third page">
        <img
          v-motion-slide-visible-left
          src="../../assets/png-svg/third-page-big.png"
          alt="a person guiding another one"
        />
        <div class="desktop-details" v-motion-slide-visible-right>
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

          <router-link to="/home" class="start-button start-button-orange">
            Let's Get Started!
          </router-link>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../assets/scss/breakpoints.scss";

.desktop {
  display: block;
  min-height: 100vh;
  position: relative;
  z-index: 25;
  overflow: hidden;
  background-color: var(--background-color-1);
  & .page {
    height: 100vh;
    display: flex;
  }
  &-first,
  &-third {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  &-second {
    background-color: var(--main-orange-color);
    color: var(--text-color-2);
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
  }

  &-details {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
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
  & img {
    width: 63%;

    @media only screen and (min-width: 1300px) {
      width: 53%;
    }
  }
  & .start-button {
    border: none;
    border-radius: 20px;
    padding: 2rem 4rem;
    font-size: 1.6rem;
    font-weight: 500;
    margin-top: 2rem;
    width: 63%;
    color: var(--text-color-2);
    transition: all 0.2s;
    &-orange {
      background-color: var(--main-orange-color);
      &:hover {
        box-shadow: 1px 2px 4px #616161;
      }
    }
    &-blue {
      background-color: var(--main-dark-blue-color);
      &:hover {
        box-shadow: 1px 2px 4px #323232;
      }
    }
    &:hover {
      cursor: pointer;
      transform: translateY(-0.5rem);
    }
    &:active {
      transform: translateY(0);
    }
    @media only screen and (min-width: $bp-large) {
      width: 50%;
    }
  }
  & .logo {
    margin-top: 4rem;
    font-size: var(--header-font-size);
    font-weight: 600;
    color: var(--main-orange-color);
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
}
</style>
