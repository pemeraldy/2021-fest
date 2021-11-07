<template>
  <div>
    <!-- <Hero>
      <template #heroActions>
        <div class="btn-wrap mt-6 d-flex justify-center">          
          <BaseBtn link="/auth/register" text="Register" width="343" />
        </div>
      </template>
    </Hero> -->
    <AppHero background-image="hero-bg-lg.png" />
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
<style scoped></style>
