<template>
  <v-btn class="ml-auto" icon dark @click.stop="openCartList">
    <v-badge
      :content="totalCartItems"
      :value="totalCartItems"
      color="red"
      overlap
    >
      <v-icon dark>mdi-cart</v-icon>
    </v-badge>
  </v-btn>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import { CartStore } from "@/store/Cart";

@Component({})
export default class CartButton extends Vue {
  get cartStore(): CartStore {
    return getModule(CartStore, this.$store);
  }

  get totalCartItems(): number {
    return this.cartStore.totalCartItems;
  }

  public openCartList(): void {
    if (this.$vuetify.breakpoint.smAndDown) {
      this.$router.push({ name: "Cart" });
    } else {
      this.openDrawer();
    }
  }

  @Emit("drawer") openDrawer(): boolean {
    return true;
  }
}
</script>
