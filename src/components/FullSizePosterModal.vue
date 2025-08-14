<script setup lang="ts">
import {
  ref,
  // watch
} from 'vue'
import { onClickOutside } from '@vueuse/core'

const { isOpen } = defineProps<{ isOpen: boolean }>()

const emit = defineEmits(['modal-close'])

const target = ref(null)
onClickOutside(target, () => emit('modal-close'))

// watch();

// https://itnext.io/click-images-and-show-them-in-full-size-a-reusable-solution-in-vue-8b042f646809 follow this tutorial (how tf do I translate this into composition API tho :D)
</script>
<template>
  <div v-if="isOpen" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container" ref="target">
        <div class="modal-body">
          <slot name="content"> </slot>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
