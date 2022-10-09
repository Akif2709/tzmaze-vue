<script setup lang="ts">
import { RouterView } from "vue-router";
import AppNavbar from "@/components/layout-components/AppNavbar.vue";
</script>

<template>
  <div class="mb-5">
    <AppNavbar></AppNavbar>
  </div>
  <div class="container router-container">
    <RouterView />
  </div>
</template>

<style scoped>
:host {
  width: 100%;
}

.router-container {
  margin-top: 5rem;
}
</style>
