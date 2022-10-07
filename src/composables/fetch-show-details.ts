import type { Show } from "@/types/shows.model";
import { ref } from "vue";
import ApiService from "@/services/api-service";
import type { CrewItem } from "@/types/crew.model";
import type { Episode } from "@/types/episode.model";

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
    .then((response) => (crew.value = response))
    .catch((err) => (error.value = err));
  
  return { crew, error };
}

export function fetchShowEpisodesFacade(id: string) {
    const episodes = ref<Episode[] | undefined>(undefined);
    const error = ref<string | undefined>(undefined);
  
    ApiService.getEpisodesOfShow(id)
      .then((response) => (episodes.value = response))
      .catch((err) => (error.value = err));
    return { episodes, error };
  }
