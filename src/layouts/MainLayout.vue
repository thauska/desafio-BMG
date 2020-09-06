<template>
  <q-layout view="hhh lpR fff">
    <q-header reveal bordered class="purplebg text-white">
      <q-toolbar>
         <q-btn dense flat round icon="keyboard_arrow_left" @click="goBack()"  />
         <q-toolbar-title></q-toolbar-title>
         <q-btn dense flat round icon="home" @click="goHome()"  />
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
  },
  methods: {
    goBack () {
      if (this.$router.path !== '/') {
        this.$router.go(-1)
      }
    },
    goHome () {
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style scoped>
.purplebg {
  background-color: rgba(70, 42, 113, 0.5);
}
</style>
