<template>
  <v-app>
    <NavBar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/header/NavBar.vue";

@Component({
  components: {
    NavBar,
  },
})
export default class App extends Vue {}
</script>
