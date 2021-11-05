<template>
  <div>
    <v-btn height="64" class="theme-btn" dark width="343">{{ text }}</v-btn>
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
  },
}
</script>

<style scoped>
.theme-btn {
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
