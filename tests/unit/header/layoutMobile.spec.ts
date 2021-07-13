import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import LayoutMobile from "@/components/header/LayoutMobile.vue";

const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.use(VueRouter);
const router = new VueRouter();

describe("LayoutMobile component", () => {
  it("Exist component", async () => {
    const cmp = shallowMount(LayoutMobile, {
      localVue,
      router,
    });

    expect(cmp.exists()).toBe(true);
  });
});
