<template>
  <div>
    <div class="d-flex justify-center">
      <p class="d-block">${{ totalAmount }}</p>
    </div>
    <div class="d-flex justify-center">
      <v-btn class="d-block" depressed color="primary" @click="checkout">
        Checkout
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import { CartStore } from "@/store/Cart";

@Component({})
export default class FooterCart extends Vue {
  get cartStore(): CartStore {
    return getModule(CartStore, this.$store);
  }

  get totalAmount(): number {
    return this.cartStore.totalAmount;
  }

  @Emit("checkout")
  public checkout(): boolean {
    return true;
  }
}
</script>
