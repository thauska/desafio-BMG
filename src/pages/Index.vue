<template>
  <q-page class="row justify-center">
    <div class="col-12 text-center q-mt-xl q-pt-lg">
      <img src="../../public/ADA-logo.png" width="150"/>
    </div>
    <div class="col-9">
    <div>
        <q-btn class="full-width" unelevated color="secondary" label="Entrar" @click="goLogin()"/>
    </div>
    <div class="q-mt-md">
        <q-btn class="full-width" color="secondary" label="Seja uma cliente" outline @click="goSignUp()"/>
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
