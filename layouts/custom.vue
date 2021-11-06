<template>
  <v-app>
    <AppNavigationBar />
    <div class="hero-section">
      <img class="hero-bg" src="~/assets/imgs/hero-bg-lg.png" alt="" />
      <div class="hero-inner">
        <h1>Hero Section</h1>
      </div>
    </div>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {}
</script>

<style scoped>
.hero-section {
  position: relative;
  /* background: url('~/assets/imgs/hero-bg-lg.png') no-repeat; */
  /* background-size: cover; */
  height: 50vh;
  /* width: 100%; */
}
.hero-section .hero-bg {
  width: 100%;
  /* object-fit: cover;
  position: absolute;
  top: 0;
  left: 0; */
}
</style>
