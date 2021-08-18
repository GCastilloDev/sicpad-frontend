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
        <v-col cols="3">
          <v-text-field
            v-model="alumno.matricula"
            label="Matrícula"
            placeholder="Ingrese la matrícula"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-autocomplete
            v-model="alumno.turno"
            placeholder="Seleccione un turno"
            :items="turnos"
            outlined
            dense
          >
          </v-autocomplete>
        </v-col>
        <v-col cols="3">
          <v-autocomplete placeholder="Seleccione un grupo" outlined dense
            ><template slot="append-outer">
              <v-btn icon x-small color="primary"
                ><v-icon>mdi-plus-circle</v-icon></v-btn
              >
            </template></v-autocomplete
          >
        </v-col>
        <v-col cols="3">
          <v-autocomplete placeholder="Seleccione un tutor" outlined dense
            ><template slot="append-outer">
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
    data: () => ({
      prueba: '',
      checkbox: true,
      turnos: ['MATUTINO', 'VESPERTINO'],
      alumno: {
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        email: '',
        celular: '',
        telefono: '',
        matricula: '',
        turno: '',
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
    },
  };
</script>

<style lang="scss" scoped></style>
