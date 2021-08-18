<template>
  <v-container>
    <h1 class="text-center mb-5">Registar al tutor legal</h1>
    <v-card class="pa-3 ">
      <v-form>
        <v-row>
          <v-col cols="12"><h2>Datos personales</h2></v-col>
          <v-col cols="4">
            <v-text-field
              v-model="tutor.nombre"
              label="Nombre(s)"
              placeholder="Ingrese el nombre"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="tutor.apellidoPaterno"
              label="Apellido paterno"
              placeholder="Ingrese el apellido paterno"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="tutor.apellidoMaterno"
              label="Apellido materno"
              placeholder="Ingrese el apellido materno"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="3">
            <v-text-field
              v-model="tutor.email"
              label="Email"
              placeholder="Ingrese el email"
              type="email"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="3">
            <v-text-field
              v-model="tutor.celular"
              label="Celular"
              placeholder="Ingrese el número de celular"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="3">
            <v-text-field
              v-model="tutor.telefono"
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
          <v-col cols="12"><h2>Datos del domicilio</h2></v-col>
          <v-col cols="4">
            <v-text-field
              v-model="tutor.codigoPostal"
              label="Código Postal"
              placeholder="Ingrese el código postal"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="tutor.estado"
              label="Estado"
              placeholder="Ingrese el estado"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="tutor.municipio"
              label="Municipio"
              placeholder="Ingrese el municipio"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="tutor.colonia"
              label="Colonia"
              placeholder="Ingrese la colonia"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="tutor.calle"
              label="Calle"
              placeholder="Ingrese la calle"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field
              v-model="tutor.numeroExterior"
              label="Número exterior"
              placeholder="Ingrese el número exterior"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field
              v-model="tutor.numeroInterior"
              label="Número interior"
              placeholder="Ingrese el número interior"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
      <div class="d-flex justify-end">
        <v-btn
          class="text-none"
          color="primary"
          depressed
          @click="registrarTutor"
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
      checkbox: true,
      tutor: {
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        email: '',
        celular: '',
        telefono: '',
        codigoPostal: '',
        estado: '',
        municipio: '',
        colonia: '',
        calle: '',
        numeroExterior: '',
        numeroInterior: '',
      },
    }),
    methods: {
      async registrarTutor() {
        try {
          await db
            .collection('tutores')
            .doc()
            .set(this.tutor);

          this.$router.push({ name: 'FamilyGuy' });
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
</script>

<style></style>
