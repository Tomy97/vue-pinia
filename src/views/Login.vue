<template>
  <div class="row justify-content-center">
    <div class="card" style="width: 25rem;">
      <div class="card-body">
        <h5 class="card-title text-center">Form Login</h5>
        <form @submit="onSubmit">
          <div class="row">
            <div class="col-12 mb-3">
              <InputEmail
                v-model="email"
                label="Email"
                placeholder="Inserte su email"
              />
            </div>
            <div class="col-12 mb-3">
              <InputPassword
                v-model="password"
                label="Password"
                placeholder="Inserte su password"
              />
            </div>
          </div>
          <div class="row justify-content-center mb-3">
            <div class="col-12 text-center">
              <router-link :to="{ name: 'Register' }" class="card-link">
                Register
              </router-link>
            </div>
            <div class="col-12">
              <router-link :to="{ name: 'RecoverPassword' }" class="card-link">
                Recuperar contraseña
              </router-link>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-12">
              <BtnSubmit />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import InputEmail from '../components/Form/InputEmail.vue'
import InputPassword from '../components/Form/InputPassword.vue'
import BtnSubmit from '../components/Buttons/BtnSubmit.vue'
import { useForm } from 'vee-validate'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: { InputEmail, InputPassword, BtnSubmit },
  setup() {
    const email = ref<string>('')
    const password = ref<string>('')
    const { handleSubmit } = useForm()
    const router = useRouter()
    const onSubmit = handleSubmit(async () => {
      const url = { name: 'Home' }
      if (email.value && password.value) {
        await router.push(url)
      } else {
        alert(' Ingrese su email y contraseña')
      }
    })
    return {
      email,
      password,
      onSubmit,
    }
  },
})
</script>
<style>
.card-link {
  font-size: 1rem;
  text-decoration: none;
  display: flex;
  justify-content: center;
  color: #2c3e50;
  font-weight: 600;
}

.card-link:hover {
  color: #3eaf7c;
}

.form-label {
  color: #2c3e50;
  font-weight: 600;
}
</style>
