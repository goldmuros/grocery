import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex, { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import { ProductStore } from "@/store/Product";
import Vuetify from "vuetify";
import FavoriteButton from "@/components/header/FavoriteButton.vue";

const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.use(Vuex);

describe("FavoriteButton component", () => {
  let store: Store<unknown>;

  beforeEach(() => {
    const getters = {
      fetchFavorite: () => ["1"],
    };

    store = new Vuex.Store({
      modules: {
        product: {
          namespaced: true,
          getters,
        },
      },
    });
    getModule(ProductStore, store);
  });

  it("Exist component", async () => {
    const cmp = shallowMount(FavoriteButton, {
      store,
      localVue,
    });

    expect(cmp.exists()).toBe(true);
  });
});
