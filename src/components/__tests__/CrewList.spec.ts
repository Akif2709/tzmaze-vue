import type { CrewItem } from "@/types/crew.model";
import { mount, VueWrapper } from "@vue/test-utils";
import CrewList from "../CrewList.vue";

describe("CrewList component", () => {
  let wrapper: VueWrapper;
  beforeEach(() => {
    const wrapper = mount(CrewList, {
      propsData: {
        crew: MOCK_CREW,
      },
    });
  });
  test("should render all persons", async () => {
    const personItem = wrapper.findAll('[data-role="person-card-item"]');
    expect(personItem.length).toBe(MOCK_CREW.length);
  });
  test("should render img", async () => {
    const img = wrapper.find('[data-role="person-card-item"] img');
    expect(img.isVisible()).toBe(true);
  });
  test("should render name", async () => {
    const personname = wrapper.find('[data-role="crew-person-name"]');
    expect(personname.text()).toBe(MOCK_CREW[0].person.name);
  });
});

const MOCK_CREW: CrewItem[] = [
  {
    person: { id: 1, name: "alice" } as CrewItem["person"],
    type: ["director"],
  },
  {
    person: { id: 2, name: "matt" } as CrewItem["person"],
    type: ["director"],
  },
  {
    person: { id: 3, name: "pedro" } as CrewItem["person"],
    type: ["director"],
  },
  {
    person: { id: 4, name: "john" } as CrewItem["person"],
    type: ["director"],
  },
];
