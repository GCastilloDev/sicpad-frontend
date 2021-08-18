<template>
  <v-card class="pa-3 ">
    <v-form>
      <v-row>
        <v-col cols="12"><h2>Datos personales</h2></v-col>

        <v-col cols="4">
          <v-text-field
            v-model="alumno.nombre"
            label="Nombre(s)"
            placeholder="Ingrese el nombre"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="alumno.apellidoPaterno"
            label="Apellido paterno"
            placeholder="Ingrese el apellido paterno"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="alumno.apellidoMaterno"
            label="Apellido materno"
            placeholder="Ingrese el apellido materno"
            outlined
            dense
          ></v-text-field>
        </v-col>

        <v-col cols="3">
          <v-text-field
            v-model="alumno.email"
            label="Email"
            placeholder="Ingrese el email"
            type="email"
            outlined
            dense
          ></v-text-field>
        </v-col>

        <v-col cols="3">
          <v-text-field
            v-model="alumno.celular"
            label="Celular"
            placeholder="Ingrese el número de celular"
            outlined
            dense
          ></v-text-field>
        </v-col>

        <v-col cols="3">
          <v-text-field
            v-model="alumno.telefono"
            label="Teléfono"
            placeholder="Ingrese el número de teléfono"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-checkbox
            v-model="checkbox"
            label="Es el mismo que el celular"
          ></v-checkbox>
        </v-col>
        <v-col cols="12"><h2>Datos escolares</h2></v-col>
        <v-col cols="4">
          <v-text-field
            v-model="alumno.matricula"
            label="Matrícula"
            placeholder="Ingrese la matrícula"
            outlined
            dense
          ></v-text-field>
        </v-col>

        <v-col cols="4">
          <v-autocomplete
            v-model="alumno.grupo"
            placeholder="Seleccione un grupo"
            outlined
            dense
            :items="grupos"
            item-text="nombre"
            return-object
            ><template slot="append-outer">
              <v-btn icon x-small color="primary"
                ><v-icon>mdi-plus-circle</v-icon></v-btn
              >
            </template></v-autocomplete
          >
        </v-col>
        <v-col cols="4">
          <v-autocomplete
            v-model="alumno.tutor"
            placeholder="Seleccione un tutor"
            :items="tutores"
            return-object
            item-text="nombreCompleto"
            outlined
            dense
          >
            <template slot="append-outer">
              <v-btn icon x-small color="primary"
                ><v-icon>mdi-plus-circle</v-icon></v-btn
              >
            </template></v-autocomplete
          >
        </v-col>
      </v-row>
    </v-form>
    <div class="d-flex justify-end">
      <v-btn
        class="text-none"
        color="primary"
        depressed
        @click="guardarEstudiante"
        >Registrar
        <v-icon right>mdi-text-box-plus</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
  import { db } from '../../../helpers/firebase';

  export default {
    name: 'formularioEstudiante',
    async mounted() {
      await this.getTutores();
      await this.getGrupos();
    },
    data: () => ({
      grupos: [],
      checkbox: true,
      turnos: ['MATUTINO', 'VESPERTINO'],
      tutores: [],
      alumno: {
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        email: '',
        celular: '',
        telefono: '',
        matricula: '',
        grupo: '',
        tutor: '',
      },
    }),
    methods: {
      async guardarEstudiante() {
        try {
          await db
            .collection('estudiantes')
            .doc()
            .set(this.alumno);

          this.$router.push({ name: 'Student' });
        } catch (error) {
          console.log(error);
        }
      },
      async getTutores() {
        try {
          const { docs } = await db.collection('tutores').get();
          this.tutores = docs.map((e) => {
            return {
              nombreCompleto: `${e.data().nombre} ${e.data().apellidoPaterno} ${
                e.data().apellidoMaterno
              }`,
              ...e.data(),
              id: e.id,
            };
          });
        } catch (error) {
          console.warn(error);
        }
      },
      async getGrupos() {
        try {
          const { docs } = await db.collection('grupos').get();
          this.grupos = docs.map((e) => {
            return {
              ...e.data(),
              id: e.id,
            };
          });
        } catch (error) {
          console.warn(error);
        }
      },
    },
  };
</script>

<style lang="scss" scoped></style>
