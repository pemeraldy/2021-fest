<template>
  <div>
    <Hero>
      <template #heroActions>
        <div class="btn-wrap mt-6 d-flex justify-center">
          <!-- <v-btn height="64" class="register-btn" dark width="343">Register</v-btn> -->
          <BaseBtn text="Register" />
        </div>
      </template>
    </Hero>

    <v-container fluid>
      <v-row justify="center" align="center">
        <MainContent />
      </v-row>
    </v-container>
  </div>
</template>
<style scoped></style>
