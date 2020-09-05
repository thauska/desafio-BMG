<template>
  <q-page class="row justify-center">
    <div class="row justify-center col-12 q-mt-md q-mb-md">
      <span class="text-h6 text-secondary"> ABRA SUA CONTA </span>
    </div>
    <keep-alive>
      <component :is="component"></component>
    </keep-alive>
    <div class="row col-9 justify-center q-pt-lg q-mb-lg">
      <q-btn :label="labelBackButton" color="grey-8" outline dense class="col q-mr-xs" @click="previous()"/>
      <q-btn :label="labelButton" color="secondary" dense class="col q-ml-xs" @click="next()"/>
    </div>
  </q-page>
</template>

<script>
import SignUpFirst from '../components/SignUpFirst'
import SignUpSecond from '../components/SignUpSecond'
export default {
  components: {
    SignUpFirst,
    SignUpSecond
  },
  data () {
    return {
      labelButton: 'Avançar',
      labelBackButton: 'Cancelar',
      component: 'SignUpFirst'
    }
  },
  methods: {
    next () {
      this.component = 'SignUpSecond'
      this.labelButton = 'Criar conta'
      this.labelBackButton = 'Voltar'
    },
    previous () {
      this.component = 'SignUpFirst'
      this.labelButton = 'Avançar'
      this.labelBackButton = 'Cancelar'
    }
  }
}
</script>

<style>

</style>
