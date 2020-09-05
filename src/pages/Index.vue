<template>
  <q-page class="row justify-center">
    <div class="row col-12 justify-center">
      <img class="logo-ada" src="../../public/ADA2.png" height="100"/>
    </div>
    <div class="row col-12 justify-center">
      <div class="col-12 row justify-center">
        <q-btn class="q-px-md btn" color="secondary" label="Seja uma cliente" no-caps outline dense @click="goSignUp()"/>
      </div>
      <div class="col-12 row justify-center">
        <q-btn class="q-px-xl btn login" color="secondary" label="Entrar" no-caps dense @click="goLogin()"/>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  methods: {
    goLogin () {
      this.$router.push('/login')
    },
    goSignUp () {
      this.$router.push('/cadastro')
    }
  }
}
</script>

<style scoped>
/* .borda {
  border: 5px solid red;
} */
.btn {
  height: 35px;
  padding: 0 20%;
}
.login {
  padding: 0 29%;
}
.container-logo-bmg {
  height: 50px !important;
}
</style>
