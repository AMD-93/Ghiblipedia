<script setup lang="ts">
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
</script>

<template>
  <div class="upcoming-carousel">
    <vueper-slides
      class="no-shadow"
      :visible-slides="3"
      slide-multiple
      :gap="3"
      :slide-ratio="1 / 4"
      :dragging-distance="200"
      :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
    >
      <vueper-slide v-for="i in 9" :key="i" :title="i.toString()" />
    </vueper-slides>
  </div>
</template>

<style scoped>
.upcoming-carousel {
  background-color: #b7b7a4;
  padding: 2rem;
  margin: auto;
  margin-top: 1rem;
  border-radius: 10px;
  width: 50%;
}
</style>

<!-- https://antoniandre.github.io/vueper-slides/?ref=madewithvuejs.com#ex--show-multiple-slides-and-gap -->
