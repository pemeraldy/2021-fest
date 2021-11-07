<template>
  <v-sheet color="black" class="main-footer pa-10" min-height="368">
    <div class="icons-wrap mt-md-16">
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
    <div
      class="
        d-flex
        align-center
        justify-center
        mt-12
        flex-column
        justify-md-space-around
        flex-md-row
      "
    >
      <nuxt-link class="my-2 mx-md-10" to="/">Register</nuxt-link>
      <nuxt-link class="my-2 mx-md-10" to="/">Schedule</nuxt-link>
      <nuxt-link class="my-2 mx-md-10" to="/">FAQ</nuxt-link>
      <nuxt-link class="my-2 mx-md-10" to="/">Invite Someone</nuxt-link>
      <nuxt-link class="my-2 mx-md-10" to="/">Media</nuxt-link>
      <nuxt-link class="my-2 mx-md-10" to="/">Ministers</nuxt-link>
      <nuxt-link class="my-2 mx-md-10" to="/">Testimonies</nuxt-link>
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
.icons-wrap {
  @media screen and (min-width: 960px) {
    width: 400px;
    margin: 0 auto;
  }
}
.v-btn--icon.v-size--default {
  @media screen and (min-width: 960px) {
    width: 86px;
  }
}
.nuxt-link-exact-active,
.nuxt-link-active {
  text-decoration: none;
  color: white;
  font-size: 14px;
}
</style>
