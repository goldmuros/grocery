<template>
  <v-container fluid>
    <v-row width="100%">
      <v-col>
        <v-img
          :src="productCart.image_url"
          :alt="productCart.productName"
          eager
          height="100%"
          width="100%"
        />
      </v-col>
      <v-col>
        <h2>productCart.productName</h2>
        <div>
          <v-btn dark>
            <v-icon dark> chevron-left </v-icon>
          </v-btn>
          <span>hola</span>
          <v-btn dark>
            <v-icon dark> chevron-right </v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col>
        <span>acumulado</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { IProductCartInfo } from "@/types/Product.types";
import { getModule } from "vuex-module-decorators";
import { CartStore } from "@/store/Cart";

@Component({})
export default class ProductCard extends Vue {
  @Prop({ required: true }) public productCart!: IProductCartInfo;

  get cartStore(): CartStore {
    return getModule(CartStore, this.$store);
  }
}
</script>
