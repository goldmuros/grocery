<template>
  <v-card class="product-card">
    <v-img
      :src="product.image_url"
      :alt="product.productName"
      eager
      max-width="40vw"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey"></v-progress-circular>
        </v-row>
      </template>
    </v-img>

    <v-card-title
      >{{ product.productName }}
      <v-spacer></v-spacer>
      ${{ product.price }}
    </v-card-title>
    <v-card-subtitle>{{ product.productDescription }}</v-card-subtitle>

    <v-card-actions>
      <span class="pl-4"> {{ product.stock }} left </span>
      <v-spacer></v-spacer>
      <v-btn small fab dark color="primary" @click="addToCart">
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { IProductCartInfo, IProductInfo } from "@/types/Product.types";
import { getModule } from "vuex-module-decorators";
import { CartStore } from "@/store/Cart";

@Component({})
export default class ProductCard extends Vue {
  @Prop({ required: true }) public product!: IProductInfo;

  get cartStore(): CartStore {
    return getModule(CartStore, this.$store);
  }

  public addToCart(): void {
    const productCart: IProductCartInfo = {
      ...this.product,
      totalPrice: this.product.price,
      quantity: 1,
    };

    this.cartStore.addProductToCart(productCart);
  }
}
</script>

<style scoped>
.product-card {
  width: 40vw;
}
</style>
