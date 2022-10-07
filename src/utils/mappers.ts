import type { Show } from '@/types/shows.model';

export function pickGenres(shows: Show[], ): string[] {
  return shows.reduce((result: string[], item: Show) => {
    item.genres.forEach(
      (genre) => !result.includes(genre) && result.push(genre)
    );
    return result;
  }, []);
}
