<script setup lang="ts">
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
</script>

<template>
  <div class="carousel">
    <vueper-slides
      class="no-shadow"
      :bullets="false"
      :visible-slides="3"
      :gap="3"
      :slide-ratio="1 / 4"
      :dragging-distance="200"
      :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
    >
      <vueper-slide
        v-for="i in 9"
        :key="i"
        :title="i.toString()"
        :video="'https://www.youtube.com/embed/MhSQlPwtd4c?si=fqAkRveSwUVZaymg'"
      />
    </vueper-slides>
  </div>
</template>

<style scoped>
.carousel {
  background-color: #b7b7a4;
  padding: 4rem;
  margin: 1rem;
  border-radius: 10px;
  width: 50%;
}
</style>

<!-- https://antoniandre.github.io/vueper-slides/?ref=madewithvuejs.com#ex--show-multiple-slides-and-gap -->

<!-- https://www.youtube.com/watch?v=Bzw2T18YDJ4 youtube data api -->
