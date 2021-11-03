<template>
  <div class="hero d-flex flex-column pb-11 align-center">
    <h1 class="mt-10">Petra Festival</h1>
    <h1>Convention 2021</h1>
    <p class="text-center pa-5">
      Diam ultrices eu donec tristique ut faucibus amet adipiscing eget. Porta
      pellentesque id condimentum eget at.
    </p>
    <div class="btn-wrap">
      <v-btn height="64" class="register-btn" color="#580045" dark width="343"
        >Register</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.hero {
  width: 100%;
  background: #9b9b9b;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
}
.register-btn {
  text-transform: capitalize;
  border-radius: 100px;
}
@media screen and (max-width: 440px) {
  .hero {
    min-height: 344px;
  }
  .btn-wrap {
    width: 343px;
  }
}
</style>
