<template>
<v-app-bar color="error" dark flat>
    <router-link class="navbar__link" to="/"><v-toolbar-title class="font-weight-bold text-h4">SICPAD</v-toolbar-title></router-link>
</v-app-bar>
</template>

<script>
export default {
  name: "navBar",
};
</script>

<style lang="scss" scoped>
.navbar__link {
  color: #ffff;
  text-decoration: none;
}
</style>