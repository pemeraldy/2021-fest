<template>
  <div class="d-flex flex-column">
    <div class="hero-container" :style="inlineStyle">
      <slot>
        <div class="hero d-flex flex-column align-center"></div>
      </slot>
      
    </div>
    <!-- <slot name="heroActions"> </slot> -->
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    backgroundImage: {
      type: String,
      default: '/hero-bg-lg.png',
    },
  },
  computed: {
    inlineStyle() {
      return {
        backgroundImage: `url(${this.backgroundImage})`,
        height: this.$route.path === '/' ? '293px' : false,
        boxShadow:
          this.$route.path === '/'
            ? ''
            : 'inset 2000px 0 0 0 rgba(0, 0, 0, 0.5); border-bottom-left-radius:80px;',
      }
    },
  },
}
</script>

<style scoped>
.hero-container {
  width: 100%;
  background-size: cover;
  border-bottom-left-radius:80px;
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
    width: 100%;
    min-height: 265px;
    border-bottom-left-radius: 80px;
    background-size: cover;
    background-position: center;
  }
  .btn-wrap {
    width: 100%;
  }
}
</style>
