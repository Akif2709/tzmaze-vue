import type { Show } from "@/types/shows.model";
import { mount, VueWrapper } from "@vue/test-utils";
import ShowDetails from "../ShowDetails.vue";

const MOCK_SHOW: Show = {
  id: 1,
  summary: "some summary",
  officialSite: "some url",
  genres: ["action", "drama"],
  language: "Dutch",
} as Show;

const checkElementsSuites = [
  {
    name: "summary",
    selector: '[data-role="show-details-summary"]',
    content: MOCK_SHOW.summary,
  },
  {
    name: "visit official website text",
    selector: '[data-role="visit-official-website-text"]',
    content: "Visit official website",
  },
  {
    name: "details subheader",
    selector: '[data-role="show-details-subheader]',
    content: "Details",
  },
  {
    name: "category",
    selector: '[data-role="category"]',
    content: "Category: action, drama",
  },
  {
    name: "language",
    selector: '[data-role="show-details-language"]',
    content: "Language:  Dutch",
  },
];

describe("ShowDetails component", () => {
  let wrapper: VueWrapper<ShowDetails>;
  beforeEach(() => {
    wrapper = mount(ShowDetails, {
      propsData: {
        showDetails: MOCK_SHOW,
      },
    });
  });
  checkElementsSuites.forEach((suite) => {
    test(`should render ${suite.name}`, async () => {
      const element = wrapper.find(suite.selector);
      expect(element.text()).toBe(suite.content);
    });
  });
});
