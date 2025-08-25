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

h1,
h2 {
  line-height: 1.6;
  letter-spacing: 0.7px;
}

h1 {
  font-size: 30px;
  font-weight: 400;
}

h2 {
  font-size: 24px;
  font-weight: 200;
}

p {
  line-height: 1.6;
  letter-spacing: 0.7px;
  font-weight: 100;
  font-size: 15px;
  text-align: justify;
}

.app-content {
  padding-top: 50px;
  padding-bottom: 10px;
}
</style>
