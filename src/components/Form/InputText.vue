<template>
  <div>
    <div class="form-group">
      <label class="form-label">{{ label }}</label>
      <input
        v-model="field"
        autocomplete="false"
        type="alpha_spaces"
        :placeholder="placeholder"
        :required="required"
        class="form-control"
      />
    </div>
    <span class="text-danger">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script lang="ts">
import { alpha_spaces, required } from '@vee-validate/rules'
import { defineRule, useField } from 'vee-validate'
import {
  ComponentInternalInstance,
  defineComponent,
  getCurrentInstance,
  watch,
} from 'vue'

defineRule('alpha_spaces', alpha_spaces)

defineRule('required', required)

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
    const instance = getCurrentInstance() as ComponentInternalInstance

    const { value: field, errorMessage, meta } = useField(
      'input-' + instance.uid.toString(),
      { required: props.required, alpha_spaces: true },
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
