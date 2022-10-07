export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: Array<string>;
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: Schedule;
  rating: {
    average: number;
  };
  weight: number;
  network: Network;
  webChannel: null;
  dvdCountry: null;
  externals: Externals;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: number;
  _links: Links;
}

export interface Schedule {
  time: string;
  days: Array<string>;
}

export interface Network {
  id: 2;
  name: string;
  country: {
    name: string;
    code: string;
    timezone: string;
  };
  officialSite: string;
}

export interface Externals {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

export interface Links {
  self: {
    href: string;
  };
  previousepisode: {
    href: string;
  };
}

export interface SearchShowsResponseItem {
  score:number;
  show:Show
}
