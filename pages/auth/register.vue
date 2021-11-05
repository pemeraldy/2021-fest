<template>
  <div>
    <Hero background-image="register-hero-bg.png">
      <div class="d-flex hero-content justify-center align-center">
        <h3 class="white--text pa-4">Register for the festival convention</h3>
      </div>
    </Hero>
    <v-container>
      <div class="mt-10">
        <h1 class="form-heading">Kindly fill in your details</h1>
      </div>
      <v-form>
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
  // layout: 'd'
}
</script>

<style lang="scss" scoped>
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
</style>
