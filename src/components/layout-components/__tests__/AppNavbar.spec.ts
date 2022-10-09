import { shallowMount, VueWrapper } from "@vue/test-utils";
import AppNavbar from "../AppNavbar.vue";

describe("AppNavbar component", () => {
  let wrapper: VueWrapper<AppNavbar>;
  beforeEach(() => {
    wrapper = shallowMount(AppNavbar, {
      stubs: {
        stubs: ["router-link"],
      },
    });
  });
  test("should render navbar item Shows", async () => {
    const showsTabElem = wrapper.find('[data-role="router-link-shows"]');
    expect(showsTabElem.text()).toContain("Shows");
    expect(showsTabElem.attributes("to")).toBe("/shows");
  });
  test("should render navbar item Peoples", async () => {
    const peoplesTabElem = wrapper.find('[data-role="router-link-peoples"]');
    expect(peoplesTabElem.text()).toContain("Peoples");
    expect(peoplesTabElem.attributes("to")).toBe("/people");
  });
  test("clicking hamburger menu should update its activation", async () => {
    const hamburgerMEnu = wrapper.find('[data-role="hamburger-menu"]');
    await hamburgerMEnu.trigger("click");
    expect(wrapper.vm.isHamburgerMenuActive).toBe(true);
  });
});
