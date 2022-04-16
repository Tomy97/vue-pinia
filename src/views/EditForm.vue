<template>
  <div class="row justify-content-center">
    <div class="col-12 d-flex justify-content-center">
      <div class="card width-card">
        <div class="card-header">
          <h5 class="text-center">
            {{ params.id ? 'Edit Form' : 'Create User' }}
          </h5>
        </div>
        <div class="card-body">
          <h6 class="text-center">
            {{ params.username }}
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const { params } = useRoute()
</script>

<style>
.width-card {
  width: 25rem;
}
</style>
