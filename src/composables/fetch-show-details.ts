import type { Show } from "@/types/shows.model";
import { ref, watchEffect, type Ref } from "vue";
import ApiService from "@/services/shows.service";

export function fetchShowDetailsFacade(id:string) {
  const showDetails = ref<Show | null>(null);
  const error = ref<string | null>(null);

  
  return { showDetails, error };
}