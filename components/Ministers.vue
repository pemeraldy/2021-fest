<template>
  <div class="mb-10">
    <h3 class="text-center ministering">Ministering</h3>
    <div class="mt-8 d-flex justify-center">
      <!-- Mobile -->
      <div  v-for="minister in firstRow" :key="minister.name" class="ministers-col d-md-none mx-md-10 mx-3">
        <div class="mobile-radius-curve">
          <div class="img-wrapper img-wrap-mobile">
          <img
            class="minister-img"
            :src="minister.photo_mobile"
            :alt="minister.name"
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
          {{minister.name}}
        </div>
        </div>
      </div>

      <!-- DESKTOP -->
      <div  v-for="minister in firstRow" :key="minister.name" class="ministers-col d-none d-md-block mx-md-10 mx-3">
        <div class="desktop-radius-curve">
          <div class="img-wrapper desktop-img-wraper">
          <img
            class="minister-img desktop-img"
            :src="minister.photo_desktop"
            :alt="minister.name"
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
          {{minister.name}}
        </div>
        </div>
      </div>
      
    </div>
    <div class="mt-8 d-flex column-two justify-center">
      <!-- Mobile -->
      <!-- <div v-for="minister in secondRow" :key="minister.name" class="ministers-col d-md-none mx-md-10 mx-3">
        <div class="img-wrapper">
          <img
            class="minister-img"
            :src="minister.photo_mobile"
            :alt="minister.name"
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
          {{minister.name}}
        </div>
      </div> -->
      <!-- Desktop -->
      <div v-for="minister in secondRow" :key="minister.name" class="ministers-col d-none d-md-block mx-md-10 mx-3">
        <div class="desktop-radius-curve">
          <div class="img-wrapper desktop-img-wraper">
          <img
            class="minister-img desktop-img"
            :src="minister.photo_desktop"
            :alt="minister.name"
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
          {{minister.name}}
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ministers',
  // props:{
  //   ministers:{
  //     type: Array,
  //   default: () =>[]
  //   }
  // },
  data(){
    return {
      ministers:[]
    }
  },
  computed:{
    firstRow(){
      return this.ministers.slice(0,3)
    },
    secondRow(){
      return this.ministers.slice(3)
    },
  },
  async fetch(){
    try {
      const resp = await this.$axios.$get('/api/minister')
      this.ministers = await resp.data
    } catch (error) {
      
    }
  },
  created(){

    console.log(this.ministers)
  },
  mounted(){
    console.log(this.ministers)
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
.img-wrapper {
  position: relative;
}
.desktop-img-wraper{
  min-height: 392px;
  max-height: 502px;
  min-width: 295px;
}
img.desktop-img{
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.desktop-radius-curve{
  border-radius: 23px;
  overflow: hidden;
}
.ministers-col d-md-none {
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
  .img-wrap-mobile{
    position: relative;
    min-width: 92px;
    max-width: 92px;
    height: 160px;
    border: 2px solid white
  }
  .mobile-radius-curve{
    overflow: hidden;
  }
    .img-wrap-mobile img.minister-img{
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  .ministers-col d-md-none {
    width: 104px;
  }
  .minister-name {
    height: 48px;
    width: 100%;
    font-size: 12px;
  }
  .ministers-col .mobile-radius-curve:first-child {
    
    border-radius: 0 40px 40px 40px;
  }
  .ministers-col .mobile-radius-curve:nth-child(2) {
    
    border-radius: 40px 0 40px 40px;
  }
  .ministers-col .mobile-radius-curve:nth-child(3) {
    
    border-radius: 40px 0 40px 40px;
  }
  .column-two .ministers-col .mobile-radius-curve:nth-child(1) {
    
    border-radius: 40px 0 40px 40px;
  }
  .column-two .ministers-col .mobile-radius-curve:nth-child(2) {
    
    border-radius: 0 40px 40px 40px;
  }
}
</style>
