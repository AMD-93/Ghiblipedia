<script setup lang="ts"></script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style>
body {
  background-color: #ffeee2;
}
</style>
