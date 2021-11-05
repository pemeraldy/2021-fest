<template>
  <div>
    <Hero background-image="login-hero-bg.png">
      <div class="d-flex hero-content justify-center align-center">
        <h3 class="white--text pa-4">Login to your Account</h3>
      </div>
    </Hero>
    <v-container>
      <div class="mt-10">
        <!-- <h1 class="form-heading">Kindly fill in your details</h1> -->
      </div>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="input-group">
                <label for="email">Email/Phone numer </label>
                <input
                  id="email"
                  required
                  name="email"
                  class="mt-2"
                  type="text"
                  placeholder="Type in your Email or Phone number"
                />
              </div>
              <div class="input-group mt-2">
                <label for="password">Password </label>
                <input
                  id="lname"
                  required
                  name="lastname"
                  class="mt-2"
                  type="password"
                  placeholder="Type in your password"
                />
              </div>
              <p class="mb-12 mt-6 grey--text">
                Forgot password?
                <nuxt-link to="/auth/reser-password">Reset</nuxt-link>
              </p>
              <p class="text-center grey--text mt-5">
                Don't have an account?
                <nuxt-link to="/auth/register">Register</nuxt-link>
              </p>
              <div class="mt-5 d-flex justify-center">
                <BaseBtn text="Login" width="305" />
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
a {
  text-decoration: none !important;
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
</style>
