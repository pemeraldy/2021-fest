<template>
  <v-app :style="inlineStyle">
    <AppNavigationBar />
    <AppMobileNav />
    <v-main>
      <Nuxt />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    backgroundImage: {
      type: String,
      default: 'page-bg.png',
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
/* .hero-section .hero-bg {
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
} */
</style>
