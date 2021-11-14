<template>
  <div class="mb-10">
    <h3 class="text-center ministering">Ministering</h3>
    <div class="mt-8 d-flex justify-center">
      <!-- Mobile -->
      <div  v-for="(minister, index) in firstRow" :key="minister.name" class="ministers-col d-md-none mx-md-10 mx-3">
        <div :class="[ true ? `mobile-radius-curve${index+1}`: '']" class="mobile-radius-curve">
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
            align-md-center
            justify-center
            pa-1
            white--text
            text-center
          "
        >
          <div>
            <span class="min-title">{{splitName(minister.name).title}}</span> <br>
          <span class="full-name mt-n2">{{splitName(minister.name).fullName}} </span>
          </div>
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
      <div  v-for="(minister, index) in secondRow" :key="minister.name" class="ministers-col d-md-none mx-md-10 mx-3">
        <div :class="[ true ? `mobile-radius-curve${index+1}`: '']" class="mobile-radius-curve">
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
          <div>
            <span class="min-title">{{splitName(minister.name).title}}</span> <br>
            <span class="full-name mt-n2">{{splitName(minister.name).fullName}} </span>
          </div>
        </div>
        </div>
      </div>
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
  methods:{
    splitName(name){
      if(name.includes('Bishop')){
        const title = name.substring(0, 'Bishop'.length)
        const fullName = name.split('Bishop')[1]
        return {
          title,
          fullName
        }
      }
      if(name.includes('Pastor')){
        const title = name.substring(0, 'Pastor'.length)
        const fullName = name.split('Pastor')[1]
        return {
          title,
          fullName
        }
      }
    }
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
    // max-width: 92px;
    height: 160px;
    // border: 1px solid white;
    border-bottom: none;
  }
  .mobile-radius-curve{
    overflow: hidden;
    box-shadow: -1px 0px 41px -12px rgba(0,0,0,0.64);
-webkit-box-shadow: -1px 0px 41px -12px rgba(0,0,0,0.64);
-moz-box-shadow: -1px 0px 41px -12px rgba(0,0,0,0.64);
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
    height: 64px;
    width: 100%;
    font-size: 12px;
  }
  .minister-name .min-title{
    font-size: 10px;
  }
  .minister-name .full-name{
    font-size: 12px;
  }
   .mobile-radius-curve1{
    border-radius: 0 40px 40px 40px;
  }
   .mobile-radius-curve2 {
    
    border-radius: 40px 0 40px 40px;
  }
   .mobile-radius-curve3 {
    
    border-radius: 40px 0 40px 40px;
  }
  .column-two .ministers-col .mobile-radius-curve1 {
    border-radius: 40px 0 40px 40px;
    // border-radius: 40px 0 40px 40px;
  }
  .column-two .ministers-col .mobile-radius-curve2 {
    border-radius: 0 40px 40px 40px;
  }
}
</style>
