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
  name: "App",
  components: {
    navBar: () => import("./components/navBar"),
    footerComponent: () => import("./components/footer")
  },
  data: () => ({
    //
  }),
};
</script>
