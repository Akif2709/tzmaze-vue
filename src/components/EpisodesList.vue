<script setup lang="ts">
import type { EpisodesInGroup } from "@/types/episode.model";
import type { Prop } from "vue";

defineProps({
  episodes: Object as Prop<EpisodesInGroup>,
});
</script>

<template>
  <div v-if="episodes">
    <section class="section py-1">
      <!-- Season section -->
      <div v-for="season in episodes" :key="season[0].id">
        <h2 class="title is-size-4 ml-2 mb-2" data-role="season-title">
          Season {{ season[0]?.season }}
        </h2>
        <!-- Episode card -->
        <div class="is-flex is-flex-direction-column is-flex-wrap-wrap">
          <div
            v-for="episode in season"
            class="m-2 card is-flex"
            :key="episode.id"
            data-role="episode"
          >
            <div class="card-image">
              <figure class="image img-container m-auto">
                <img :src="episode?.image?.original" :alt="episode.name" />
              </figure>
            </div>
            <div class="card-content py-3">
              <div class="media">
                <div class="media-content">
                  <p class="is-size-6">
                    <strong
                      >Episode {{ episode.number }} -
                      {{ episode?.name }}</strong
                    >
                    <i class="is-size-6">({{ episode?.airdate }})</i>
                  </p>
                  <p class="subtitle mb-1 is-7">
                    <strong>Rating:</strong> {{ episode?.rating?.average }}
                  </p>
                  <p
                    class="subtitle pb-3 is-7 ellipsis"
                    v-html="episode?.summary"
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 100%;
  max-height: 120px;
  margin: 10px;
  overflow: hidden;
}
@media screen and (max-width: 899px) {
  .card {
    width: 15rem;
    margin: 8px auto;
  }
}

.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.img-container {
  width: 200px;
  max-height: 120px;
  overflow: hidden;
  img {
    max-height: 120px;
  }
}
</style>
