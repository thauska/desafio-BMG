<template>
  <q-page class="container">
    <q-btn @click="openAssistent()" label="Abrir Assistente"/>
    <q-btn @click="closeAssistent()" label="Fechar Assistente"/>
    <dialog-assistent ref="DialogAssistent"/>
  </q-page>
</template>

<script>
import DialogAssistent from 'components/DialogAssistent.vue'
export default {
  name: 'PageIndex',
  components: {
    DialogAssistent
  },
  methods: {
    openAssistent () {
      this.$refs.DialogAssistent.openDialog()
    },
    closeAssistent () {
      this.$refs.DialogAssistent.closeDialog()
    }
  }
}
</script>

<style>
.borda-azul {
  border: 5px solid red;
}
</style>
