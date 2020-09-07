<template>
  <q-page class="row justify-center">
    <div class="row justify-center col-12 q-mt-md q-mb-md">
      <span class="text-h6 text-secondary"> ABRA SUA CONTA </span>
    </div>
    <keep-alive>
      <component :is="component"></component>
    </keep-alive>
    <div class="row col-9 justify-center q-pt-lg q-mb-lg">
      <q-btn label="Voltar" color="grey-8" outline dense class="col q-mr-xs" @click="previous()" v-if="component === 'SignUpSecond'"/>
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
      component: 'SignUpFirst'
    }
  },
  methods: {
    next () {
      if (this.labelButton === 'Criar conta') this.$router.push('/login')
      this.component = 'SignUpSecond'
      this.labelButton = 'Criar conta'
    },
    previous () {
      this.component = 'SignUpFirst'
      this.labelButton = 'Avançar'
    }
  }
}
</script>

<style>

</style>
