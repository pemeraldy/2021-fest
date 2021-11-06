<template>
  <div>
    <AppHero background-image="invite-hero.png" />
    <v-container class="mt-12">
      <v-row>
        <v-col cols="12">
          <div class="d-flex flex-column align-center">
            <p>Click on “+” to add your picture</p>
            <InviteCard />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Invites',
  layout: 'custom',
}
</script>

<style></style>
