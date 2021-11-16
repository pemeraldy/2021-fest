<template>
  <div class="custom-nav d-none d-md-flex align-center pa-3 mt-12">
    <nav class="custom-nav__inner d-flex justify-between">
      <div class="logo-wrap">
        <nuxt-link to="/">
          <v-avatar height="60" width="60">
            <PetraLogoBright width="100" height="100" />

            <!-- <img
              width="40"
              height="40"
              src="~/assets/imgs/petra-logo-bright.svg"
              alt="Petra"
            /> -->
          </v-avatar>
        </nuxt-link>
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex justify-between align-center pr-10">
        <nuxt-link class="custom-nav-item pa-3 mx-2" to="/auth/register"
          >Register</nuxt-link
        >
        <!-- <nuxt-link class="custom-nav-item pa-3 mx-2" to="/"
          >Schedule</nuxt-link
        >
        <nuxt-link class="custom-nav-item pa-3 mx-2" to="/"
          >Invite someone</nuxt-link
        > -->
        <nuxt-link class="custom-nav-item pa-3 mx-2" to="/">FAQ</nuxt-link>
        <!-- <nuxt-link class="custom-nav-item pa-3 mx-2" to="/"
          >Ministers</nuxt-link
        >
        <nuxt-link class="custom-nav-item pa-3 mx-2" to="/"
          >Media</nuxt-link
        >
        <nuxt-link class="custom-nav-item pa-3 mx-2" to="/"
          >Testimonies</nuxt-link
        >
        <nuxt-link class="custom-nav-item pa-3 mx-2" to="/"
          >Login</nuxt-link
        > -->
      </div>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.custom-nav {
  width: 95%;
  margin: 0 auto;
  position: absolute;
  backdrop-filter: blur(4px) saturate(180%);
  -webkit-backdrop-filter: blur(4px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.82);
  // background-color: rgba(255, 255, 255, 0.58);
  left: 0;
  right: 0;
  margin-right: auto;
  margin-left: auto;
  height: 90px;
  border-radius: 68px;
  // backdrop-filter: blur(19px);
  // -webkit-backdrop-filter: blur(19px);
  z-index: 1;
}
.custom-nav__inner {
  width: 100%;
}
.custom-nav-item {
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  color: #000;
}
</style>
