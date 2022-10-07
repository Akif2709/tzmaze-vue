<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "@/components/layout-components/Navbar.vue";
</script>

<template>
  <div class="mb-5">
    <Navbar></Navbar>
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
