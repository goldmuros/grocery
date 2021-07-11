<template>
  <v-card height="100%" width="100%">
    <v-card-title v-if="$vuetify.breakpoint.mdAndUp">Cart</v-card-title>
    <v-card-text v-if="carts.length > 0" class="card-text">
      <v-list>
        <v-list-item v-for="(item, index) in carts" :key="index">
          <v-list-item-content class="img_prod">
            <v-img contain :src="item.image_url"></v-img>
          </v-list-item-content>

          <v-list-item-content>
            <v-list-item-title v-html="item.productName"></v-list-item-title>
            <v-list-item-action class="row-buttons">
              <v-row>
                <v-col class="col" cols="7">
                  <v-btn icon small>
                    <v-icon @click="reduce(item)"> mdi-minus </v-icon>
                  </v-btn>
                  <span class="pl-3 pr-3">{{ item.quantity }}</span>
                  <v-btn icon small>
                    <v-icon @click="add(item)"> mdi-plus </v-icon>
                  </v-btn>
                </v-col>
                <v-col class="col pt-4" cols="5">${{ item.totalPrice }}</v-col>
              </v-row>
            </v-list-item-action>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-card-text v-else>
      <p class="headline font-weight-bold">No items</p>
    </v-card-text>
    <v-footer>
      <v-btn block text> Checkout </v-btn>
      <p>${{ totalAmount }}</p>
    </v-footer>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import { CartStore } from "@/store/Cart";
import ProductCart from "@/components/ProductCart.vue";
import { IProductCartInfo } from "@/types/Product.types";

@Component({
  components: {
    ProductCart,
  },
})
export default class CartList extends Vue {
  get cartStore(): CartStore {
    return getModule(CartStore, this.$store);
  }

  get carts(): IProductCartInfo[] {
    return this.cartStore.fetchCart;
  }

  get totalAmount(): number {
    return this.cartStore.totalAmount;
  }

  public reduce(item: IProductCartInfo): void {
    this.cartStore.reduce(item);
  }

  public add(item: IProductCartInfo): void {
    this.cartStore.increase(item);
  }
}
</script>

<style scoped>
.img_prod {
  max-width: 50px;
  margin-right: 10px;
}

.card-text {
  width: 100%;
  padding-left: 0;
}

.row-buttons {
  padding-left: 0;
}
.col {
  padding-left: 0;
}
</style>
