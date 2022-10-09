import type { CrewItem } from "@/types/crew.model";
import type { Episode } from "@/types/episode.model";
import type { Show } from "@/types/shows.model";
import { mapCrew, mapEpisodes, pickGenres } from "./mappers";

describe("pickGenres", () => {
  it("should return the genres", () => {
    expect(pickGenres(MOCK_SHOWS)).toEqual([
      "Drama",
      "Science-Fiction",
      "Thriller",
      "Horror",
      "Romance",
      "Adventure",
    ]);
  });
});

describe("mapEpisodes", () => {
  it("should return the mapped episodes", () => {
    expect(mapEpisodes(MOCK_EPISODES as Episode[])).toEqual({
      "1": [
        {
          id: 100,
          season: 1,
        },
      ],
      "2": [
        {
          id: 111,
          season: 2,
        },
        {
          id: 222,
          season: 2,
        },
      ],
    });
  });
});
describe("mapEpisodes", () => {
  it("should return the mapped episodes", () => {
    expect(mapCrew(MOCK_CREW as CrewItem[])).toEqual([
      {
        type: ["producer", "writer"],
        person: {
          id: 1,
        },
      },
      {
        type: ["director"],
        person: {
          id: 2,
        },
      },
    ]);
  });
});

const MOCK_SHOWS: Show[] = [
  {
    id: 1,
    genres: ["Drama", "Science-Fiction", "Thriller"],
  } as Show,
  {
    id: 2,
    genres: ["Horror", "Romance"],
  } as Show,
  {
    id: 3,
    genres: ["Drama", "Adventure"],
  } as Show,
];

const MOCK_EPISODES = [
  {
    id: 100,
    season: 1,
  },
  {
    id: 111,
    season: 2,
  },
  {
    id: 222,
    season: 2,
  },
];

const MOCK_CREW = [
  {
    type: "producer",
    person: {
      id: 1,
    },
  },
  {
    type: "writer",
    person: {
      id: 1,
    },
  },
  {
    type: "director",
    person: {
      id: 2,
    },
  },
];
