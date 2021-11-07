<template>
  <div class="invite-card pb-5">
    <div class="card-wrap d-flex flex-column align-center justify-center">
      <v-avatar width="96" height="96" class="card-logo">
        <PetraLogoBright width="100" height="100" />
      </v-avatar>
      <div class="inviter">
        <img src="~/assets/imgs/pst-ay-invite.png" alt="" />
      </div>
    </div>
    <div class="card-content">
      <div class="invitee d-flex justify-center align-center">
        Pastor Ayo Ajani
      </div>
      <div class="mt-10 pb-12">
        <h1 class="card-heading text-center">Days Of</h1>
        <h1 class="card-heading mt-n5 text-center">Heaven on Earth</h1>
        <div class="mt-9 d-flex flex-column align-center">
          <h2 class="text-uppercase text-center">1st - 5th, December 2021</h2>
        </div>
        <div class="d-flex px-16 justify-center">
          <v-divider color="black" class="my-5"></v-divider>
        </div>
        <h2 class="text-uppercase text-center">VENUEXXXXX</h2>
        <p class="text-center message px-14 mt-10">
          Ut condimentum nec, mattis eget et felis. Magna ut malesuada
          ullamcorper mauris. Platea proin blandit volutpat velit, iaculis
          natoque vel. Pretium pretium, sit etiam cras mattis dolor cras.
        </p>
        <p class="mt-10 pa-14 card-link">
          To register, visit: http:/xxxxxxxxxxxxxx
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.invite-card {
  // max-width: 639px;
}
.card-wrap {
  border-top-left-radius: 80px;
  background: #b195959b url('~/assets/imgs/invite-card-image.png');
  position: relative;
  // width: 636px;
  height: 745px;
}
.card-logo {
  position: absolute;
  top: 12px;
  right: 14px;
}
.inviter {
  // width: 450px;
  height: 450px;
}
img {
  width: 100%;
}
.card-content {
  background: url('~/assets/imgs/card-content-bg.png') no-repeat;
  background-size: cover;
}
.invitee {
  margin: 0 auto;
  background: linear-gradient(
    121deg,
    #f29822 13.56%,
    #f26643 46.86%,
    #f24857 72.25%,
    #f23c5f 86.44%
  );
  height: 75px;
  width: 472px;
  border-radius: 10px;
  font-weight: 500;
  color: #ffff;
  font-size: 28px;
  font-style: italic;
  text-align: center;
  position: relative;
  top: -40px;
}
.card-heading {
  font-weight: 700;
  font-size: 45px;
}
.card-link,
.message {
  font-size: 23px;
}
</style>
