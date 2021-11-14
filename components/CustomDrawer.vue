<template>
  <div class="custom-drawer">
    <div class="pa-8">
      <div class="d-flex align-start justify-start mt-3 flex-column">
        <nuxt-link
          v-for="(link, index) in links"
          :key="index"
          class="my-3"
          :to="link.path"
          @click="currentLink = index"
        >
          <span v-if="currentLink === index" class="nav-active"></span>
          {{ link.name }}</nuxt-link
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
        {
          name: 'Register',
          path: '/auth/register',
        },
        {
          name: 'Prayer',
          path: 'https://www.petracc.org/prayerguide',
        },
        {
          name: 'Schedule',
          path: '/schedule',
        },
        {
          name: 'FAQ',
          path: '/faq',
        },
        {
          name: 'Invite Someone',
          path: '/invite',
        },
        {
          name: 'Media',
          path: '/media',
        },
        {
          name: 'Ministers',
          path: '/ministers',
        },
        {
          name: 'Testimonies',
          path: '/testimonies',
        },
        {
          name: 'Login',
          path: '/auth/login',
        },
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
  background: url('~/assets/imgs/nav-bg.png') no-repeat;
  background-color: #00080c;
  z-index: 1000000000;
  border-radius: 16px;
}
.nuxt-link-exact-active,
.nuxt-link-active,
.v-application a {
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
