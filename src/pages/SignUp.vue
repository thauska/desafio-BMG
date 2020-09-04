<template>
  <q-page class="row justify-center">
    <div class="row justify-center col-12">
      <span class="text-h6 text-secondary"> ABRA SUA CONTA </span>
    </div>
    <sign-up-first ref="SignUpFirst"/>
    <sign-up-second ref="SignUpSecond"/>
    <div class="row col-8 borda justify-center q-pt-lg">
      <q-btn :label="labelButton" color="secondary" dense class="q-px-lg btn" @click="next()"/>
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
      labelButton: 'Avançar'
    }
  },
  methods: {
    next () {
      this.$refs.SignUpFirst.hideComponent()
      this.$refs.SignUpSecond.showComponent()
      this.labelButton = 'Criar conta'
    }
  }
}
</script>

<style>

</style>
