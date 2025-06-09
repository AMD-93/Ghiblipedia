<script setup lang="ts">
import TrailerCard from '@/components/TrailerCard.vue'
import CarouselComponent from '@/components/CarouselComponent.vue'
</script>

<template>
  <main>
    <TrailerCard />
    <div class="carousels">
      <div class="carousel-left"><CarouselComponent /></div>
      <div class="carousel-right"><CarouselComponent /></div>
    </div>
  </main>
</template>

<style scoped>
.carousels {
  padding-top: 10px;
}
@media only screen and (max-width: 480px) {
  .carousels {
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding-top: 10px;
  }
}

@media only screen and (min-width: 481px) {
  .carousels {
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding-top: 10px;
  }
}

@media only screen and (min-width: 769px) {
  .carousels {
    display: flex;
    flex-direction: column;
  }
}

@media only screen and (min-width: 992px) {
  .carousels {
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: space-between;
    max-width: 80%;
  }
  .carousel-left,
  .carousel-right {
    width: 49%;
  }
}

@media only screen and (min-width: 1025px) {
  .carousels {
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: space-between;
    max-width: 80%;
  }
  .carousel-left,
  .carousel-right {
    width: 49%;
  }
}
</style>
