<template>
  <q-page class="container q-pt-lg">
    <div class="row justify-center q-mt-md">
      <img src="../../public/ADA-logo.png" width="150"/>
    </div>
    <div class="row justify-center q-mt-md">
      <div class="col-9">
        <span> Olá, Maria</span>
      </div>
      <div class="col-9">
        <span class="text-secondary text-body1 text-weight-bold"> Conta: 846486877-0 </span>
      </div>
    <div class="col-9 text-center q-mt-md">
      <q-input label="Informe a sua senha" color="secondary" dark filled dense bg-color="secondary" :type="isPwd ? 'password' : 'text'">
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
    <div class="col-9 text-center q-mt-sm">
      <span class="text-secondary" @click="goRecoverPassword()"> Esqueci minha senha </span>
    </div>
    <div class="col-9 justify-center q-mt-md">
      <q-btn label="Entrar" color="secondary" class="full-width" dense :to="'/dashboard'"/>
    </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      isPwd: true
    }
  },
  methods: {
    goRecoverPassword () {
      this.$router.push('/recuperar-senha')
    },
    login () {
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style scoped>
.btn {
  height: 35px;
  padding: 0 11%;
  margin: 15% 0 10% 0;
}
.align-data {
  padding: 10% 0 18% 20%
}
</style>
