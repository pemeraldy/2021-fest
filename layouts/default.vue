<template>
  <v-app>
    <v-main>
      <!-- <v-container fluid> -->
      <Nuxt />
      <!-- </v-container> -->
    </v-main>

    <!-- <v-footer app> -->
    <div class="mt-10">
      <AppFooter />
    </div>
    <!-- <span>&copy; {{ new Date().getFullYear() }}</span> -->
    <!-- </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      navOpen: false,

      title: 'Petra',
    }
  },
}
</script>
<style lang="scss" scoped>
body {
  // background-color: #ebebed;
}
.custom-drawe__placeholder {
  position: relative;
}
</style>
