<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>details of {{ route.params.id }}</template>
