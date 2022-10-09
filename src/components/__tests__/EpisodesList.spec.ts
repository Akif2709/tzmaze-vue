import type { Episode, EpisodesInGroup } from "@/types/episode.model";
import { mount, VueWrapper } from "@vue/test-utils";
import EpisodesList from "../EpisodesList.vue";

describe("EpisodesList component", () => {
  let wrapper: VueWrapper<EpisodesList>;
  beforeEach(() => {
    wrapper = mount(EpisodesList, {
      propsData: {
        episodes: MOCK_EPISODES,
      },
    });
  });
  test("should render all season titles", async () => {
    const episodesTitles = wrapper.findAll('[data-role="season-title"]');
    episodesTitles.forEach((title, index) => {
      expect(title.text()).toBe("Season " + Object.keys(MOCK_EPISODES)[index]);
    });
  });
  test("should render all episodes", async () => {
    const episodes = wrapper.findAll('[data-role="episode"]');
    expect(episodes.length).toBe(3);
  });
});

const MOCK_EPISODES: EpisodesInGroup = {
  "1": [
    { id: 1, number: 1, name: "episode 1", season: 1 } as Episode,
    { id: 2, number: 2, name: "episode 2", season: 1 } as Episode,
  ],
  "2": [{ id: 3, number: 1, name: "other episode 1", season: 2 } as Episode],
};
