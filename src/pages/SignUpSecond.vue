<template>
  <q-page class="row justify-center">
    <div class="row justify-center col-12">
      <span class="text-h6 text-secondary"> ABRA SUA CONTA </span>
    </div>
    <div class="row justify-center col-12">
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
    <div class="row col-8 borda justify-center q-pt-lg">
      <q-btn label="criar Conta" color="secondary" dense class="q-px-lg btn" @click="createCount()"/>
    </div>
  </q-page>
</template>

<script>
export default {
  methods: {
    createCount () {}
  }
}
</script>
