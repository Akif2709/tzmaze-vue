import type { Show } from "@/types/shows.model";
import { ref, watchEffect, type Ref } from "vue";
import ApiService from "@/services/api-service";
import { pickGenres } from "@/utils/mappers";

export function fetchShowsFacade(query?: Ref<string>) {
  const shows = ref<Show[] | undefined>(undefined);
  const error = ref<string | undefined>(undefined);
  const genres = ref<string[] | undefined>(undefined);

  async function doFetch() {
    // reset state before fetching..
    shows.value = undefined;
    error.value = undefined;

    try {
      if (query?.value) {
        shows.value = await ApiService.searchShows(query.value);
      } else {
        shows.value = await ApiService.getAllShows();
        console.log("hello", shows.value);
      }
      genres.value = pickGenres(shows.value);
    } catch (e) {
      error.value = e as string;
    }
  }

  watchEffect(doFetch);

  return { shows, error, genres };
}
