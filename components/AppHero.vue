<template>
  <div :style="inlineStyle" class="hero-section">
    <div class="hero-inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    backgroundImage: {
      type: String,
      default: 'hero-bg-lg2.png',
    },
  },
  computed: {
    bgImage() {
      return require('@/assets/imgs/' + this.backgroundImage)
    },
    inlineStyle() {
      return {
        backgroundImage: `url(${this.bgImage})`,
        boxShadow:
          this.$route.path === '/'
            ? ''
            : 'inset 2000px 0 0 0 rgba(0, 0, 0, 0.5);',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  /* background: url('~/assets/imgs/hero-bg-lg2.png') no-repeat; */
  background-repeat: no-repeat;
  background-size: cover;
  height: 98vh;
  width: 100%;
  border-bottom-left-radius: 370px;
  // box-shadow: inset 2000px 0 0 0 rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 400px) {
    height: 208px;
    background-size: cover;
    border-bottom-left-radius: 89px;
  }
}
</style>
