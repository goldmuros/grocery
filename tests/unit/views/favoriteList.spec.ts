import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex, { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import { ProductStore } from "@/store/Product";
import Vuetify from "vuetify";
import FavoriteList from "@/views/FavoriteList.vue";

const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.use(Vuex);

describe("FavoriteList component", () => {
  let store: Store<unknown>;
  let vuetify = new Vuetify();

  beforeEach(() => {
    const getters = {
      fetchFavorite: () => [{}],
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
    const cmp = shallowMount(FavoriteList, {
      store,
      localVue,
      vuetify,
    });

    expect(cmp.exists()).toBe(true);
  });
});
