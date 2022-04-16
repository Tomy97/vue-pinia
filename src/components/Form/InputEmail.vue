<template>
  <div>
    <div class="form-group">
      <label class="form-label">
        {{ label }}
      </label>
      <input
        type="email"
        v-model="field"
        autocomplete="false"
        :required="required"
        class="form-control"
        :placeholder="placeholder"
      />
    </div>
    <span class="text-danger">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script lang="ts">
import {
  ComponentInternalInstance,
  defineComponent,
  getCurrentInstance,
  watch,
} from 'vue'
import { defineRule, useField } from 'vee-validate'
import { required, email } from '@vee-validate/rules'

defineRule('required', required)
defineRule('email', email)

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: true,
    },
    modelValue: {
      type: String,
    },
    placeholder: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const instance = getCurrentInstance() as ComponentInternalInstance
    const { value: field, errorMessage, meta } = useField(
      'input-' + instance.uid.toString(),
      {
        required: props.required,
        email: true,
      },
      {
        initialValue: props.modelValue,
        label: props.label,
      },
    )
    watch(field, (val) => emit('update:modelValue', val))
    return {
      field,
      meta,
      errorMessage,
    }
  },
})
</script>
