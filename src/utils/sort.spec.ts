import type { Show } from "@/types/shows.model";
import { SortingKeys } from "@/types/sorting.model";
import { sortShows } from "./sort";

describe("sortShows", () => {
  it("should return correct value for YEAR_DESCENDING", () => {
    const result = MOCK_SHOWS.sort(
      (a, b) =>
        new Date(a.premiered).getTime() - new Date(b.premiered).getTime()
    );
    expect(sortShows(MOCK_SHOWS, SortingKeys.YEAR_DESCENDING)).toEqual(result);
  });
  it("should return correct value for YEAR_ASCENDING", () => {
    const result = MOCK_SHOWS.sort(
      (a, b) =>
        new Date(b.premiered).getTime() - new Date(a.premiered).getTime()
    );
    expect(sortShows(MOCK_SHOWS, SortingKeys.YEAR_ASCENDING)).toEqual(result);
  });
  it("should return correct value for RATING_ASCENDING", () => {
    const result = MOCK_SHOWS.sort(
      (a, b) => a.rating.average - b.rating.average
    );
    expect(sortShows(MOCK_SHOWS, SortingKeys.RATING_ASCENDING)).toEqual(result);
  });
  it("should return correct value for RATING_DESCENDING", () => {
    const result = MOCK_SHOWS.sort(
      (a, b) => b.rating.average - a.rating.average
    );
    expect(sortShows(MOCK_SHOWS, SortingKeys.RATING_DESCENDING)).toEqual(
      result
    );
  });
});

const MOCK_SHOWS = [
  {
    id: "1",
    premiered: "2022-01-17",
    rating: { average: 5 },
  },
  {
    id: "2",
    premiered: "2022-01-02",
    rating: { average: 7.3 },
  },
  {
    id: "3",
    premiered: "2022-01-04",
    rating: { average: 6.3 },
  },
  {
    id: "4",
    premiered: "2022-01-10",
    rating: { average: 6 },
  },
] as unknown as Show[];
