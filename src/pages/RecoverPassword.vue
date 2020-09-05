<template>
  <q-page class="container">
    <div class="row justify-center col-12 q-pt-xs q-mb-md">
      <span class="text-h6 text-secondary"> RECUPERAR SENHA </span>
    </div>
    <div class="row q-pt-xl justify-center">
      <div class="row col-9 justify-center q-my-xs">
        <span class="col-12 text-secondary text-weight-medium"> E-mail </span>
        <q-input v-model="form.email" color="white" bg-color="secondary" class="full-width" dark filled dense />
      </div>
      <div class="row col-9 justify-center q-my-xs">
        <span class="col-12 text-secondary text-weight-medium"> Nova Senha </span>
        <q-input v-model="form.password" color="white" bg-color="secondary" class="full-width" dark filled dense />
      </div>
      <div class="row col-9 justify-center q-my-xs">
        <span class="col-12 text-secondary text-weight-medium"> Confirmar Nova Senha </span>
        <q-input v-model="form.passwordCheck" color="white" bg-color="secondary" class="full-width" dark filled dense />
      </div>
      <div class="row col-9 justify-center">
        <q-btn color="secondary" class="btn" label="enviar"/>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: '',
        passwordCheck: ''
      }
    }
  }
}
</script>

<style scoped>
.btn {
  height: 35px;
  padding: 0 11%;
  margin: 15% 0 0 0;
}
</style>
