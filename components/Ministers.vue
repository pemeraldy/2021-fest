<template>
  <div>
    <h3 class="text-center">Ministers</h3>
    <div class="mt-8 d-flex justify-space-around">
      <div class="ministers-col">
        <div>
          <img
            class="minister-img"
            src="~/assets/imgs/pst-ayo.png"
            alt="Pastor Ayo"
          />
          <div class="minister-name pa-1 white--text text-center">
            Pastor Ayo Ajani
          </div>
        </div>
      </div>
      <div class="ministers-col">
        <div>
          <img
            class="minister-img"
            src="~/assets/imgs/pst-adeola.png"
            alt="Pastor Ayo"
          />
          <div class="minister-name pa-1 white--text text-center">
            Pastor Ayo Ajani
          </div>
        </div>
      </div>
      <div class="ministers-col">
        <div>
          <img
            class="minister-img"
            src="~/assets/imgs/pst-3.png"
            alt="Pastor Ayo"
          />
          <div class="minister-name pa-1 white--text text-center">
            Pastor Ayo Ajani
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8 d-flex justify-center">
      <div class="ministers-col mr-2">
        <div>
          <img
            class="minister-img"
            src="~/assets/imgs/pst-adeola.png"
            alt="Pastor Ayo"
          />
          <div class="minister-name pa-1 white--text text-center">
            Pastor Ayo Ajani
          </div>
        </div>
      </div>
      <div class="ministers-col ml-2">
        <div>
          <img
            class="minister-img"
            src="~/assets/imgs/pst-ayo.png"
            alt="Pastor Ayo"
          />
          <div class="minister-name pa-1 white--text text-center">
            Pastor Ayo Ajani
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10">
      <div class="btn-wrap">
        <v-btn height="64" class="register-btn" color="#580045" dark width="343"
          >Register</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.ministers-col {
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
  }
  .minister-name {
    background-color: #580045;
    position: absolute;
    bottom: 0;
    @media screen and (max-width: 440px) {
      font-size: 14px;
    }
  }
}
.register-btn {
  text-transform: capitalize;
  border-radius: 100px;
}
@media screen and (max-width: 440px) {
  .btn-wrap {
    width: 343px;
  }
}
</style>
