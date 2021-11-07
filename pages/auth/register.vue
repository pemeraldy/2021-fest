<template>
  <div>
    <Hero class="d-md-none" background-image="register-hero-bg.png">
      <div class="d-flex hero-content justify-center align-center">
        <h3 class="white--text pa-4">Register for the festival convention</h3>
      </div>
    </Hero>
    <AppHero class="d-none d-md-block" background-image="register-bg-desk.png">
      <div class="d-flex hero-desk-content justify-center align-center">
        <h3 class="white--text pa-4">Register for the festival convention</h3>
      </div>
    </AppHero>
    <v-container>
      <div class="mt-10">
        <h1 class="form-heading text-md-center">Kindly fill in your details</h1>
      </div>
      <v-form class="register-form">
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="input-group">
                <label for="fname"
                  >First Name <span class="required">*</span></label
                >
                <input
                  id="fname"
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
                  required
                  class="mt-2"
                  name="email"
                  type="email"
                />
              </div>

              <v-radio-group>
                <p>Are you new to Petra?</p>
                <v-radio label="Yes" value="nes"></v-radio>
                <v-radio label="No" value="no"></v-radio>
              </v-radio-group>
              <v-radio-group>
                <p>Will you be attending in person?</p>
                <v-radio label="In-person" value="yes"></v-radio>
                <v-radio label="online" value="no"></v-radio>
              </v-radio-group>

              <div class="input-group mt-2">
                <label for="email">Where do you live?</label>
                <input
                  id="email"
                  required
                  class="mt-2"
                  name="email"
                  type="email"
                  placeholder="Example Maitama, Abuja"
                />
              </div>

              <v-radio-group>
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
                  <BaseBtn text="Register" />
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
export default {
  name: 'RegisterPage',
  layout: 'custom',
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
  width: 669px;
  height: 125px;
  margin: 0 auto;
  @media screen and(max-width:440px) {
    width: 90%;
    height: 64px;
  }
}
</style>
