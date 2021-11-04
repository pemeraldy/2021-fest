<template>
  <v-app>
    <div>
      <v-app-bar color="white">
        <v-avatar>
          <img src="~/assets/imgs/petra-logo.png" alt="Petra" />
        </v-avatar>

        <v-spacer></v-spacer>

        <v-app-bar-nav-icon @click="navOpen = !navOpen" color="black">
          <v-icon v-if="navOpen">mdi-close</v-icon>
        </v-app-bar-nav-icon>
      </v-app-bar>
    </div>
    <div class="custom-drawe__placeholder">
      <CustomDrawer v-if="navOpen" />
    </div>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
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
