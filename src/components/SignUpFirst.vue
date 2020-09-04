<template>
  <div class="row justify-center col-12" v-if="show">
    <div class="row col-8 justify-center">
      <span class="col-12 text-secondary"> Nome Completo </span>
      <q-input dense dark bg-color="secondary" class="borda-arredondada col-12"/>
    </div>
    <div class="row col-8 justify-center">
      <span class="col-12 text-secondary"> E-mail </span>
      <q-input dense dark bg-color="secondary" class="borda-arredondada col-12"/>
    </div>
    <div class="row col-8 justify-center">
      <span class="col-12 text-secondary"> Senha </span>
      <q-input dense dark bg-color="secondary" class="col-12"/>
    </div>
    <div class="row col-8 justify-center">
      <span class="col-12 text-secondary"> Insira novamente sua senha </span>
      <q-input dense dark bg-color="secondary" class="borda-arredondada col-12"/>
    </div>
    <div class="row col-8 justify-center">
      <span class="col-12 text-secondary"> CPF </span>
      <q-input dense dark bg-color="secondary" class="borda-arredondada col-12"/>
    </div>
    <div class="row col-8 justify-center">
      <span class="col-12 text-secondary"> RG </span>
      <q-input dense dark bg-color="secondary" class="borda-arredondada col-12"/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  },
  methods: {
    showComponent () {
      this.show = true
    },
    hideComponent () {
      this.show = false
    }
  }
}
</script>

<style>
.btn {
  height: 35px
}
</style>
