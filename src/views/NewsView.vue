<script setup lang="ts">
import CarouselComponent from '@/components/CarouselComponent.vue'
import NewsCard from '@/components/NewsCard.vue'
</script>
<template>
  <div class="container-latest">
    <h1>Latest trailers</h1>
    <div><CarouselComponent /></div>
  </div>
  <div class="container-upcoming">
    <h1>Upcoming releases</h1>
    <div>
      <CarouselComponent />
    </div>
  </div>

  <div class="container-news">
    <NewsCard />
  </div>
</template>
<style scoped>
@media only screen and (max-width: 480px) {
  .container-latest,
  .container-upcoming,
  .container-news {
    display: flex;
    flex-direction: column;
    margin: 10px;
    max-width: 100%;
    padding: 20px;
    background-color: #b7b7a4;
    border-radius: 8px;
  }
  h1 {
    font-size: larger;
    padding-bottom: 5px;
  }
}

@media only screen and (min-width: 481px) {
}

@media only screen and (min-width: 769px) {
}

@media only screen and (min-width: 992px) {
}

@media only screen and (min-width: 1025px) {
}
</style>
