<template>
  <div class="d-md-none">
    <div>
      <v-app-bar color="white">
        <nuxt-link to="/">
          <v-scroll-y-transition>
            <v-avatar v-if="!navOpen">
              <img
                width="40"
                height="40"
                src="~/assets/imgs/petra-logo-bright.png"
                alt="Petra"
              />
            </v-avatar>
          </v-scroll-y-transition>
        </nuxt-link>

        <v-scroll-y-transition>
          <v-avatar v-if="navOpen">
            <img
              width="40"
              height="40"
              src="~/assets/imgs/logo-nav-open.png"
              alt="Petra"
            />
          </v-avatar>
        </v-scroll-y-transition>

        <v-spacer></v-spacer>

        <v-app-bar-nav-icon color="black" @click="navOpen = !navOpen">
          <v-icon v-if="navOpen">mdi-close</v-icon>
        </v-app-bar-nav-icon>
      </v-app-bar>
    </div>
    <div class="custom-drawe__placeholder">
      <v-expand-transition>
        <CustomDrawer v-if="navOpen" />
      </v-expand-transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileNavigation',
  data() {
    return {
      navOpen: false,
    }
  },
}
</script>

<style></style>
