<script setup lang="ts">
import TrailerCard from '@/components/TrailerCard.vue'
import Carousel from '@/components/CarouselComponent.vue'
</script>

<template>
  <main>
    <TrailerCard
      title="Spirited Away"
      original-title="Sen to Chihiro no kamikakushi"
      plot="During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, and where humans are changed into beasts."
      year="2001"
    />
    <div class="carousels"><Carousel /> <Carousel /></div>
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
