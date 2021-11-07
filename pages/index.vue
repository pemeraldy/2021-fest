<template>
  <div>
    <AppHero
      class="d-none d-md-block"
      background-image="hero-bg-lg2-cmprs.png"
    />
    <Hero class="d-md-none" background-image="landing-hero-mobi.png" />
    <div class="btn-wrap mt-6 d-flex justify-center">
      <BaseBtn link="/auth/register" text="Register" width="343" />
    </div>

    <v-container fluid>
      <v-row justify="center" align="center">
        <MainContent />
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'LandingPage',
  layout: 'custom',
}
</script>
<style lang="scss" scoped>
.btn-wrap {
  width: 669px;
  height: 125px;
  margin: 0 auto;
  @media screen and(max-width:440px) {
    width: 90%;
    height: 64px;
  }
}
</style>
