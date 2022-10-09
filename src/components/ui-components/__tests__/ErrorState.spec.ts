import { mount, VueWrapper } from "@vue/test-utils";
import ErrorState from "../ErrorState.vue";

describe.only("ErrorState component", () => {
  let wrapper: VueWrapper<ErrorState>;
  beforeEach(() => {
    wrapper = mount(ErrorState, {
      propsData: {
        alertTitle: "mock alert title",
        alertMsg: "mock alert message",
      },
    });
  });
  test("should render alert title", async () => {
    const alertTitle = wrapper.find('[data-role="alert-title"]');
    expect(alertTitle.text()).toContain("mock alert title");
  });
  test("should render alert message", async () => {
    const alertMessage = wrapper.find('[data-role="alert-message"]');
    expect(alertMessage.text()).toContain("mock alert message");
  });
});
