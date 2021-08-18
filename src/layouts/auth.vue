<template>
  <v-app>
    <v-main>
      <nav-bar></nav-bar>
      <v-row class="prueba">
        <v-col cols="2" class="ma-0 pr-0">
          <v-navigation-drawer width="100%" permanent>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  Application
                </v-list-item-title>
                <v-list-item-subtitle> subtext </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
              <v-list-item
                v-for="item in items"
                :key="item.title"
                :to="{ name: item.to }"
                link
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-col>
        <v-col cols="10" class="pl-0">
          <router-view />
        </v-col>
      </v-row>
    </v-main>
    <footer-component></footer-component>
  </v-app>
</template>

<script>
  export default {
    name: 'LayoutAuth',
    components: {
      footerComponent: () => import('../components/core/footer.vue'),
      navBar: () => import('../components/core/navBar.vue'),
    },
    data: () => ({
      items: [
        { title: 'Alumnos', icon: 'mdi-school', to: 'Student' },
        { title: 'Tutores', icon: 'mdi-human-male-child', to: 'FamilyGuy' },
        { title: 'Maestros', icon: 'mdi-teach', to: 'FamilyGuy' },
        { title: 'Grupos', icon: 'mdi-account-group', to: 'Groups' },
      ],
      right: null,
    }),
  };
</script>

<style lang="scss" scoped>
  .prueba {
    min-height: 100%;
  }
</style>
