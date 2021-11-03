<template>
  <v-container>
    <div class="mt-16 content-wrap">
      <h1 class="d-inline callout-heading">
        <span class="swashed mr-1 d-inline-block"
          >5 days
          <img
            class="swash-img d-block"
            src="~/assets/imgs/line-swash.svg"
            alt=""
          />
        </span>
        of encountering God like never before.
      </h1>
      <div class="d-inline">Click <a href="#">here</a> to see schedule</div>
    </div>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.callout-heading {
  @media screen and (max-width: 440px) {
    // font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
  }
  .swashed {
    font-weight: 600;
    position: relative;
    // background: url('~/assets/imgs/line-swash.svg') no-repeat;
    // font-size: 200px;
  }
  .swash-img {
    position: absolute;
    left: 0;
    bottom: -3px;
  }
}
</style>
