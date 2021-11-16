<template>
  <div>
    <MobileHero
      class="d-md-none"
      :background-image="pageData.data.banner_image_desktop.value"
    >
      <div class="d-flex hero-content justify-center align-center"></div>
    </MobileHero>
    <DesktopHero
      class="d-none d-md-block"
      :background-image="pageData.data.banner_image_mobile.value"
    >
      <div class="d-flex hero-desk-content justify-center align-center">
        <h3 class="white--text pa-4 schedule-header">
          Daily Schedule of the <br />
          festival convention
        </h3>
      </div>
    </DesktopHero>
    
    <div class="my-16">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h1 class="text-center">Select a Date</h1>
          </v-col>
          <v-col class="mb-md-12" cols="12">
            <div class="d-flex justify-center">
              <div
                v-for="i in 5"
                :key="i"
                :class="[i == 1 && 'active']"
                class="
                  date-display
                  mx-md-5
                  mx-1
                  pa-md-5
                  pa-3
                  d-flex
                  flex-column
                  justify-space-around
                  align-center
                "
              >
                <span class="date-display__day">Wed</span>
                <span
                  class="date-display__date d-flex align-center justify-center"
                  >0{{i}}</span
                >
                <span class="date-display__month">Dec</span>
              </div>
            </div>
          </v-col>
          <v-col class="my-3 my-md-12" cols="12"></v-col>
          <!-- <div class="mt-md-16 pa-md-10"></div> -->
          <v-col cols="12" v-for="i in 3" :key="i" md="4">
            <v-card class="mx-auto custom-card" max-width="344">
              <!-- src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" -->
              <v-img
                :src="require('~/assets/imgs/card-img.png')"
                height="270px"
              ></v-img>

              <v-card-title class="custom-car__title">
                Morning: 8am - 12noon
              </v-card-title>

              <v-card-subtitle class="custom-car__subtitle my-2">
                Fresh Annointing
              </v-card-subtitle>
              <v-card-text class="pb-md-14 pb-10">
                <p>
                  Diam ultrices eu donec tristique ut faucibus amet adipiscing
                  eget. Porta pellentesque id condimentum eget at.
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Schedule',
  layout: 'custom',
  async fetch() {
    try {
      this.faqs = await this.$axios.$get('/api/faq')
      this.pageData = await this.$axios.$get('/api/page/faq')
    } catch (error) {
      console.log(error)
    }
  },
  data() {
    return {
      faqs: [],
      pageData: {
        data: {
          banner_image_desktop: { value: '/faq-desk.png' },
          banner_image_mobile: { value: '/faq-mobile.png.png' },
          page_title: { value: 'faqs' },
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
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
.v-sheet.v-card:not(.v-sheet--outlined).custom-card {
  border-radius: 80px 0px 80px 80px;
  box-shadow: -4px 2px 28px -2px rgba(0,0,0,0.46);
-webkit-box-shadow: -4px 2px 28px -2px rgba(0,0,0,0.46);
-moz-box-shadow: -4px 2px 28px -2px rgba(0,0,0,0.46);
}
.custom-car__title {
  font-size: 24px;
}
.custom-car__subtitle {
  font-size: 24px;
  font-weight: 700;
  color: #9b9b9b;
}

/* Date Styles*/
.date-display {
  width: 157px;
  height: 292px;
  color: #fff;
  border-radius: 85px;
  background: rgba(58, 1, 12, 0.5);
}
.date-display.active {
  background: linear-gradient(
    121deg,
    #f29822 13.56%,
    #f26643 46.86%,
    #f24857 72.25%,
    #f23c5f 86.44%
  );
}
.date-display__day {
  font-size: 25px;
}
.date-display__date {
  width: 64px;
  height: 64px;
  text-align: center;
  font-size: 26px;
  border-radius: 50%;
  background: #fff;
  color: #000;
}
.date-display__month {
  font-size: 25px;
}

@media screen and (max-width: 440px) {
  .hero-content {
    min-height: 208px !important;
    padding: 0 20px;
    h3 {
      font-size: 26px;
    }
  }
  .date-display{
    width: 56px;
    height: 104px;
    border-radius: 40px;
    .date-display__day{
      font-size: 14px;
    }
    .date-display__date{
      width: 24px;
      height: 24px;
      font-size: 14px;
    }
    .date-display__month{
      font-size: 14px;
    }
  }
}
</style>
