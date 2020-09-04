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
    <div class="row col-12 justify-center container-logo-bmg">
      <img src="../../public/banco-bmg-logo.png" height="35px"/>
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
      this.$router.push('/cadastrar')
    }
  }
}
</script>

<style>
/* .borda {
  border: 5px solid red;
} */
.logo-ada {
  position: relative;
  top: 24%;
}
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
