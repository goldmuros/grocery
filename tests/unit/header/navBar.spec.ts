import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import NavBar from "@/components/header/NavBar.vue";

const localVue = createLocalVue();
localVue.use(Vuetify);

describe("NavBar component", () => {
  let vuetify = new Vuetify();

  it("Exist component", async () => {
    const cmp = shallowMount(NavBar, {
      localVue,
      vuetify,
    });

    expect(cmp.exists()).toBe(true);
  });
});
