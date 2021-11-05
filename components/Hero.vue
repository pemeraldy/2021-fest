<template>
  <div class="d-flex flex-column">
    <div :style="inlineStyle" class="hero d-flex flex-column align-center">
      <slot />
      <!-- <h1 class="mt-10">Petra Festival</h1>
      <h1>Convention 2021</h1>
      <p class="text-center pa-5">
        Diam ultrices eu donec tristique ut faucibus amet adipiscing eget. Porta
        pellentesque id condimentum eget at.
      </p> -->
    </div>
    <div class="btn-wrap mt-6 d-flex justify-center">
      <!-- <v-btn height="64" class="register-btn" dark width="343">Register</v-btn> -->
      <BaseBtn text="Register" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    backgroundImage: {
      type: String,
      default: 'hero-bg-lg.png',
    },
  },
  computed: {
    bgImage() {
      return require('@/assets/imgs/' + this.backgroundImage)
    },
    inlineStyle() {
      return {
        backgroundImage: `url(${this.bgImage})`,
      }
    },
  },
}
</script>

<style scoped>
.hero {
  width: 100%;
  border-bottom-left-radius: 80px;
  /* background: url('~/assets/imgs/hero-bg-lg.png') no-repeat; */
  background-size: cover;
}
.register-btn {
  background: linear-gradient(
    121deg,
    #f29822 13.56%,
    #f26643 46.86%,
    #f24857 72.25%,
    #f23c5f 86.44%
  );
  text-transform: capitalize;
  border-radius: 100px;
}
@media screen and (max-width: 440px) {
  .hero {
    min-height: 265px;
  }
  .btn-wrap {
    width: 100%;
  }
}
</style>
