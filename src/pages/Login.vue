<template>
  <q-page class="container">
    <div class="row justify-center">
      <img class="logo-ada" src="../../public/ADA2.png" height="100"/>
    </div>
    <div class="row align-data">
      <div class="row col-12">
        <div class="text-secondary text-body1 text-weight-bold"> Oi, Fulaninha </div>
      </div>
      <div class="row col-12">
        <span class="text-secondary text-body1 text-weight-bold"> Conta: 111111-1 </span>
      </div>
    </div>
    <div class="row col-8 justify-center">
      <q-input dark filled dense bg-color="secondary" :type="isPwd ? 'password' : 'text'">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            color="white"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <span class="text-secondary" @click="goRecoverPassword()"> Esqueci minha senha </span>
    </div>
    <div class="row col-12 justify-center">
      <q-btn label="entrar" color="secondary" dense class="btn"/>
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
