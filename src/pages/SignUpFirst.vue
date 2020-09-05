<template>
  <q-page class="row justify-center">
    <div class="row justify-center col-12">
      <span class="text-h6 text-secondary"> ABRA SUA CONTA </span>
    </div>
    <div class="row justify-center col-12">
      <div class="row col-8 justify-center">
        <span class="col-12 text-secondary"> Nome Completo </span>
        <q-input dense dark bg-color="secondary" class="col-12"/>
      </div>
      <div class="row col-8 justify-center">
        <span class="col-12 text-secondary"> E-mail </span>
        <q-input dense dark bg-color="secondary" class="col-12"/>
      </div>
      <div class="row col-8 justify-center">
        <span class="col-12 text-secondary"> Senha </span>
        <q-input dense dark bg-color="secondary" class="col-12"/>
      </div>
      <div class="row col-8 justify-center">
        <span class="col-12 text-secondary"> Insira novamente sua senha </span>
        <q-input dense dark bg-color="secondary" class="col-12"/>
      </div>
      <div class="row col-8 justify-center">
        <span class="col-12 text-secondary"> CPF </span>
        <q-input dense dark bg-color="secondary" class="col-12"/>
      </div>
      <div class="row col-8 justify-center">
        <span class="col-12 text-secondary"> RG </span>
        <q-input dense dark bg-color="secondary" class="col-12"/>
      </div>
    </div>
    <sign-up-second ref="SignUpSecond"/>
    <div class="row col-8 borda justify-center q-pt-lg">
      <q-btn label="avançar" color="secondary" dense class="q-px-lg btn" @click="next()"/>
    </div>
  </q-page>
</template>

<script>
import SignUpSecond from '../components/SignUpSecond'
export default {
  components: {
    SignUpSecond
  },
  data () {
    return {
      labelButton: 'Avançar'
    }
  },
  methods: {
    next () {
      this.$router.push('/cadastrar-segunda-etapa')
    }
  }
}
</script>

<style>

</style>
