<template>
  <button class="btn btn-primary w-100">
    {{ enviar }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    enviar: {
      type: String,
      default: 'Enviar',
    },
  },
})
</script>
