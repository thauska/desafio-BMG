<template>
  <q-layout view="hhh lpR fff">
    <q-header reveal bordered class="purplebg text-white">
      <q-toolbar>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="text-center bg-transparent q-pa-sm">
       <img src="../../public/banco-bmg-logo.png" height="30px"/>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.purplebg {
  background-color: rgba(70, 42, 113, 0.5);
}
</style>
