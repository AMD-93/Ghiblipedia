<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />
  <div class="app-content">
    <RouterView />
  </div>
</template>

<style>
html,
body {
  background-color: #ffeee2;
  overflow-x: hidden;
}

.app-content {
  padding-top: 50px;
}
</style>
