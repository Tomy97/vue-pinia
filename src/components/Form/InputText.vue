<template>
  <div></div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
  },
  label: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  required: {
    type: Boolean,
    default: true,
  },
})
</script>
