<template>
  <div class="mb-10">
    <h3 class="text-center ministering">Ministering</h3>
    <div class="mt-8 d-flex justify-center">
      <div class="ministers-col mx-md-10 mx-3">
        <div class="img-wrapper">
          <img
            class="minister-img"
            src="~/assets/imgs/pst-ay-lg.png"
            alt="Pastor Ayo"
          />
        </div>
        <div
          class="
            minister-name
            d-flex
            align-center
            justify-center
            pa-1
            white--text
            text-center
          "
        >
          Pastor Ayo Ajani
        </div>
      </div>
      <div class="ministers-col mx-md-10 mx-3">
        <div class="img-wrapper">
          <img
            class="minister-img"
            src="~/assets/imgs/pst-ay-lg.png"
            alt="Pastor Ayo"
          />
        </div>
        <div
          class="
            minister-name
            d-flex
            align-center
            justify-center
            pa-1
            white--text
            text-center
          "
        >
          Pastor Ayo Ajani
        </div>
      </div>
      <div class="ministers-col mx-md-10 mx-3">
        <div class="img-wrapper">
          <img
            class="minister-img"
            src="~/assets/imgs/pst-ay-lg.png"
            alt="Pastor Ayo"
          />
        </div>
        <div
          class="
            minister-name
            d-flex
            align-center
            justify-center
            pa-1
            white--text
            text-center
          "
        >
          Pastor Ayo Ajani
        </div>
      </div>
    </div>
    <div class="mt-8 d-flex column-two justify-center">
      <div class="ministers-col mx-md-10 mx-3">
        <div class="img-wrapper">
          <img
            class="minister-img"
            src="~/assets/imgs/pst-ay-lg.png"
            alt="Pastor Ayo"
          />
        </div>
        <div
          class="
            minister-name
            d-flex
            align-center
            justify-center
            pa-1
            white--text
            text-center
          "
        >
          Pastor Ayo Ajani
        </div>
      </div>
      <div class="ministers-col mx-md-10 mx-3">
        <div class="img-wrapper">
          <img
            class="minister-img"
            src="~/assets/imgs/pst-ay-lg.png"
            alt="Pastor Ayo"
          />
        </div>
        <div
          class="
            minister-name
            d-flex
            align-center
            justify-center
            pa-1
            white--text
            text-center
          "
        >
          Pastor Ayo Ajani
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
.img-wrapper {
  position: relative;
}

.ministers-col {
  width: 294px;
  overflow: hidden;
  // height: 292px;
  border-radius: 30px;
}

.minister-name {
  background: #f26643;
  font-size: 30px;
  height: 135px;
}

@media screen and (max-width: 440px) {
  .ministers-col {
    width: 104px;
  }
  .minister-name {
    height: 48px;
    width: 100%;
    font-size: 14px;
  }
  .ministers-col:first-child {
    border: 2px solid orange;
    border-radius: 0 40px 40px 40px;
  }
  .ministers-col:nth-child(2) {
    border: 2px solid orange;
    border-radius: 40px 0 40px 40px;
  }
  .ministers-col:nth-child(3) {
    border: 2px solid orange;
    border-radius: 40px 0 40px 40px;
  }
  .column-two .ministers-col:nth-child(1) {
    border: 2px solid orange;
    border-radius: 40px 0 40px 40px;
  }
  .column-two .ministers-col:nth-child(2) {
    border: 2px solid orange;
    border-radius: 0 40px 40px 40px;
  }
}
</style>
