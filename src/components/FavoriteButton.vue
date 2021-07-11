<template>
  <v-btn class="ml-auto" icon dark @click.stop="openFavoriteList">
    <v-icon dark>mdi-heart</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";

@Component({})
export default class CartButton extends Vue {
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
