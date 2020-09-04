<template>
  <q-layout class="banner">
    <img src="../../public/elipse.png" class="banner borda"/>
    <q-page-container>
      <router-view />
    </q-page-container>
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

<style>
.banner {
  /* position: absolute; */
  top: -2px;
  width: 100vw;
  height: 100px;
  /* z-index: 1; */
}
</style>
