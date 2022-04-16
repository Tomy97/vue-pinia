<template>
  <div class="row justify-content-lg-center">
    <table class="table responsive table-dark table-hover table-striped w-50">
      <thead>
        <tr>
          <th class="text-center">
            #
          </th>
          <th class="text-center" colspan="2">
            Name
          </th>
          <th class="text-center">
            UserName
          </th>
          <th class="text-center">
            Email
          </th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="u in users" :key="u.id">
          <td class="text-center" scope="row">
            {{ u.id }}
          </td>
          <td class="text-center" colspan="2">
            {{ u.name }}
          </td>
          <td class="text-center">
            {{ u.username }}
          </td>
          <td class="text-center">
            {{ u.email }}
          </td>
          <td>
            <button class="btn btn-primary" @click.prevent="handelChange(u)">
              Edit
            </button>
          </td>
          <td>
            <button class="btn btn-danger" @click.prevent="handelDelete(u)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { getDataUsers } from '../composables/User.composable'
import { UsersI } from '../interfaces/users.interfaces'
import router from '../routes'

const { users } = getDataUsers()
const handelChange = (u: UsersI) => {
  router.push({
    name: 'Edit',
    params: { id: u.id, name: u.name, username: u.username, email: u.email },
  })
}

const handelDelete = (u: UsersI) => {
  // Aca despachar la accion de eliminar
  
}
</script>
<style>
@media (max-width: 1200px) {
  .table {
    width: 100% !important;
  }
}
</style>
