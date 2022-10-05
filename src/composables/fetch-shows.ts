import type { Show } from "@/types/shows.model";
import { ref, watchEffect, type Ref } from "vue";
import ApiService from "@/services/shows.service";

export function fetchShowFacade(query?: Ref<string>) {
  const shows = ref<Show[] | null>(null);
  const error = ref<string | null>(null);

  async function doFetch() {
    // reset state before fetching..
    shows.value = null;
    error.value = null;

    try {
      if (query?.value) {
        shows.value = await ApiService.searchShows(query.value);
      } else {
        shows.value = await ApiService.getAllShows();
      }
    } catch (e) {
      error.value = e as string;
    }
  }

  watchEffect(doFetch);

  return { shows, error };
}





