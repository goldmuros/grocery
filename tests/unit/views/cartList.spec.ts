import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex, { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import { CartStore } from "@/store/Cart";
import Vuetify from "vuetify";
import CartList from "@/views/CartList.vue";

const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.use(Vuex);

describe("CartList component", () => {
  let store: Store<unknown>;
  let vuetify = new Vuetify();

  beforeEach(() => {
    const getters = {
      fetchFavorite: () => ["1"],
      fetchCart: () => [],
    };

    store = new Vuex.Store({
      modules: {
        cart: {
          namespaced: true,
          getters,
        },
      },
    });
    getModule(CartStore, store);
  });

  it("Exist component", async () => {
    const cmp = shallowMount(CartList, {
      store,
      localVue,
      vuetify,
    });

    expect(cmp.exists()).toBe(true);
  });
});
