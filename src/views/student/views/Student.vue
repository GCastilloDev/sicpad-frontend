<template>
  <v-container>
    <div class="d-flex justify-space-between">
      <h1>Alumnos</h1>
      <v-btn
        depressed
        tile
        color="primary"
        @click="$router.push({ name: 'StudentAdd' })"
        >Registrar alumno</v-btn
      >
    </div>
  </v-container>
</template>

<script>
  import { db } from '../../../helpers/firebase';
  export default {
    mounted() {
      this.getCategoria();
    },
    data: () => ({
      categorias: '',
      overlay: false,
    }),
    methods: {
      async getCategoria() {
        try {
          const { docs } = await db.collection('categorias').get();
          const categorias = docs.map(async (e) => {
            const item = {};
            item.categoria = e.data().nombre;
            item.servicios = await this.getServicios(item.categoria);
            return item;
          });
          this.categorias = await Promise.all(categorias);
          this.overlay = false;
          console.log(this.categorias);
        } catch (error) {
          console.warn(error);
        }
      },
      async getServicios(categoria) {
        try {
          const { docs } = await db
            .collection('servicios')
            .where('categoria', '==', categoria)
            .get();
          return docs.map((e) => {
            const data = {
              ...e.data(),
              id: e.id,
            };
            return data;
          });
        } catch (error) {
          console.warn(error);
        }
      },
    },
  };
</script>

<style></style>
