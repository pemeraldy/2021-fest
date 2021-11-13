<template>
  <div>
    <DesktopHero
      class="d-none d-md-block"
      :background-image="pageData.data.banner_image_desktop.value"
    />
    <MobileHero
      class="d-md-none"
      :background-image="pageData.data.banner_image_mobile.value"
    />
    <div
      class="btn-wrap mt-6 d-flex justify-center"
      @click="$router.push('/auth/register')"
    >
      <BaseBtn text="Register" width="2em" />
    </div>

    <v-container fluid>
      <v-row justify="center" align="center">
        <MainContent :parent-data="pageData" />
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'LandingPage',
  layout: 'custom',
  data() {
    return {
      pageData: {
        banner_image_desktop: { value: '/hero-bg-lg2-cmprs.png' },
        banner_image_mobile: { value: '/landing-hero-mobi.png' },
        page_title: { value: 'Welcome jome' },
      },
    }
  },
  async fetch() {
    try {
      this.pageData = await this.$axios.$get('/api/page/landing')
    } catch (error) {}
  },
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
