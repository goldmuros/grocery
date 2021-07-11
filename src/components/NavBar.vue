<template>
  <div>
    <v-app-bar app color="primary" dark width="100%">
      <template v-if="$vuetify.breakpoint.smAndDown">
        <LayoutMobile />
      </template>
      <template v-else>
        <v-spacer></v-spacer>
        <v-container>
          <v-row>
            <v-col cols="12" class="d-flex .float-end">
              <FavoriteButton @drawer="openDrawer('favorite')" />
              <CartButton @drawer="openDrawer('cart')" />
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-app-bar>
    <v-navigation-drawer
      absolute
      height="100vh"
      temporary
      right
      v-model="drawer"
    >
      <CartList v-if="typeDrawer === 'cart'" />
      <FavoriteList v-else />
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CartList from "@/views/CartList.vue";
import FavoriteList from "@/views/FavoriteList.vue";
import LayoutMobile from "@/components/LayoutMobile.vue";
import CartButton from "@/components/CartButton.vue";

@Component({
  components: {
    CartList,
    LayoutMobile,
    CartButton,
    FavoriteList,
  },
})
export default class NavBar extends Vue {
  public drawer = false;
  public typeDrawer = "";

  public openDrawer(type: string): void {
    this.drawer = !this.drawer;
    this.typeDrawer = type;
  }
}
</script>
