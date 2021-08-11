<template>
  <v-container>
    <h1 class="text-center mb-5">Registar al tutor legal</h1>
    <v-card class="pa-3 ">
      <v-form>
        <v-row>
          <v-col cols="12"><h2>Datos personales</h2></v-col>
          <v-col cols="4">
            <v-text-field
              label="Nombre(s)"
              placeholder="Ingrese el nombre"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Apellido paterno"
              placeholder="Ingrese el apellido paterno"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Apellido materno"
              placeholder="Ingrese el apellido materno"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="3">
            <v-text-field
              label="Email"
              placeholder="Ingrese el email"
              type="email"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="3">
            <v-text-field
              label="Celular"
              placeholder="Ingrese el número de celular"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="3">
            <v-text-field
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
              label="Código Postal"
              placeholder="Ingrese el código postal"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Estado"
              placeholder="Ingrese el estado"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Municipio"
              placeholder="Ingrese el municipio"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Colonia"
              placeholder="Ingrese la colonia"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Calle"
              placeholder="Ingrese la calle"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field
              label="Número exterior"
              placeholder="Ingrese el número exterior"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field
              label="Número interior"
              placeholder="Ingrese el número interior"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
      <v-card-action class="d-flex justify-end">
        <v-btn class="text-none" color="primary" depressed
          >Registrar
          <v-icon right>mdi-text-box-plus</v-icon>
        </v-btn>
      </v-card-action>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      checkbox: true,
    }),
  };
</script>

<style></style>
