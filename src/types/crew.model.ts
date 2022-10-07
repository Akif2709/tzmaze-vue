export interface CrewItem {
  type: string;
  person: {
    id: number;
    url: string;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    birthday: string;
    deathday: null;
    gender: string;
    image: {
      medium: string;
      original: string;
    };
    updated: 1635015490;
    _links: {
      self: {
        href: string;
      };
    };
  };
}
