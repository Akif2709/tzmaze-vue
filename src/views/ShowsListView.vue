<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { fetchShowsFacade } from "@/composables/fetch-shows";
import { watchDebounced } from "@vueuse/core";
import ErrorStateComponent from "@/components/ui-components/ErrorState.vue";
import LoadingSpinner from "@/components/ui-components/LoadingSpinner.vue";
import ShowListItemComponent from "@/components/ShowListItem.vue";
import { useRouter } from "vue-router";
import type { Show } from "@/types/shows.model";
import { sortShows } from "@/utils/sort";
import { SortingKeys } from "@/types/sorting.model";
const router = useRouter();
const sortingKeys = SortingKeys;

const searchText = ref<string>("");
const selectedGenre = ref<string>("All");
const showsAreFetched = ref<boolean>(false);
const sortBy = ref<SortingKeys>(sortingKeys.RATING_DESCENDING);

const query = ref<string>("");
let { shows, error, genres } = fetchShowsFacade(query);
const filteredShows = ref<Show[]>();
const loading = computed(() => !shows.value && !error.value);

onMounted(() => {
  filteredShows.value = shows.value;
});

watch([shows, selectedGenre, sortBy], ([rawShows, genre, sortByValue]) => {
  if (rawShows && !showsAreFetched.value) {
    filteredShows.value = rawShows;
    showsAreFetched.value = true;
  }

  filteredShows.value = sortShows(filteredShows.value, sortByValue);

  filteredShows.value =
    genre === "All"
      ? rawShows
      : rawShows?.filter((i) =>
          genre === "All" ? i : i.genres.includes(genre)
        );
});

watchDebounced(
  searchText,
  (value: string) => {
    query.value = value;
  },
  { debounce: 400 }
);

function navigateToDetails(id: number) {
  router.push({ path: `/shows/${id}` });
}
</script>

<template>
  <main>
    <div>
      <div class="columns mx-2" :class="{ 'is-loading': loading }">
        <div class="mx-3">
          <label for="shows-search-bar"> Type to search:</label>
          <p class="control has-icons-left">
            <input
              id="shows-search-bar"
              type="text"
              placeholder="Search shows by name"
              class="input is-info"
              v-model="searchText"
            />
            <span class="icon is-left">
              <i class="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div>

        <div class="mx-3">
          <label for="shows-category-select__label"> Select a category:</label>
          <br />
          <div class="select shows-category-select__dropdown">
            <select v-model="selectedGenre" id="shows-category-select">
              <option :value="!genres?.length ? selectedGenre : 'All'">
                {{ !genres?.length ? selectedGenre : "All" }}
              </option>
              <option v-for="genre in genres" :value="genre" :key="genre">
                {{ genre }}
              </option>
            </select>
          </div>
        </div>

        <div class="mx-3">
          <label for="shows-sort-by-prop"> Sort by:</label>
          <br />
          <div class="select">
            <select v-model="sortBy" id="shows-sort-by-prop">
              <option :value="sortingKeys.RATING_ASCENDING">Rating-asc</option>
              <option :value="sortingKeys.RATING_DESCENDING">
                Rating-desc
              </option>
              <option :value="sortingKeys.YEAR_ASCENDING">Year-asc</option>
              <option :value="sortingKeys.YEAR_DESCENDING">Year-desc</option>
            </select>
          </div>
        </div>
      </div>
      <div
        v-if="filteredShows"
        class="is-flex is-flex-direction-row is-flex-wrap-wrap"
      >
        <ShowListItemComponent
          v-for="show in filteredShows"
          :key="show.id"
          :showItem="show"
          @onClick="navigateToDetails"
        ></ShowListItemComponent>

        <div v-if="!filteredShows.length" class="is-size-5 is-flex m-5">
          No items found with your search criteria..
        </div>
      </div>
      <div v-else-if="error">
        <ErrorStateComponent
          :alertMsg="error"
          alertTitle="Oops! Something went wrong..."
        ></ErrorStateComponent>
      </div>
      <div v-else class="pt-5">
        <LoadingSpinner></LoadingSpinner>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.shows-category-select__dropdown select {
  min-width: 180px;
}
</style>
