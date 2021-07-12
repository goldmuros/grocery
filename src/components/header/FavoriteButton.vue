<template>
  <v-btn class="ml-auto" icon dark @click.stop="openFavoriteList">
    <v-badge
      :content="totalFavoriteItems"
      :value="totalFavoriteItems"
      color="red"
      overlap
    >
      <v-icon dark>mdi-heart</v-icon>
    </v-badge>
  </v-btn>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import { ProductStore } from "@/store/Product";

@Component({})
export default class CartButton extends Vue {
  get productStore(): ProductStore {
    return getModule(ProductStore, this.$store);
  }

  get totalFavoriteItems(): number {
    return this.productStore.fetchFavorite.length;
  }

  public openFavoriteList(): void {
    if (this.$vuetify.breakpoint.smAndDown) {
      this.$router.push({ name: "Favorite List" });
    } else {
      this.openDrawer();
    }
  }

  @Emit("drawer") openDrawer(): boolean {
    return true;
  }
}
</script>
