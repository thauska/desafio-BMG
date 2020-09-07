<template>
  <q-page class="container">
    <div class="row justify-center col-12 q-pt-xs">
      <span class="text-h6 text-secondary q-mt-lg"> RECUPERAR SENHA </span>
    </div>
    <div class="row q-pt-xl justify-center">
      <div class="row col-9 justify-center q-my-xs">
        <span class="col-12 text-secondary text-weight-medium"> E-mail </span>
        <q-input v-model="form.email" color="white" bg-color="secondary" class="full-width" dark filled dense />
      </div>
      <div class="row col-9 justify-center q-my-xs">
        <span class="col-12 text-secondary text-weight-medium"> Nova Senha </span>
        <q-input v-model="form.password" color="white" bg-color="secondary" class="full-width" dark filled dense :type="isPwd ? 'password' : 'text'">
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              color="white"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </div>
      <div class="row col-9 justify-center q-my-xs">
        <span class="col-12 text-secondary text-weight-medium"> Confirmar Nova Senha </span>
        <q-input v-model="form.passwordCheck" color="white" bg-color="secondary" class="full-width" dark filled dense>
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              color="white"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </div>
      <div class="row col-9 justify-center">
        <q-btn @click="sendEmail" color="secondary" unelevated class="btn full-width" :loading="isSendingEmail" label="enviar"/>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      isPwd: true,
      form: {
        email: '',
        password: '',
        passwordCheck: ''
      },
      isSendingEmail: false
    }
  },
  methods: {
    sendEmail () {
      this.isSendingEmail = true
      setTimeout(() => {
        this.isSendingEmail = false
        this.$router.push('/login')
      }, 5000)
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
