<template>
  <v-card height="100%" width="100%">
    <v-card-title v-if="$vuetify.breakpoint.mdAndUp">Favorites</v-card-title>
    <v-card-text v-if="favorites.length > 0" class="card-text">
      <v-list>
        <v-list-item v-for="(item, index) in favorites" :key="index">
          <v-list-item-content class="img_prod">
            <v-img contain :src="item.image_url"></v-img>
          </v-list-item-content>

          <v-list-item-content>
            <v-list-item-title v-html="item.productName"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-card-text v-else>
      <p class="headline font-weight-bold">No items</p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import { ProductStore } from "@/store/Product";
import { IProductInfo } from "@/types/Product.types";

@Component({})
export default class CartList extends Vue {
  get productStore(): ProductStore {
    return getModule(ProductStore, this.$store);
  }

  get favorites(): IProductInfo[] {
    return this.productStore.fetchFavorite;
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
