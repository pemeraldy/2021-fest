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
      }
    },
  },
}
</script>

<style scoped>
.hero-section {
  position: relative;
  /* background: url('~/assets/imgs/hero-bg-lg2.png') no-repeat; */
  background-repeat: no-repeat;
  background-size: cover;
  height: 90vh;
  width: 100%;
}
</style>
