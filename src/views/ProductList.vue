<template>
  <v-container fluid>
    <v-row v-if="$vuetify.breakpoint.mdAndUp">
      <v-col cols="12" class="d-flex justify-center title">
        Product List
      </v-col>
    </v-row>
    <v-row>
      <v-col
        xs="6"
        sm="6"
        md="3"
        v-for="(item, index) in products"
        :key="index"
      >
        <ProductCard :product="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import { ProductStore } from "@/store/Product";
import ProductCard from "@/components/ProductCard.vue";
import { IProductInfo } from "@/types/Product.types";

@Component({
  components: {
    ProductCard,
  },
})
export default class ProductList extends Vue {
  get productStore(): ProductStore {
    return getModule(ProductStore, this.$store);
  }

  get products(): IProductInfo[] {
    return this.productStore.fetchProducts;
  }

  public created(): void {
    this.productStore.fetchItems();
  }
}
</script>
