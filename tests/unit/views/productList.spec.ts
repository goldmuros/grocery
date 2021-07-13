import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex, { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import { ProductStore } from "@/store/Product";
import Vuetify from "vuetify";
import ProductList from "@/views/ProductList.vue";

const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.use(Vuex);

describe("ProductList component", () => {
  let store: Store<unknown>;
  let vuetify = new Vuetify();

  beforeEach(() => {
    const getters = {
      fetchProducts: () => ["1"],
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
    const cmp = shallowMount(ProductList, {
      store,
      localVue,
      vuetify,
    });

    expect(cmp.exists()).toBe(true);
  });
});
