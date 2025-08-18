<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import type { FilmDB } from '@/types'

const { isOpen, film } = defineProps<{ isOpen: boolean; film: FilmDB }>()

const emit = defineEmits(['modal-close'])

const target = ref(null)
onClickOutside(target, () => {
  emit('modal-close')
})
</script>

<template>
  <div v-if="isOpen" class="modal-mask">
    <div class="modal-container" ref="target">
      <div class="modal-body">
        <slot name="content">
          <img :src="film.imageUrl" :alt="film.englishTitle" />
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  max-width: 300px;
}

.modal-mask {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-container {
  max-width: fit-content;
  margin: auto;
  margin-top: 90px;
  padding: 10px;
  background-color: #ddddc7;
  border-radius: 8px;
}
</style>
