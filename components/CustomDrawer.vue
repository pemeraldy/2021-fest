<template>
  <v-card class="custom-drawer purple">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> Application </v-list-item-title>
        <v-list-item-subtitle> subtext </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {}
</script>

<style>
.custom-drawer {
  position: absolute;
  width: 100%;
  height: 83vh;
  background-color: #580045;
  z-index: 1000000000;
}
</style>
