<template>
  <div>
    <div class="form-group">
      <label class="form-label">{{ label }}</label>
      <input
        type="password"
        class="form-control"
        v-model="field"
        ref="password"
        autocomplete="false"
        :placeholder="placeholder"
        :required="required"
      />
    </div>
    <span class="text-danger">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { defineRule, useField } from 'vee-validate'
import { required, min } from '@vee-validate/rules'

defineRule('required', required)
defineRule('min', min)

export default defineComponent({
  props: {
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
  },
  setup(props, { emit }) {
    const { value: field, errorMessage, meta } = useField(
      'password',
      { required: props.required, min: 8 },
      {
        initialValue: props.modelValue,
        label: props.label,
      },
    )

    watch(field, (val) => emit('update:modelValue', val))
    return {
      field,
      errorMessage,
      meta,
    }
  },
})
</script>
