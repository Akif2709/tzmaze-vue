import type { Show } from "@/types/shows.model";
import { SortingKeys } from "@/types/sorting.model";

export function sortShows(shows: Show[] = [], prop: SortingKeys): Show[] {
  return shows.sort((a: Show, b: Show) => {
    const date1 = new Date(a.premiered).getTime();
    const date2 = new Date(b.premiered).getTime();
    switch (prop) {
      case SortingKeys.YEAR_ASCENDING:
        return date1 - date2;
      case SortingKeys.YEAR_DESCENDING:
        return date2 - date1;
      case SortingKeys.RATING_ASCENDING:
        return a.rating.average - b.rating.average;
      case SortingKeys.RATING_DESCENDING:
        return b.rating.average - a.rating.average;
      default:
        return 0;
    }
  });
}
