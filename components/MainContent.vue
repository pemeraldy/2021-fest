<template>
  <v-container class="content-container">
    <div class="mt-16 content-wrap text-center text-md-center">
      <h1 class="d-inline text-md-center callout-heading">
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
      <div class="d-inline d-md-block text-md-center">
        Click <a href="#">here</a> to see schedule
      </div>
    </div>
    <v-sheet color="transparent" class="mt-11 d-flex justify-center">
      <v-sheet class="vid-wrap d-flex justify-center align-center">
        <div>
          <img src="~/assets/imgs/play-icon.svg" alt="play button" />
        </div>
      </v-sheet>
    </v-sheet>
    <v-sheet color="transparent" class="mt-11">
      <Ministers />
    </v-sheet>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
// .content-container {
//   background: url('~/assets/imgs/content-bg.png') no-repeat;
//   background-size: cover;
// }
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
.vid-wrap {
  background: url('~/assets/imgs/vid-img.png') no-repeat;
  background-size: cover;
  width: 845px;
  height: 610px;
  @media screen and (max-width: 440px) {
    width: 343px;
    height: 248px;
    background: url('~/assets/imgs/vid-img.png') no-repeat;
    background-size: cover;
  }
}
</style>
