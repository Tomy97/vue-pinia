<template>
  <div class="row justify-content-center p-5">
    <div class="col-12 d-flex justify-content-center">
      <div class="card width-card">
        <div class="card-title pt-3">
          <h5 class="text-center">
            {{ params.id ? 'Edit User' : 'Create User' }}
          </h5>
        </div>
        <div class="card-body">
          <form @submit="onSubmit">
            <div class="row">
              <div class="col-12 mb-3">
                <InputText label="Nombre" v-model="name" :required="true" />
              </div>
              <div class="col-12 mb-3">
                <InputText
                  label="User Name"
                  v-model="userName"
                  :required="true"
                />
              </div>
              <div class="col-12 mb-3">
                <InputEmail label="Email" v-model="email" />
              </div>
              <div class="col-12">
                <BtnSubmit />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import InputText from '../components/Form/InputText.vue'
import InputEmail from '../components/Form/InputEmail.vue'
import BtnSubmit from '../components/Buttons/BtnSubmit.vue'
import { useForm } from 'vee-validate'
import router from '../routes'
import { useStore } from '../store/state'
const { params } = useRoute()
const name = ref<string>('')
const userName = ref<string>('')
const email = ref<string>('')
const { handleSubmit } = useForm()
const { useEditUsers } = useStore()

const onSubmit = handleSubmit(async () => {
  const data = {
    name: name.value,
    userName: userName.value,
    email: email.value,
  }

  const url = {
    name: 'Home',
    paramas: {
      data,
    },
  }
  if (data.name && data.userName && data.email) {
    await router.push(url)
  } else {
    alert(' Ingrese los datos que quiere cambiar ')
  }
})
</script>

<style>
.width-card {
  width: 25rem;
}
</style>
