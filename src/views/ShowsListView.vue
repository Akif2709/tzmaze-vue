<script setup lang="ts">
import { computed, ref, type Ref } from "vue";
import { fetchShowsFacade } from "@/composables/fetch-shows";
import { watchDebounced } from "@vueuse/core";
import Spinner from "@/components/ui-components/Spinner.vue";

const text = ref<string>("");
const query = ref<string>("");
let { shows, error } = fetchShowsFacade(query);
const loading = computed(() => !shows.value && !error.value);

watchDebounced(
  text,
  (value: string) => {
    query.value = value;
  },
  { debounce: 250 }
);
</script>

<template>
  <main>
    <div>
      <div class="control" :class="{ 'is-loading': loading }">
        <input type="text" class="input is-info is-medium" v-model="text" />
      </div>
      <pre v-if="shows"> {{ shows?.length }} {{ shows }} </pre>
      <pre v-else-if="error">{{ error }}</pre>
      <div v-else class="pt-5">
        <Spinner></Spinner>
      </div>
    </div>
  </main>
</template>

<style lang="scss"></style>
