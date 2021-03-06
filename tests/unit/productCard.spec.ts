import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex, { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import { CartStore } from "@/store/Cart";
import Vuetify from "vuetify";
import ProductCard from "@/components/ProductCard.vue";

const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.use(Vuex);

describe("ProductCard component", () => {
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
    const propsData = {
      product: {
        id: "1",
        image_url: "",
        stock: 0,
        productName: "",
        price: 0,
        productDescription: "",
        favorite: "0",
      },
    };

    const cmp = shallowMount(ProductCard, {
      store,
      propsData,
      localVue,
    });

    expect(cmp.exists()).toBe(true);
  });
});
