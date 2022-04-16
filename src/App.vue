<template>
  <div>
    <NavbarComponent />
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue-demi'
import NavbarComponent from '../src/components/Navbar/NavbarComponent.vue'
export default defineComponent({
  components: {
    NavbarComponent,
  },
})
</script>
