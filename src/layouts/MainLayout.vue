<template>
  <q-layout view="hhh lpR fFf">
    <q-header reveal bordered class="purplebg text-white">
      <q-toolbar>
        <q-toolbar-title>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

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

<style scoped>
.purplebg {
  background-color: rgba(70, 42, 113, 0.5);
}
</style>
