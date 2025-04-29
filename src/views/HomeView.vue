<script setup lang="ts">
import TrailerCard from '@/components/TrailerCard.vue'
import CarouselComponent from '@/components/CarouselComponent.vue'
</script>

<template>
  <main>
    <TrailerCard />
    <div class="carousels"><CarouselComponent /></div>
  </main>
</template>

<style>
.carousels {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  width: 80%;
}
</style>
