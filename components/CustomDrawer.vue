<template>
  <div class="custom-drawer">
    <div class="pa-8">
      <div class="d-flex align-start justify-start mt-3 flex-column">
        <nuxt-link
          v-for="(link, index) in links"
          :key="link"
          class="my-3"
          to="/"
          @click="currentLink = index"
        >
          <span v-if="currentLink === index" class="nav-active"></span>
          {{ link }}</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLink: 0,
      links: [
        'Register',
        'Schedule',
        'FAQ',
        'Invite Someone',
        'Media',
        'Ministers',
        'Testimonies',
        'Login',
      ],
      isActive: false,
    }
  },
}
</script>

<style scoped>
.custom-drawer {
  position: absolute;
  width: 100%;
  height: 83vh;
  background: url('~/assets/imgs/nav-bg.png');
  background-color: #00112b;
  z-index: 1000000000;
  border-radius: 16px;
}
.nuxt-link-exact-active,
.nuxt-link-active {
  position: relative;
  text-decoration: none;
  color: white;
  font-size: 20px;
}
.nav-active {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #ffb800;
  border-radius: 50%;
  bottom: 9px;
  left: -20px;
}
</style>
