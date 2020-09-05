<template>
  <div class="row justify-center col-12 q-gutter-y-xs">
    <div class="row col-9 justify-center">
      <span class="col-12 text-secondary text-weight-medium q-mb-xs"> Gênero </span>
      <q-radio v-model="gender" dense color="secondary" label="Feminino" class="col-12 text-secondary"/>
      <q-radio dense v-model="gender" color="secondary" label="Outros" class="col-auto q-pt-none text-secondary"/>
      <q-input class="col full-width q-pl-sm" filled color="secondary" dense label="Qual?"/>
    </div>
    <div class="row col-9 justify-center">
      <span class="col-12 text-secondary text-weight-medium"> Data de nascimento </span>
      <q-input color="white" bg-color="secondary" mask="##/##/####" class="full-width" dark filled dense />
    </div>
    <div class="row col-9 justify-center">
      <span class="col-12 text-secondary text-weight-medium"> Celular </span>
      <q-input color="white" bg-color="secondary" mask="(##) #####-####" unmasked-value class="full-width" dark filled dense />
    </div>
    <div class="row col-9 justify-center text-weight-medium">
      <span class="col-12 text-secondary"> Telefone </span>
      <q-input color="white" bg-color="secondary" mask="(##) ####-####" class="full-width" dark filled dense />
    </div>
    <div class="row col-9 justify-center q-pt-sm">
      <q-radio dense color="secondary" size="xs" class="full-width">
      <span class="text-caption">Li e concordo com os termos de uso e políticas de privacidade</span>
      </q-radio>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      gender: {}
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
