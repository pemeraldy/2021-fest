<template>
  <v-card
    v-if="testimony"
    class="mx-auto testimony-card"
    max-width="344"
    height="250"
  >
    <div class="d-flex testifier-content">
      <div class="img-wrap">
        <img src="~/assets/imgs/pst-ay-lg.png" alt="testifier" />
      </div>
      <div class="testimony-container pa-2">
        <p class="mb-1 pb-1">{{ testimony.name }}</p>
        <v-divider class="my-2"></v-divider>
        <div id="testimony" class="testi-content">{{ testimony.content }}</div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    testimony: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@200&display=swap');
.hero-desk-content {
  height: 100%;
  h3 {
    font-size: 62px;
  }
}
h3.schedule-header {
  // width: 635px;
  font-size: 92px;
}
.v-sheet.v-card.testimony-card {
  border-radius: 60px 0 60px 0;
  overflow: hidden;
}
// .testimony-card{}
.testifier-content {
  width: 100%;
}
.testi-content {
  font-family: 'Kalam', cursive;
  font-style: italic;
}
.img-placeholder {
  width: 100%;
  height: 100%;
}
.img-wrap {
  width: 100px;
  position: relative;
  flex-shrink: 0;
  align-self: stretch;
  background: #c4c4c4;
  // background: orange;
}
.img-wrap img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.testimony-container {
  width: 100%;
  min-height: 256px;
  max-height: 300px;
}
.testimony-container input:focus {
  outline: none;
}
.testimony-container input {
  width: 100%;
  display: block;
  // font-size: 10px;
  padding: 2px;
  border-bottom: 1px solid #b7b7b7;
}

.testimony-container .testi-content {
  resize: none;
  overflow: auto;
  width: 100%;
  height: 100%;
  max-height: 169px;
}
/* width */
.testi-content::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.testi-content::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

/* Handle */
.testi-content::-webkit-scrollbar-thumb {
    border-radius: 10px;
  background: linear-gradient( 
121deg, #f29822 13.56%, #f26643 46.86%, #f24857 72.25%, #f23c5f 86.44% );
}

/* Handle on hover */
.testi-content::-webkit-scrollbar-thumb:hover {
  background: linear-gradient( 
121deg, #f29822 13.56%, #f26643 46.86%, #f24857 72.25%, #f23c5f 86.44% );
}
@media screen and (max-width: 440px) {
  .testimony-card {
    max-height: 225px;
  }
}
</style>
