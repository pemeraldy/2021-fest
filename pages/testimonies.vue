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
          Daily Schedule of the <br />
          festival convention
          <!-- {{pageData.data.page_title.value}} -->
        </h3>
      </div>
    </DesktopHero>

    <div class="my-16">
      <v-container>
        <v-row>
          <v-col class="mb-5" cols="12" md="12">
            <v-card class="mx-auto testimony-card" max-width="344" height="250">
              <div class="d-flex testifier-content">
                <div class="img-wrap">
                  <input ref="imgUpload" type="file" hidden name="image" />
                  <div
                    v-if="!imageUploaded"
                    class="
                      img-placeholder
                      d-flex
                      justify-center
                      flex-column
                      align-center
                    "
                  >
                    <img
                      class="d-block"
                      src="~/assets/imgs/feather_image.png"
                      alt="upload"
                    />
                    <span class="text-center">Insert picture</span>
                  </div>
                </div>
                <v-form class="testimony-form pa-2">
                  <input
                    v-model="testifierName"
                    class="mb-3 pb-1"
                    placeholder="Type your name"
                  />
                  <textarea
                    id="testimony"
                    v-model="testimonyContent"
                    name="testimony"
                    placeholder="Type your testimony"
                  ></textarea>
                </v-form>
              </div>
            </v-card>
            <div class="d-flex btn-wrapper justify-center mt-5">
              <BaseBtn text="Submit" />
            </div>
          </v-col>
          <v-col class="my-10" cols="12">
            <h2 class="text-center">Recent Testimonies</h2>
          </v-col>
          <v-col v-for="i in 6" :key="i" cols="12" md="4" lg="4">
            <TestimonyCard :testimony="demoTestimony" />
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
  data() {
    return {
      demoTestimony: {
        name: 'Jane Alan',
        content:
          'Urna tincidunt pretium malesuada nisl et. Id elementum etiam proin tellus integer ultrices nunc. Pharetra, lorem porttitor vel posuere facilisis facilisis purus molestie. Convallis amet at orci posuere scelerisque amet. Posuere faucibus id mauris, ipsum, vitae. Morbi eget pellentesque quam arcu dictum. Convallis amet at orci posuere scelerisque amet.Convallis amet at orci posuere scelerisque amet.',
        image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      },
      testifierName: '',
      testimonyContent: '',
      imageUploaded: false,
      pageData: {
        data: {
          banner_image_desktop: { value: '/faq-desk.png' },
          banner_image_mobile: { value: '/faq-mobile.png.png' },
          page_title: { value: 'faqs' },
        },
      },
    }
  },
  async fetch() {
    try {
      this.pageData = await this.$axios.$get('/api/page/schedule')
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
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
.v-sheet.v-card.testimony-card {
  border-radius: 60px 0 60px 0;
  overflow: hidden;
}
// .testimony-card{}
.testifier-content {
  width: 100%;
}
.img-placeholder {
  width: 100%;
  height: 100%;
}
.img-wrap {
  cursor: pointer;
  width: 100px;
  flex-shrink: 0;
  align-self: stretch;
  background: #c4c4c4;
  // background: orange;
}
.testimony-form {
  width: 100%;
  min-height: 256px;
  max-height: 300px;
}
.testimony-form input:focus {
  outline: none;
}
.testimony-form input {
  width: 100%;
  display: block;
  // font-size: 10px;
  padding: 2px;
  border-bottom: 1px solid #b7b7b7;
}
.testimony-form textarea:focus {
  outline: none;
}
.testimony-form textarea {
  resize: none;
  overflow: auto;
  width: 100%;
  height: 100%;
  max-height: 169px;
}
.btn-wrapper {
  height: 58px;
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
