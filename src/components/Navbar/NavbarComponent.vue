<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container-fluid">
      <img src="../../assets/logo.png" alt="logo vue" width="50" height="50" />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse text-center justify-content-md-end"
        id="navbarText"
      >
        <div class="navbar-nav">
          <router-link
            :to="{ name: 'Home' }"
            class="navbar-link text-decoration-none text-white"
          >
            Home
          </router-link>
          <router-link
            :to="{ name: 'CreateUser' }"
            class="navbar-link text-decoration-none text-white"
          >
            Create User
          </router-link>
          <div v-if="isLoggin">
            <span class="text-white">
              {{ user.name }}
            </span>
          </div>
          <div v-else>
            <router-link class="nav-link text-white" :to="{ name: 'Login' }">
              Login
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue-demi'

export default defineComponent({
  setup() {
    const isLoggin = ref(false)
    const user = ref({
      name: 'Tomas Pandullo',
    })
    if (user.value.name) {
      isLoggin.value = true
    }

    return {
      isLoggin,
      user,
    }
  },
})
</script>

<style scoped></style>
