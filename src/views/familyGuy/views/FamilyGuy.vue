<template>
  <v-container>
    <div class="d-flex justify-space-between">
      <h1>Padres de familia</h1>
      <v-btn
        depressed
        tile
        color="primary"
        @click="$router.push({ name: 'FamilyGuyAdd' })"
        :loading="loading"
        >Registrar tutor</v-btn
      >
    </div>

    <v-data-table
      :headers="headers"
      :items="tutores"
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
      tutores: [],
      headers: [
        {
          text: 'Nombre',
          align: 'start',
          sortable: false,
          value: 'nombre',
        },
        { text: 'Apellido paterno', value: 'apellidoPaterno' },
        { text: 'Apellido materno', value: 'apellidoMaterno' },
        { text: 'Celular', value: 'celular' },
        { text: 'Teléfono', value: 'telefono' },
        { text: 'Email', value: 'email' },
      ],
    }),
    methods: {
      async getData() {
        try {
          this.loading = true;
          const { docs } = await db.collection('tutores').get();
          this.tutores = docs.map((e) => {
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

<style></style>
