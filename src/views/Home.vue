<template>
  <div class="row justify-content-center">
    <div class="table-responsive p-5" id="no-more-tables" >
      <table class="table table-dark table-hover table-striped">
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
            <td data-title="#" class="text-center" scope="row">
              {{ u.id }}
            </td>
            <td data-title="Name" class="text-center" colspan="2">
              {{ u.name }}
            </td>
            <td data-title="UserName" class="text-center">
              {{ u.username }}
            </td>
            <td data-title="Email" class="text-center">
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
@media only screen and (max-width: 800px) {
  .table-responsive {
    width: 100%;
  }
  #no-more-tables tbody,
  #no-more-tables tr,
  #no-more-tables td {
    display: block;
  }
  #no-more-tables thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
  #no-more-tables td {
    position: relative;
    padding-left: 50%;
    border: none;
    border-bottom: 1px solid #eee;
  }
  #no-more-tables td:before {
    content: attr(data-title);
    position: absolute;
    left: 6px;
    font-weight: bold;
  }
  #no-more-tables tr {
    border-bottom: 1px solid #ccc;
  }
}
</style>
