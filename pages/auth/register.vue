<template>
  <div>
    <MobileHero class="d-md-none" :background-image="pageData.data.banner_image_mobile.value">
      <div class="d-flex hero-content justify-center align-center">
        <h3 class="white--text pa-4">{{pageData.data.page_title.value}}</h3>
      </div>
    </MobileHero>
    <DesktopHero
      class="d-none d-md-block"
      :background-image="pageData.data.banner_image_desktop.value"
    >
      <div class="d-flex hero-desk-content justify-center align-center">
        <h3 class="white--text pa-4">{{pageData.data.page_title.value}}</h3>
      </div>
    </DesktopHero>
    <v-container>
      <div class="mt-10">
        <h1 class="form-heading text-center text-md-center">
          Kindly fill in your details
        </h1>
      </div>
      <v-form  ref="regForm" class="register-form" @submit.prevent="submit">
        <fieldset :disabled="submitting">
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="input-group">
                <label for="fname"
                  >First Name <span class="required">*</span></label
                >
                <input
                  id="fname"
                  v-model="$v.user.first_name.$model"
                  required
                  name="firstname"
                  class="mt-2"
                  :class="[$v.user.first_name.$error ? 'invalid' : '']"
                  type="text"
                />
              </div>
              <!-- first Name Error: {{ $v.user.first_name.$error }} invalid:
              {{ $v.user.first_name.$invalid }} -->
              <div class="input-group mt-2">
                <label for="lname"
                  >Last Name <span class="required">*</span></label
                >
                <input
                  id="lname"
                  v-model="$v.user.last_name.$model"
                  required
                  name="lastname"
                  class="mt-2"
                  :class="[$v.user.last_name.$error ? 'invalid' : '']"
                  type="text"
                />
              </div>
              <div class="input-group mt-2">
                <label for="number"
                  >Phone number <span class="required">*</span></label
                >
                <input
                  id="number"
                  v-model="$v.user.phone_number.$model"
                  required
                  class="mt-2"
                  :class="[$v.user.phone_number.$error ? 'invalid' : '']"
                  name="number"
                  type="text"
                />
                <span
                  v-if="$v.user.phone_number.$error"
                  class="red--text error-text"
                  >Please enter a valid phone number</span
                >
              </div>
              <div class="input-group mt-2">
                <label for="email">Email address </label>
                <input
                  id="email"
                  v-model="$v.user.email_address.$model"
                  required
                  class="mt-2"
                  :class="[$v.user.email_address.$error ? 'invalid' : '']"
                  name="email"
                  type="email"
                />
              </div>

              <v-radio-group v-model="$v.user.new_to_petra.$model">
                <p>Are you new to Petra?</p>
                <span
                  v-if="$v.user.new_to_petra.$error"
                  class="red--text error-text"
                  >Please select an Yes / No</span
                >
                <v-radio label="Yes" value="Yes" name="yes"></v-radio>
                <v-radio label="No" name="no" value="No"></v-radio>
              </v-radio-group>

              <!-- New to petra {{ user.new_to_petra }} -->
              <v-radio-group v-model="$v.user.attendance_type.$model">
                <p>
                  Will you be attending in person?
                </p>
                <span
                  v-if="$v.user.attendance_type.$error"
                  class="red--text error-text"
                  >Please select an option</span
                >
                <v-radio label="In person" value="In-person"></v-radio>
                <v-radio label="online" value="online"></v-radio>
              </v-radio-group>

              <div class="input-group mt-2">
                <label for="email">Where do you live?</label>
                <input
                  id="location"
                  v-model="$v.user.location.$model"
                  required
                  class="mt-2"
                  :class="[$v.user.location.$error ? 'invalid' : '']"
                  name="location"
                  type="text"
                  placeholder="Example Maitama, Abuja"
                />
              </div>

              <v-radio-group v-model="$v.user.heard_about_festival_from.$model">
                <p>How did you hear about the festival convention?</p>
                <span
                  v-if="$v.user.heard_about_festival_from.$error"
                  class="red--text error-text"
                  >Please select an option</span
                >
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
                <v-scale-transition>
                  <v-alert v-if="showAlert" dense text :type="alertType">
                    {{ alertMessage }}
                  </v-alert>
                </v-scale-transition>
                <div class="btn-wrap mt-6 d-flex justify-center">
                  <BaseBtn :submitting="submitting" text="Register" @click.prevent="submit" />
                </div>
                <p class="mt-2">
                  Have an account already ?
                  <nuxt-link to="/">Login</nuxt-link>
                </p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </fieldset>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { minLength, email, integer, required } from 'vuelidate/lib/validators'
export default {
  name: 'RegisterPage',
  mixins: [validationMixin],
  layout: 'custom',
  data() {
    return {
      pageData: {
        data:{
          banner_image_desktop: { value: '/hero-bg-lg2-cmprs.png' },
        banner_image_mobile: { value: '/landing-hero-mobi.png' },
        page_title: { value: 'Register for the festival' },
        }
      },
      showAlert: false,
      alertMessage: 'No message yet',
      alertType: 'success',
      submitting: false,
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
  async fetch() {
    try {
      this.pageData = await this.$axios.$get('/api/page/register')
    } catch (error) {}
  },
  validations: {
    user: {
      first_name: {
        required,
        minLength: minLength(2),
      },
      last_name: {
        required,
        minLength: minLength(2),
      },
      phone_number: {
        required,
        integer,
        minLength: minLength(10),
      },
      email_address: {
        required,
        email,
      },
      location: {
        required,
      },
      new_to_petra: {
        required,
      },
      attendance_type: {
        required,
      },
      heard_about_festival_from: {
        required,
      },
    },
  },
  async mounted() {
    console.log(this.pageData)
    await window.navigator.geolocation
      // eslint-disable-next-line no-console
      .getCurrentPosition(this.getLocations, ()=>{})
    
  },
  methods: {
    async getLocations(e) {
      const { coords } = await e
      this.user.latitude = `${coords.latitude}`
      this.user.longitude = `${coords.longitude}`
      // eslint-disable-next-line no-console
      // console.log('Cordinates', coords)
    },
    displayAlert(message, type, display){
      this.alertMessage = message
        this.alertType = type
        this.showAlert = display
    },
    async submit() {
      this.$v.user.$touch()
      // eslint-disable-next-line no-console
      console.log(this.user)
      if (this.$v.user.$invalid) return
      this.submitting = true
      const userDetails = this.user
      if (!this.user.latitude) {
        delete userDetails.latitude
        delete userDetails.longitude
      }
      try {
        const newToPetra = this.user.new_to_petra === 'Yes'
        const resp = await this.$axios.$post('/api/participants/', {
          ...userDetails,
          new_to_petra: newToPetra
        })
        this.displayAlert(resp.message, 'success', true)
        this.$refs.regForm.reset()
        this.submitting = false
        setTimeout(()=>{
          this.showAlert = false
          // this.$router.push('/auth/login')
        }, 2500)
      } catch (error) {
        const message = error.response.data.message
        // eslint-disable-next-line no-console
        this.displayAlert(message, 'error', true)
        this.submitting = false
        setTimeout(()=>{
          this.showAlert = false
        }, 3500)
        console.log(error.response)
      }
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
fieldset{
  border:none;
}
.input-group {
  width: 100%;
  label {
    display: block;
  }
  .red--text .error-text {
    font-size: 8px !important;
  }
  .required {
    color: #ff0000;
  }
  input.invalid {
    border: 0.3px solid #ff0000;
  }
  input.valid {
    border: 0.3px solid #03b67e;
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


/***
  {
      "first_name": "jola",
      "last_name": "main",
      "phone_number": "99809786756564",
      "email_address": "men@mdress.com",
      "pass_code": "D01PDB",
      "id": 9,
      "new_to_petra": false,
      "attendance_type": "In-person",
      "location": "Maina",
      "heard_about_festival_from": "petra"
  }
 */