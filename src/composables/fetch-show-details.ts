import type { Show } from "@/types/shows.model";
import { ref, type Ref } from "vue";
import ApiService from "@/services/api-service";
import type { CrewItem } from "@/types/crew.model";
import type { EpisodesInGroup } from "@/types/episode.model";
import { mapCrew, mapEpisodes } from "@/utils/mappers";

export function fetchShowDetailsFacade(id: string) {
  const showDetails = ref<Show | undefined>(undefined);
  const error = ref<string | undefined>(undefined);

  ApiService.getShowDetails(id)
    .then((response) => (showDetails.value = response))
    .catch((err) => (error.value = err));

  return { showDetails, error };
}

export function fetchShowCrewFacade(id: string) {
  const crew = ref<CrewItem[] | undefined>(undefined);
  const error = ref<string | undefined>(undefined);

  ApiService.getCrewOfShow(id)
    .then((response) => (crew.value = mapCrew(response)))
    .catch((err) => (error.value = err));

  return { crew, error };
}

export function fetchShowEpisodesFacade(id: string): {
  episodes: Ref<EpisodesInGroup | undefined>;
  error: Ref<string | undefined>;
} {
  const episodes = ref<EpisodesInGroup | undefined>(undefined);
  const error = ref<string | undefined>(undefined);

  ApiService.getEpisodesOfShow(id)
    .then((response) => (episodes.value = mapEpisodes(response)))
    .catch((err) => (error.value = err));
  return { episodes, error };
}
