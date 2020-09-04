<template>
  <div class="row justify-center col-12" v-if="show">
    <div class="row col-8 justify-center">
      <span class="col-12 text-secondary"> Gênero </span>
      <q-radio dense color="secondary" label="Feminino" class="col-12 text-secondary"/>
      <q-radio dense color="secondary" label="Outros" class="col-6 text-secondary"/>
      <q-input class="col-6 q-mb-md" color="secondary" dense label="Qual"/>
    </div>
    <div class="row col-8 justify-center">
      <span class="col-12 text-secondary"> Data de nascimento </span>
      <q-input dense dark bg-color="secondary" class="col-12"/>
    </div>
    <div class="row col-8 justify-center">
      <span class="col-12 text-secondary"> Celular </span>
      <q-input dense dark bg-color="secondary" class="col-12"/>
    </div>
    <div class="row col-8 justify-center">
      <span class="col-12 text-secondary"> Telefone </span>
      <q-input dense dark bg-color="secondary" class="col-12"/>
    </div>
    <div class="row col-8 justify-center q-pt-sm">
      <q-radio dense color="secondary" label="Li e concordo com os termos de uso e políticas de privacidade." class="col-12"/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
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

</style>
