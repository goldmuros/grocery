<template>
  <v-container fluid>
    <v-row>
      <v-col xs="4" sm="4">
        <v-btn
          large
          icon
          dark
          @click.stop="back"
          v-if="currentRouteName !== 'Product List'"
        >
          <v-icon dark>mdi-arrow-left</v-icon>
        </v-btn>
      </v-col>
      <v-col xs="6" sm="6" class="pt-5 title"> {{ currentRouteName }} </v-col>
      <v-col xs="4" sm="4">
        <FavoriteButton />
        <CartButton />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CartButton from "@/components/header/CartButton.vue";
import FavoriteButton from "@/components/header/FavoriteButton.vue";

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
