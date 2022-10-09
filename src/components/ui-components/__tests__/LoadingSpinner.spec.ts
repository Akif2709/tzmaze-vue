import { mount, VueWrapper } from "@vue/test-utils";
import LoadingSpinner from "../LoadingSpinner.vue";

describe("ErrorState component", () => {
  let wrapper: VueWrapper<LoadingSpinner>;
  beforeEach(() => {
    wrapper = mount(LoadingSpinner);
  });
  test("should render component", async () => {
    expect(wrapper.exists).toBeDefined();
  });
});
