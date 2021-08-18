<template>
  <v-container>
    <div class="d-flex justify-space-between">
      <h1>Grupos</h1>
      <v-btn
        depressed
        tile
        color="primary"
        @click="$router.push({ name: 'GroupAdd' })"
        >Registrar grupo</v-btn
      >
    </div>
    <v-data-table
      :loading="loading"
      :headers="headers"
      :items="grupos"
      class="elevation-1"
    ></v-data-table>
  </v-container>
</template>

<script>
  import { db } from '../../../helpers/firebase';

  export default {
    mounted() {
      this.getData();
    },
    data: () => ({
      loading: false,
      headers: [
        { text: 'Grupo', value: 'nombre' },

        { text: 'Turno', value: 'turno' },
      ],
      grupos: [],
    }),
    methods: {
      async getData() {
        try {
          this.loading = true;
          const { docs } = await db.collection('grupos').get();
          this.grupos = docs.map((e) => {
            return {
              ...e.data(),
              id: e.id,
            };
          });
          this.loading = false;
        } catch (error) {
          console.warn(error);
        }
      },
    },
  };
</script>

<style lang="scss" scoped></style>
