<template>
  <div>
    <MobileHero class="d-md-none" background-image="register-hero-bg.png">
      <div class="d-flex hero-content justify-center align-center">
        <h3 class="white--text pa-4">Register for the festival convention</h3>
      </div>
    </MobileHero>
    <DesktopHero
      class="d-none d-md-block"
      background-image="register-bg-desk.png"
    >
      <div class="d-flex hero-desk-content justify-center align-center">
        <h3 class="white--text pa-4">Register for the festival convention</h3>
      </div>
    </DesktopHero>
    <v-container>
      <div class="mt-10">
        <h1 class="form-heading text-md-center">Kindly fill in your details</h1>
      </div>
      <v-form class="register-form" @submit.prevent="submit">
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="input-group">
                <label for="fname"
                  >First Name <span class="required">*</span></label
                >
                <input
                  id="fname"
                  v-model="user.first_name"
                  required
                  name="firstname"
                  class="mt-2"
                  type="text"
                />
              </div>
              <div class="input-group mt-2">
                <label for="lname"
                  >Last Name <span class="required">*</span></label
                >
                <input
                  id="lname"
                  v-model="user.last_name"
                  required
                  name="lastname"
                  class="mt-2"
                  type="text"
                />
              </div>
              <div class="input-group mt-2">
                <label for="number"
                  >Phone number <span class="required">*</span></label
                >
                <input
                  id="number"
                  v-model="user.phone_number"
                  required
                  class="mt-2"
                  name="number"
                  type="text"
                />
              </div>
              <div class="input-group mt-2">
                <label for="email">Email address </label>
                <input
                  id="email"
                  v-model="user.email_address"
                  required
                  class="mt-2"
                  name="email"
                  type="email"
                />
              </div>

              <v-radio-group v-model="user.new_to_petra">
                <p>Are you new to Petra?</p>
                <v-radio label="Yes" value="Yes" name="yes"></v-radio>
                <v-radio label="No" name="no" value="No"></v-radio>
              </v-radio-group>
              <!-- New to petra {{ user.new_to_petra }} -->
              <v-radio-group v-model="user.attendance_type">
                <p>
                  Will you be attending in person? {{ user.attendance_type }}
                </p>
                <v-radio label="In person" value="In-person"></v-radio>
                <v-radio label="online" value="online"></v-radio>
              </v-radio-group>

              <div class="input-group mt-2">
                <label for="email">Where do you live?</label>
                <input
                  id="location"
                  v-model="user.location"
                  required
                  class="mt-2"
                  name="location"
                  type="text"
                  placeholder="Example Maitama, Abuja"
                />
              </div>

              <v-radio-group v-model="user.heard_about_festival_from">
                <p>How did you hear about the festival convention?</p>
                <v-radio label="In Petra" value="petra"></v-radio>
                <v-radio label="Social media" value="media"></v-radio>
                <v-radio label="Word of mouth" value="word"></v-radio>
                <v-radio label="Others" value="other"></v-radio>
              </v-radio-group>

              <div class="input-group mt-2">
                <label for="numOfPeople"
                  >How many people will be attending with you?</label
                >
                <input
                  id="numOfPeople"
                  required
                  class="mt-2"
                  name="num of people"
                  type="number"
                />
              </div>
              <div class="mt-5 d-flex flex-column align-center justif-center">
                <div class="btn-wrap mt-6 d-flex justify-center">
                  <BaseBtn text="Register" @click.prevent="submit" />
                </div>
                <p class="mt-2">
                  Have an account already ?
                  <nuxt-link to="/auth/login">Login</nuxt-link>
                </p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
export default {
  name: 'RegisterPage',
  mixins: [validationMixin],
  layout: 'custom',
  data() {
    return {
      user: {
        first_name: '',
        last_name: '',
        phone_number: '',
        email_address: '',
        new_to_petra: '',
        attendance_type: '',
        location: '',
        longitude: '',
        latitude: '',
        heard_about_festival_from: '',
      },
    }
  },
  // validations: {
  //   first_name: '',
  //   last_name: '',
  //   phone_number: '',
  //   email_address: '',
  //   new_to_petra: '',
  //   attendance_type: '',
  //   location: '',
  //   longitude: '',
  //   latitude: '',
  //   heard_about_festival_from: '',
  // },
  mounted() {},
  methods: {
    submit() {
      // eslint-disable-next-line no-console
      console.log(this.user)
      //   try {
      //   const resp = await this.$axios.$post('/api/participants/', {
      //     first_name: 'Yopee',
      //     last_name: 'Main',
      //     phone_number: '08099999854',
      //     email_address: 'yopeeDon@Ymail.com',
      //     new_to_petra: false,
      //     attendance_type: 'in person',
      //     location: 'Life Camp',
      //     heard_about_festival_from: 'Church',
      //   })
      //   // eslint-disable-next-line no-console
      //   console.log(resp)
      // } catch (error) {
      //   // eslint-disable-next-line no-console
      //   console.log(error)
      // }
    },
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
.input-group {
  width: 100%;
  label {
    display: block;
  }
  .required {
    color: #ff0000;
  }
  input {
    width: 100%;
    height: 48px;
    padding: 10px;
    border: 0.3px solid #9b9b9b;
    border-radius: 10px;
  }
  input:focus {
    outline: none;
  }
}
@media screen and (max-width: 440px) {
  .hero-content {
    min-height: 208px !important;
  }
  .btn-wrap {
    width: 100%;
  }
  .form-heading {
    font-size: 24px;
    font-weight: 500;
  }
}
.hero-content {
  height: 100%;
  h3 {
    font-family: Lato;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
  }
}

.register-form {
  width: 60%;
  margin: 0 auto;
  @media screen and(max-width: 440px) {
    width: 100%;
  }
}
.btn-wrap {
  max-width: 669px;
  min-width: 300px;
  height: 125px;
  margin: 0 auto;
  @media screen and(max-width:440px) {
    width: 90%;
    height: 64px;
  }
}
</style>
