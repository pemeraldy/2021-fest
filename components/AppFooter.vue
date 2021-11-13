<template>
  <v-sheet color="black" class="main-footer pa-5" min-height="368">
    <div class="icons-wrap my-5 mt-md-16">
      <v-row justify="space-around">
        <v-btn class="mr-5 ml-3 ml-md-0 mr-md-0" icon>
          <v-avatar width="32" height="32">
            <img src="~/assets/imgs/twitter.svg" alt="twitter" />
          </v-avatar>
        </v-btn>
        <v-btn class="mr-5 mr-md-0" icon>
          <v-avatar width="32" height="32">
            <img src="~/assets/imgs/instagram.svg" alt="instagram" />
          </v-avatar>
        </v-btn>
        <v-btn class="mr-5 mr-md-0" icon>
          <v-avatar width="32" height="32">
            <img src="~/assets/imgs/facebook.svg" alt="facebook" />
          </v-avatar>
        </v-btn>
        <v-btn icon>
          <v-avatar width="32" height="32">
            <img src="~/assets/imgs/email.svg" alt="email" />
          </v-avatar>
        </v-btn>
        
        <div class="px-5 ml-auto">
          <v-btn icon>
          <v-avatar width="48" height="48">
            <img src="~/assets/imgs/logo-white.svg" alt="email" />
          </v-avatar>
        </v-btn>
        </div>

      </v-row>
    </div>
    <div
      class="
        d-flex                
        mt-12
        flex-column
        justify-md-space-around
        flex-md-row
      "
    >
      <nuxt-link class="my-2 mx-md-10" to="/auth/register">Register</nuxt-link>
      <v-divider dark></v-divider>
      <nuxt-link class="my-2 mx-md-10" to="/">Schedule</nuxt-link>
      <v-divider dark></v-divider>
      <nuxt-link class="my-2 mx-md-10" to="/faq">FAQ</nuxt-link>
      <v-divider dark></v-divider>
      <nuxt-link class="my-2 mx-md-10" to="/invite">Invite Someone</nuxt-link>
      <v-divider dark></v-divider>
      <nuxt-link class="my-2 mx-md-10" to="/">Media</nuxt-link>
      <v-divider dark></v-divider>
      <nuxt-link class="my-2 mx-md-10" to="/">Ministers</nuxt-link>
      <v-divider dark></v-divider>
      <nuxt-link class="my-2 mx-md-10" to="/testimonies">Testimonies</nuxt-link>
    </div>
    <p class="my-10 text-center copy-right">
      &copy; 2021 tribepetracc. All rights reserved.
    </p>
  </v-sheet>

</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@200&display=swap');
.main-footer {
  background: #000;
}
.v-application a{
  color: #fff;
  text-decoration: none;
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
.copy-right{
  font-size: 14px;
  font-weight: 400;
  font-family: 'Work Sans', sans-serif;
  color:rgba($color: #fff, $alpha: 0.37);
}
</style>
