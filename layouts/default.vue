<template>
  <v-app>
    <div>
      <v-app-bar color="white">
        <v-avatar>
          <img src="~/assets/imgs/petra-logo.png" alt="Petra" />
        </v-avatar>

        <v-spacer></v-spacer>

        <v-app-bar-nav-icon color="black"></v-app-bar-nav-icon>
      </v-app-bar>
    </div>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Petra',
    }
  },
}
</script>
