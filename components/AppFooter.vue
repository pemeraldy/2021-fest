<template>
  <v-sheet color="black" class="main-footer pa-5" min-height="368">
    <div class="icons-wrap my-5 mt-md-16">
      <v-row justify="space-around">
        <!-- <v-btn href="https://t.me/officialayoajani" class="mr-5 ml-3 ml-md-0 mr-md-0" icon>
          <v-avatar width="32" height="32">
            <img src="~/assets/imgs/telegram.png" alt="telegram" />
          </v-avatar>
        </v-btn> -->
        <v-btn href="https://www.instagram.com/petrachristiancentre/" class="mr-5 mr-md-0" icon>
          <v-avatar width="32" height="32">
            <img src="~/assets/imgs/instagram.svg" alt="instagram" />
          </v-avatar>
        </v-btn>
        <v-btn href="https://web.facebook.com/petrachristiancentre" class="mr-5 mr-md-0" icon>
          <v-avatar width="32" height="32">
            <img src="~/assets/imgs/facebook.svg" alt="facebook" />
          </v-avatar>
        </v-btn>
        <v-btn href="mailto:thefestival@petracc.org" icon>
          <v-avatar width="32" height="32">
            <img src="~/assets/imgs/email.svg" alt="email" />
          </v-avatar>
        </v-btn>
        
        <div  class="px-5 ml-auto d-md-none">
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
        mt-md-16               
        mt-12
        flex-column
        justify-md-space-around
        flex-md-row
      "
    >
      <nuxt-link class="my-2 mx-md-10" to="/auth/register">Register</nuxt-link>
      <v-divider class="d-md-none" dark></v-divider>
      <nuxt-link class="my-2 mx-md-10" to="/schedule">Schedule</nuxt-link>
      <v-divider class="d-md-none" dark></v-divider>
      <nuxt-link class="my-2 mx-md-10" to="/faq">FAQs</nuxt-link>
      <v-divider class="d-md-none" dark></v-divider>
      <nuxt-link class="my-2 mx-md-10" to="/">Invite Someone</nuxt-link>
      <v-divider class="d-md-none" dark></v-divider>
      <nuxt-link class="my-2 mx-md-10" to="/">Media</nuxt-link>
      <v-divider class="d-md-none" dark></v-divider>
      <nuxt-link class="my-2 mx-md-10" to="/ministers">Ministers</nuxt-link>
      <v-divider class="d-md-none" dark></v-divider>
      <nuxt-link class="my-2 mx-md-10" to="/">Testimonies</nuxt-link>
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
