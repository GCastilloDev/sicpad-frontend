<template>
  <v-container>
    <h1 class="text-center mb-5">Registrar grupo</h1>
    <v-card class="pa-5">
      <v-form>
        <v-row>
          <v-col
            ><v-text-field
              v-model="grupo.nombre"
              label="Nombre del grupo"
              placeholder="Ingrese el nombre del grupo"
              outlined
              dense
            ></v-text-field
          ></v-col>
          <v-col
            ><v-autocomplete
              v-model="grupo.turno"
              placeholder="Seleccione un turno"
              :items="turnos"
              outlined
              dense
            >
            </v-autocomplete
          ></v-col>
        </v-row>
      </v-form>
      <div class="d-flex justify-end">
        <v-btn class="text-none" color="primary" depressed @click="guardarGrupo"
          >Registrar
          <v-icon right>mdi-text-box-plus</v-icon>
        </v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script>
  import { db } from '../../../helpers/firebase';

  export default {
    data: () => ({
      grupo: {
        nombre: '',
        turno: '',
      },
      turnos: ['Matutino', 'Vespertino'],
    }),
    methods: {
      async guardarGrupo() {
        try {
          await db
            .collection('grupos')
            .doc()
            .set(this.grupo);

          this.$router.push({ name: 'Groups' });
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
</script>

<style lang="scss" scoped></style>
