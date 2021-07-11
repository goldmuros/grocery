import Vue from "vue";
import Vuex from "vuex";
import { ProductState, ProductStore } from "./Product";
import { CartState, CartStore } from "./Cart";

Vue.use(Vuex);

export interface RootState {
  product: ProductState;
  cart: CartState;
}

export default new Vuex.Store<RootState>({
  modules: {
    product: ProductStore,
    cart: CartStore,
  },
});
