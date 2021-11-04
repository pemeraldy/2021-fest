<template>
  <v-sheet color="black" class="main-footer pa-10" min-height="368">
    <div class="icons-wrap">
      <v-row justify="space-around">
        <v-btn icon>
          <v-avatar width="32" height="32">
            <img src="~/assets/imgs/twitter.svg" alt="twitter" />
          </v-avatar>
        </v-btn>
        <v-btn icon>
          <v-avatar width="32" height="32">
            <img src="~/assets/imgs/instagram.svg" alt="instagram" />
          </v-avatar>
        </v-btn>
        <v-btn icon>
          <v-avatar width="32" height="32">
            <img src="~/assets/imgs/facebook.svg" alt="facebook" />
          </v-avatar>
        </v-btn>
        <v-btn icon>
          <v-avatar width="32" height="32">
            <img src="~/assets/imgs/email.svg" alt="email" />
          </v-avatar>
        </v-btn>
      </v-row>
    </div>
    <div class="d-flex align-center justify-center mt-12 flex-column">
      <nuxt-link class="my-2" to="/">Register</nuxt-link>
      <nuxt-link class="my-2" to="/">Schedule</nuxt-link>
      <nuxt-link class="my-2" to="/">FAQ</nuxt-link>
      <nuxt-link class="my-2" to="/">Invite Someone</nuxt-link>
      <nuxt-link class="my-2" to="/">Media</nuxt-link>
      <nuxt-link class="my-2" to="/">Ministers</nuxt-link>
      <nuxt-link class="my-2" to="/">Testimonies</nuxt-link>
    </div>
  </v-sheet>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.main-footer {
  background: #000;
}
.nuxt-link-exact-active,
.nuxt-link-active {
  text-decoration: none;
  color: white;
}
</style>
