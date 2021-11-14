<template>
  <div>
    <MobileHero class="d-md-none" background-image="login-hero-bg.png">
      <div class="d-flex hero-content justify-center align-center">
        <h3 class="white--text pa-4">
          Login <br />
          to your Account
        </h3>
      </div>
    </MobileHero>
    <DesktopHero class="d-none d-md-block" background-image="login-hero-bg.png">
      <div class="d-flex hero-desk-content justify-center align-center">
        <h3 class="white--text pa-4">Register for the festival convention</h3>
      </div>
    </DesktopHero>
    <v-container>
      <div class="mt-10">
        <!-- <h1 class="form-heading">Kindly fill in your details</h1> -->
      </div>
      <v-form @submit.prevent="submit" class="login-form">
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="input-group">
                <label for="email">Email </label>
                <input
                  v-model="user.email"
                  id="email"
                  required
                  name="email"
                  class="mt-2"
                  :class="[$v.user.email.$error ? 'invalid' : '']"
                  type="text"
                  placeholder="Type in your Email or Phone number"
                />
              </div>
              <div class="input-group mt-2">
                <label for="password">Passcode </label>
                <input
                  v-model="user.passcode"
                  id="passcode"
                  required
                  name="passcode"
                  class="mt-2"
                  :class="[$v.user.passcode.$error ? 'invalid' : '']"
                  type="password"
                  placeholder="Type in your passcode"
                />
              </div>
              <p class="mb-12 mt-6 grey--text">
                Forgot password?
                <nuxt-link to="/">Reset</nuxt-link>
              </p>
              <p class="text-center grey--text mt-5">
                Don't have an account?
                <nuxt-link to="/">Register</nuxt-link>
              </p>
              <div class="mt-5 d-flex justify-center">
                <div @click="submit" class="btn-wrap mt-6 d-flex justify-center">
                  <BaseBtn text="Login" />
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {email, minLength, required} from 'vuelidate/lib/validators'
export default {
  name: 'Login',
  layout: 'custom',
  mixins:[validationMixin],
  data(){
    return {
      user:{
        email: '',
        passcode: '',
      }
    }
  },
  validations:{
    user:{
      email:{
        required,
        email
      },
      passcode:{
        required,
        minLength: minLength(4)
      }
    }
  },
  methods:{
    submit(){
      console.log(this.user, 'Validat:::', this.$v)
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none !important;
}
  input.invalid {
    border: 0.3px solid #ff0000;
  }
  input.valid {
    border: 0.3px solid #03b67e;
  }
.faint-text {
  opacity: 0.5;
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
  input::placeholder {
    opacity: 0.5;
    font-size: 14px;
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
.login-form {
  width: 60%;
  margin: 0 auto;
  @media screen and(max-width: 440px) {
    width: 100%;
  }
}
.btn-wrap {
  width: 669px;
  height: 125px;
  margin: 0 auto;
  @media screen and(max-width:440px) {
    width: 90%;
    height: 64px;
  }
}
.hero-desk-content {
  height: 100%;
  h3 {
    font-size: 62px;
  }
}
</style>
