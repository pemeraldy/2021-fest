<template>
  <div>
    <v-btn :to="link" :height="height" class="theme-btn" :width="width" dark>{{
      text
    }}</v-btn>
  </div>
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
    width: {
      type: String,
      default: '343',
    },
    height: {
      type: String,
      default: '64',
    },
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
  text-transform: capitalize;
  border-radius: 100px;
}
</style>
