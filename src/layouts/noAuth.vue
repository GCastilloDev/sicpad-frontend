<template>
  <v-app>
    <v-main>
      <nav-bar></nav-bar>
      <router-view />
    </v-main>
    <footer-component></footer-component>
  </v-app>
</template>

<script>
export default {
  name: "LayoutNoAuth",
  components: {
    footerComponent: () => import("../components/core/footer.vue"),
    navBar: () => import("../components/core/navBar.vue"),
  },
};
</script>

<style lang="scss" scoped>
</style>