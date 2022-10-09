<script setup lang="ts">
import type { Show } from "@/types/shows.model";
import type { Prop } from "vue";

defineProps({
  showDetails: Object as Prop<Show>,
});
</script>

<template>
  <div v-if="showDetails">
    <section class="columns section py-0 is-desktop">
      <div
        class="details-item-image column is-one-fifth is-three-quarters-mobile is-two-thirds-tablet"
      >
        <img :src="showDetails.image.original" :alt="showDetails.name" />
      </div>
      <div class="column">
        <p
          v-html="showDetails.summary"
          class="has-text-weight-bold has-text-justified mb-3"
        ></p>
        <a
          v-if="showDetails.officialSite"
          :href="showDetails.officialSite"
          class="has-text-weight-bold"
          >Visit official website</a
        >
      </div>
    </section>

    <!-- Details -->
    <section class="section py-4">
      <h3 class="is-size-4 has-text-weight-bold">Details</h3>
      <hr class="my-2" />
      <div>
        <strong>Category: </strong>
        <i v-for="(item, index) in showDetails.genres" :key="item"
          >{{ item }}{{ index !== showDetails.genres.length - 1 ? ", " : "" }}
        </i>
      </div>
      <div>
        <strong>Language: </strong> <i>{{ showDetails.language }}</i>
      </div>
      <div v-if="showDetails.status">
        <strong>Status: </strong> <i>{{ showDetails.status }}</i>
      </div>
      <div v-if="showDetails.rating.average">
        <strong>Rating: </strong> <i>{{ showDetails.rating.average }}</i>
      </div>
      <div v-if="showDetails.premiered">
        <strong>Premiered: </strong> <i>{{ showDetails.premiered }}</i>
      </div>
      <div v-if="showDetails.ended">
        <strong>Ended: </strong> <i>{{ showDetails.ended }}</i>
      </div>
      <div v-if="showDetails.network.name">
        <strong>Network: </strong>
        <a :href="showDetails.network.officialSite">{{
          showDetails.network.name
        }}</a>
      </div>
      <div v-if="showDetails.network.country">
        <strong>Country: </strong> <i>{{ showDetails.network.country.name }}</i>
      </div>
      <div v-if="showDetails.schedule">
        <strong>Schedule: </strong>
        <i
          >{{ showDetails.schedule.days[0] }},
          {{ showDetails.schedule.time }}</i
        >
      </div>
    </section>
  </div>
</template>

<style lang="scss"></style>
