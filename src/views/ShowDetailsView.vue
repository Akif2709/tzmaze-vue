<script setup lang="ts">
import { ref } from "vue";
import {
  fetchShowCrewFacade,
  fetchShowDetailsFacade,
  fetchShowEpisodesFacade,
} from "@/composables/fetch-show-details";
import ErrorStateComponent from "@/components/ui-components/ErrorState.vue";
import Spinner from "@/components/ui-components/Spinner.vue";
import ShowDetailsComponent from "@/components/ShowDetails.vue";
import EpisodesListComponent from "@/components/EpisodesList.vue";
import CrewListComponent from "@/components/CrewList.vue";
import { useRoute } from "vue-router";
const route = useRoute();
enum DetailsTabs {
  Details,
  Episodes,
  Crew,
}

const showId = route.params["id"] as string;
const activeTab = ref<DetailsTabs>(DetailsTabs.Details);
const { crew, error: crewError } = fetchShowCrewFacade(showId);
const { episodes, error: episodesError } = fetchShowEpisodesFacade(showId);
const { showDetails, error } = fetchShowDetailsFacade(showId);

function onTabClick(selectedTab: DetailsTabs) {
  activeTab.value = selectedTab;
}
</script>

<template>
  <div v-if="showDetails || crew || episodes">
    <h2 class="is-size-2 section py-2 has-text-weight-bold show-details-header">
      {{ showDetails?.name }}
    </h2>
    <div class="tabs is-boxed has-text-weight-bold section pb-0 pt-4">
      <ul>
        <li :class="{ 'is-active': activeTab === DetailsTabs.Details }">
          <a @click="onTabClick(DetailsTabs.Details)">
            <span class="icon is-small"
              ><i
                class="fas fa-film"
                :aria-hidden="!(activeTab === DetailsTabs.Details)"
              ></i
            ></span>
            <span>Details</span>
          </a>
        </li>
        <li :class="{ 'is-active': activeTab === DetailsTabs.Episodes }">
          <a @click="onTabClick(DetailsTabs.Episodes)">
            <span class="icon is-small"
              ><i
                class="fas fa-list-ul"
                :aria-hidden="!(activeTab === DetailsTabs.Episodes)"
              ></i
            ></span>
            <span>Episodes</span>
          </a>
        </li>
        <li :class="{ 'is-active': activeTab === DetailsTabs.Crew }">
          <a @click="onTabClick(DetailsTabs.Crew)">
            <span class="icon is-small"
              ><i
                class="fas fa-user"
                :aria-hidden="!(activeTab === DetailsTabs.Crew)"
              ></i
            ></span>
            <span>Stars</span>
          </a>
        </li>
      </ul>
    </div>
    <ShowDetailsComponent
      v-if="activeTab === DetailsTabs.Details"
      :showDetails="showDetails"
    ></ShowDetailsComponent>
    <EpisodesListComponent
      v-if="activeTab === DetailsTabs.Episodes"
      :episodes="episodes"
    ></EpisodesListComponent>
    <CrewListComponent
      v-if="activeTab === DetailsTabs.Crew"
      :crew="crew"
    ></CrewListComponent>
  </div>

  <div v-else-if="error || crewError || episodesError">
    <ErrorStateComponent
      :alertMsg="error"
      alertTitle="Oops! Something went wrong..."
    ></ErrorStateComponent>
  </div>
  <div v-else class="pt-5">
    <Spinner></Spinner>
  </div>
</template>

<style scoped lang="scss">
.details-name-header {
  letter-spacing: 3px !important;
}
</style>
