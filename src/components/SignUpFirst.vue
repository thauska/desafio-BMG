<template>
  <div class="row justify-center col-12 q-gutter-y-xs">
    <div class="row col-9 justify-center">
      <span class="col-12 text-secondary text-weight-medium"> Nome Completo </span>
      <q-input v-model="fullName" color="white" bg-color="secondary" class="full-width" dark filled dense />
    </div>
    <div class="row col-9 justify-center">
      <span class="col-12 text-secondary text-weight-medium"> E-mail </span>
       <q-input v-model="email" color="white" bg-color="secondary" class="full-width" dark filled dense />
    </div>
    <div class="row col-9 justify-center">
      <span class="col-12 text-secondary text-weight-medium"> Senha </span>
       <q-input v-model="password" color="white" bg-color="secondary" :type=" isPwd ? 'password' : 'text'" class="full-width" dark filled dense>
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="showPwd"
          />
        </template>
       </q-input>
    </div>
    <div class="row col-9 justify-center">
      <span class="col-12 text-secondary text-weight-medium"> CPF </span>
       <q-input v-model="cpf" color="white" bg-color="secondary" class="full-width" dark filled dense />
    </div>
    <div class="row col-9 justify-center">
      <span class="col-12 text-secondary text-weight-medium"> RG </span>
       <q-input v-model="rg" color="white" bg-color="secondary" class="full-width" dark filled dense />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isPwd: true,
      password: '',
      email: '',
      fullName: '',
      cpf: '',
      rg: ''
    }
  },
  methods: {
    showPwd () {
      this.isPwd = !this.isPwd
    }
  }
}
</script>

<style>
.btn {
  height: 35px
}
</style>
