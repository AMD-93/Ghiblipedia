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
@media only screen and (max-width: 480px) {
  .modal-mask {
    position: absolute;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-container {
    max-width: 100%;
    margin: 60px 10px 0px 10px;
    padding: 10px;
    background-color: #ddddc7;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
  }

  .modal-body {
    display: flex;
    flex-direction: column;
  }
}
@media only screen and (min-width: 481px) {
  .modal-mask {
    position: absolute;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-container {
    max-width: 100%;
    margin: 60px 10px 0px 10px;
    padding: 10px;
    background-color: #ddddc7;
    border-radius: 8px;
  }
}
@media only screen and (min-width: 769px) {
  .modal-mask {
    position: absolute;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-container {
    max-width: 80%;
    margin: 60px auto;
    padding: 10px;
    background-color: #ddddc7;
    border-radius: 8px;
  }
}
@media only screen and (min-width: 992px) {
  .modal-mask {
    position: absolute;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-container {
    max-width: 80%;
    margin: 60px auto;
    padding: 10px;
    background-color: #ddddc7;
    border-radius: 8px;
  }
}
@media only screen and (min-width: 1025px) {
  .modal-mask {
    position: absolute;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-container {
    max-width: 80%;
    margin: 60px auto;
    padding: 10px;
    background-color: #ddddc7;
    border-radius: 8px;
  }
}
</style>
