<template>
  <Navbar />
  <router-view />
  <FloatingButtons />
</template>

<script setup>
import Navbar from "./components/Navbar.vue"
import FloatingButtons from "./components/FloatingButtons.vue"
</script>

<style>
/* Αυτό θα διορθώσει το πρόβλημα αν το banner κρύβεται πίσω από τον χάρτη */
#cc-main { 
  z-index: 99999 !important; 
  position: relative;
}

/* Προαιρετικά: Σιγουρέψου ότι το app σου πιάνει χώρο */
#app {
  min-height: 100vh;
}
</style>
