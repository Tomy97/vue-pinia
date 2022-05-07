<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container-fluid">
      <img src="../../assets/logo.png" alt="logo vue" width="50" height="50" />
      <button
        class="navbar-toggler bg-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse text-end text-md-center text-lg-center justify-content-md-end"
        id="navbarText"
      >
        <div class="navbar-nav align-items-center">
          <router-link
            :to="{ name: 'Home' }"
            class="navbar-link m-2 m-lg-2 text-decoration-none text-white"
          >
            Home
          </router-link>
          <router-link
            :to="{ name: 'CreateUser' }"
            class="navbar-link m-2 m-lg-2 text-decoration-none text-white"
          >
            Create User
          </router-link>
          <template v-if="isLoggin">
            <span class="m-lg-2 text-white">
              {{ users.name }} {{ users.lastName }}
            </span>
          </template>
          <template v-else>
            <router-link
              class="nav-link m-lg-2 text-decoration-none text-white"
              :to="{ name: 'Login' }"
            >
              Login
            </router-link>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '../../store/state'
const users = useStore()
const validUser = users.name && users.lastName
const isLoggin = ref(false)
if (validUser) {
  isLoggin.value = true
}
</script>
