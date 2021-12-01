<template>
  <div>
    <MobileHero
      class="d-md-none"
      :background-image="pageData.data.banner_image_mobile.value"
    >
      <div class="d-flex hero-content justify-center align-center">
        <h1 class="white--text text-center">
          {{ pageData.data.page_title.value }}
        </h1>
      </div>
    </MobileHero>
    <DesktopHero
      class="d-none d-md-block"
      :background-image="pageData.data.banner_image_desktop.value"
    >
      <div class="d-flex hero-desk-content justify-center align-center">
        <h3 class="white--text pa-4 schedule-header">
          Ministers at the <br />
          festival convention
          <!-- {{pageData.data.page_title.value}} -->
        </h3>
      </div>
    </DesktopHero>

    <div class="my-16">
      <v-container>
        <v-row class="d-md-none">
          <v-col class="d-flex justify-center" cols="12" md="4"></v-col>

          <v-col class="d-flex justify-center" cols="12" md="4">
            <v-carousel v-model="model" height="1000" hide-delimiters>
              <v-carousel-item v-for="i in 3" :key="i">
                <v-card class="mx-auto ministers-bio__card" max-width="344">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="230px"
                  ></v-img>

                  <v-card-title> Bishop Francis Wale Oke </v-card-title>

                  <v-card-subtitle>
                    Head Pastor, Petra Christian Centre
                  </v-card-subtitle>
                  <v-expand-transition>
                    <div v-show="show">
                      <v-divider></v-divider>

                      <v-card-text>
                        Bishop Francis Wale Oke is the President and founder of
                        The Sword of The Spirit Ministries International with
                        the Headquarters located in Ibadan City, Oyo State,
                        Nigeria. For over thirty years he has conducted mass
                        crusades all over Nigeria with crowds of thousands of
                        people in a single service. He also conducts a prayer
                        and intercession programme at the Federal Capital
                        Territory Abuja Nigeria tagged The Nigeria Turning
                        Point, this programme has brought millions of people
                        together to pray for the peace and prosperity of
                        Nigeria. In 1989, Bishop Francis Wale Oke founded the
                        Christ Life Church which has grown exponentially having
                        over two hundred branches located all over Nigeria. He
                        hosts the Annual Holy Ghost Convention through which
                        multitudes have been transformed, many ministries have
                        been born and imparted to the glory of God. He is
                        married to Victoria and they are blessed with children.
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col class="d-flex justify-center" cols="12" md="4"></v-col>
        </v-row>
        <v-row class="d-none d-md-flex justify-center">
          <v-col v-for="min in ministers" :key="min.name" cols="12" md="6">
            <v-card class="mx-auto ministers-bio__card" max-width="344">
              <v-img
                :src="min.photo_desktop"
                height="400px"
              ></v-img>

              <v-card-title> {{min.name}} </v-card-title>

              <v-card-subtitle>
                {{min.title}}
              </v-card-subtitle>
              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>

                  <v-card-text>
                    {{min.bio}}
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Ministers',
  layout: 'custom',
  data() {
    return {
      model: 0,
      show: true,
      pageData: {
        data: {
          banner_image_desktop: { value: '/faq-desk.png' },
          banner_image_mobile: { value: '/faq-mobile.png.png' },
          page_title: { value: 'faqs' },
        },
      },
      ministers: [],
    }
  },
  async fetch() {
    try {
      this.pageData = await this.$axios.$get('/api/page/schedule')
      const resp = await this.$axios.$get('/api/minister')
      this.ministers = await resp.data
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
}
</script>

<style lang="scss" scoped>
.ministers-bio__card.v-sheet.v-card:not(.v-sheet--outlined) {
  border-radius: 60px 0 60px 60px;
}
.ministers-bio__card.v-application--is-ltr .v-window__next,
.v-window__next {
  position: absolute;
  top: 121px !important;
}
.v-window__prev,
.v-window__next {
  position: absolute;
  top: 121px !important;
}
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

@media screen and (max-width: 440px) {
  .testimony-card {
    max-height: 225px;
  }
  .hero-content {
    min-height: 208px !important;
    padding: 0 20px;
    h3 {
      font-size: 26px;
    }
  }
  .date-display {
    width: 56px;
    height: 104px;
    border-radius: 40px;
    .date-display__day {
      font-size: 14px;
    }
    .date-display__date {
      width: 24px;
      height: 24px;
      font-size: 14px;
    }
    .date-display__month {
      font-size: 14px;
    }
  }
}
</style>
