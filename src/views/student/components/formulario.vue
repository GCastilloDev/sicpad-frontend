<template>
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
        <v-col cols="12"><h2>Datos escolares</h2></v-col>
        <v-col cols="3">
          <v-text-field
            label="Matrícula"
            placeholder="Ingrese la matrícula"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-combobox
            placeholder="Seleccione un turno"
            :items="turnos"
            outlined
            dense
          >
          </v-combobox>
        </v-col>
        <v-col cols="3">
          <v-combobox placeholder="Seleccione un grupo" outlined dense
            ><template slot="append-outer">
              <v-btn icon x-small color="primary"
                ><v-icon>mdi-plus-circle</v-icon></v-btn
              >
            </template></v-combobox
          >
        </v-col>
        <v-col cols="3">
          <v-combobox placeholder="Seleccione un tutor" outlined dense
            ><template slot="append-outer">
              <v-btn icon x-small color="primary"
                ><v-icon>mdi-plus-circle</v-icon></v-btn
              >
            </template></v-combobox
          >
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
</template>

<script>
  export default {
    name: 'formularioEstudiante',
    data: () => ({
      prueba: '',
      checkbox: true,
      turnos: ['MATUTINO', 'VESPERTINO'],
    }),
  };
</script>

<style lang="scss" scoped></style>
