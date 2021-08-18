<template>
  <v-container>
    <div class="d-flex justify-space-between">
      <h1>Alumnos</h1>
      <v-btn
        depressed
        tile
        color="primary"
        @click="$router.push({ name: 'StudentAdd' })"
        :loading="loading"
        >Registrar alumno</v-btn
      >
    </div>

    <v-data-table
      :headers="headers"
      :items="alumnos"
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
      categorias: '',
      loading: false,
      alumnos: [],
      headers: [
        { text: 'Matrícula', value: 'matricula' },
        {
          text: 'Nombre',
          align: 'start',
          sortable: false,
          value: 'nombre',
        },
        { text: 'Apellido paterno', value: 'apellidoPaterno' },
        { text: 'Apellido materno', value: 'apellidoMaterno' },
        { text: 'Teléfono', value: 'telefono' },
        { text: 'Email', value: 'email' },
        { text: 'Grupo', value: 'grupo.nombre' },
        { text: 'Turno', value: 'grupo.turno' },
        { text: 'Tutor', value: 'tutor.nombreCompleto' },
      ],
    }),
    methods: {
      async getData() {
        try {
          this.loading = true;
          const { docs } = await db.collection('estudiantes').get();
          this.alumnos = docs.map((e) => {
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
