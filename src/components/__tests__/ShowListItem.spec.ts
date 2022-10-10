import type { Show } from "@/types/shows.model";
import { mount, VueWrapper } from "@vue/test-utils";
import ShowListItemComponent from "../ShowListItem.vue";

const MOCK_SHOW: Show = {
  id: 1,
  name: "Peter",
  summary: "some summary",
  officialSite: "some url",
  genres: ["action", "drama"],
  language: "Dutch",
  rating: { average: 5 },
  premiered: "2022",
} as Show;

const checkElementsSuites = [
  {
    name: "name",
    selector: '[data-role="show-list-item__name"]',
    content: MOCK_SHOW.name,
  },
  {
    name: "category",
    selector: '[data-role="show-list-item__category"]',
    content: "Category: action, drama",
  },
  {
    name: "rating",
    selector: '[data-role="show-list-item__average"]',
    content: `Rating: ${MOCK_SHOW.rating.average}`,
  },
  {
    name: "year",
    selector: '[data-role="show-list-item__year"]',
    content: `Year: ${MOCK_SHOW.premiered}`,
  },
];

describe("ShowListItemComponent component", () => {
  let wrapper: VueWrapper<any>;
  beforeEach(() => {
    wrapper = mount(ShowListItemComponent, {
      propsData: {
        showItem: MOCK_SHOW as Show,
      },
    });
  });
  checkElementsSuites.forEach((suite) => {
    test(`should render ${suite.name}`, async () => {
      const element = wrapper.find(suite.selector);
      expect(element.text()).toBe(suite.content);
    });
  });
  test(`should emit value on card click `, async () => {
    const card = wrapper.find('[data-role="show-list-item__card"]');
    await card.trigger("click");
    expect(wrapper.emitted().onClick[0]).toEqual([MOCK_SHOW.id]);
  });
});
