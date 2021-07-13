import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex, { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import { CartStore } from "@/store/Cart";
import Vuetify from "vuetify";
import CartButton from "@/components/header/CartButton.vue";

const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.use(Vuex);

describe("CartButton component", () => {
  let store: Store<unknown>;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        cartModule: CartStore,
      },
    });
    getModule(CartStore, store);
  });

  it("Exist component", async () => {
    const cmp = shallowMount(CartButton, {
      store,
      localVue,
    });

    expect(cmp.exists()).toBe(true);
  });
});
