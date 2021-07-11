<template>
  <v-btn class="ml-auto" icon dark @click.stop="openCartList">
    <v-icon dark>mdi-cart</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";

@Component({})
export default class CartButton extends Vue {
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
