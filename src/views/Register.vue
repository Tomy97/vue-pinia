<template>
  <div class="container">
    <div class="row justify-content-center py-0 py-md-5">
      <div class="card" style="width: 25rem;">
        <div class="card-title">
          <h3 class="text-center">
            Register Form
          </h3>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-12 mb-3">
              <InputText label="Name" />
            </div>
            <div class="col-12 mb-3">
              <InputText label="Last Name" />
            </div>
            <div class="col-12 mb-3">
              <InputEmail label="Email" />
            </div>
            <div class="col-12">
              <InputPassword label="Password" />
            </div>
            <div class="col-12">
              <InputPassword label="Password Confirm" />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-12">
              <BtnSubmit />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BtnSubmit from '../components/Buttons/BtnSubmit.vue'
import InputEmail from '../components/Form/InputEmail.vue'
import InputText from '../components/Form/InputText.vue'
import InputPassword from '../components/Form/InputPassword.vue'

export default defineComponent({
  setup() {
    return {}
  },
  components: { BtnSubmit, InputEmail, InputText, InputPassword },
})
</script>

<style scoped></style>
