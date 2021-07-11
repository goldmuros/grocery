<template>
  <v-container fluid>
    <v-row>
      <v-col xs="4" sm="4">
        <v-btn large class="ml-auto" icon dark @click.stop="back">
          <v-icon dark>mdi-arrow-left</v-icon>
        </v-btn>
      </v-col>
      <v-col xs="6" sm="6"> {{ currentRouteName }} </v-col>
      <v-col xs="4" sm="4" class="">
        <FavoriteButton />
        <CartButton />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CartButton from "@/components/CartButton.vue";
import FavoriteButton from "@/components/FavoriteButton.vue";

@Component({
  components: {
    CartButton,
    FavoriteButton,
  },
})
export default class LayoutMobile extends Vue {
  get currentRouteName(): string {
    return this.$route.name ?? "";
  }

  public back(): void {
    this.$router.go(-1);
  }
}
</script>
