<template>
  <q-layout view="hhh lpR fff">
    <q-header reveal bordered class="purplebg text-white">
      <q-toolbar>
         <q-btn dense flat round icon="keyboard_arrow_left" @click="goBack()" v-show="canBack"/>
         <q-toolbar-title></q-toolbar-title>
         <q-btn dense flat round icon="exit_to_app" :to="'/'" v-show="logout"/>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="text-center bg-transparent q-pa-sm">
      <img src="../../public/banco-bmg-logo.png" class="q-pt-sm" width="60px"/>
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
  computed: {
    canBack () {
      return this.$route.meta.canBack
    },
    logout () {
      return this.$route.meta.logout
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.purplebg {
  background-color: rgba(70, 42, 113, 0.5);
}
</style>
