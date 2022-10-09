import type { CrewItem } from "@/types/crew.model";
import type { Episode, EpisodesInGroup } from "@/types/episode.model";
import type { Show } from "@/types/shows.model";

/**
 *
 * This method is collect all show categories (genre) into an array
 * @param shows
 * @returns
 */
export function pickGenres(shows: Show[]): string[] {
  return shows.reduce((result: string[], item: Show) => {
    item.genres.forEach(
      (genre) => !result.includes(genre) && result.push(genre)
    );
    return result;
  }, []);
}

/**
 *
 * This method is nesting all episodes into its own season and return episodes in a group
 * @param episodes
 * @returns
 */
export function mapEpisodes(episodes: Episode[]): EpisodesInGroup {
  return episodes.reduce((result: EpisodesInGroup, item: Episode) => {
    const seasonNumber = item.season.toString();
    if (!result[seasonNumber]) {
      result[seasonNumber] = [];
    }
    result[seasonNumber].push(item);
    return result;
  }, {} as EpisodesInGroup);
}

/**
 *
 * This method is mapping the crew persons and removes the duplications
 * @param crew
 * @returns
 */
export function mapCrew(crew: CrewItem[]): CrewItem[] {
  return crew.reduce((result: CrewItem[], item: CrewItem) => {
    const personAlreadyInList = result.find(
      (i) => i.person.id === item.person.id
    );
    if (personAlreadyInList) {
      (personAlreadyInList.type as string[]).push(item.type as string);
    } else {
      result.push({ ...item, type: [item.type as string] });
    }
    return result;
  }, [] as CrewItem[]);
}
