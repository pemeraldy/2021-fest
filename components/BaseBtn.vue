<template>
  <button :to="link" class="theme-btn" dark>{{ text }}</button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      default: 'Button',
    },
    link: {
      type: String,
      default: '',
    },
    // width: {
    //   type: String,
    //   default: '343',
    // },
    // height: {
    //   type: String,
    //   default: '64',
    // },
  },
}
</script>

<style scoped>
.theme-btn {
  width: 100%;
  background: linear-gradient(
    121deg,
    #f29822 13.56%,
    #f26643 46.86%,
    #f24857 72.25%,
    #f23c5f 86.44%
  );
  color: white;
  outline: none;
  border: none;
  text-transform: capitalize;
  border-radius: 100px;
  font-size: 22px;
  font-weight: 600;
  width: 100%;
  height: 100%;
  /* width: 669px;
  height: 125px; */
}
@media screen and (max-width: 440px) {
  .theme-btn {
    width: 271px;
  }
}
</style>
