<template>
  <v-row class="login justify-center align-center pb-5">
    <v-col cols="5">
      <v-card>
        <v-card-title class="font-weight-bold"> Inicio de sesión </v-card-title>
        <v-card-text class="pb-0">
          <v-form>
            <v-text-field
              label="Correo"
              placeholder="Favor de ingresar su correo electrónico"
              type="email"
              append-icon="mdi-email"
              dense
              outlined
            ></v-text-field
            ><v-text-field
              label="Contraseña"
              placeholder="Favor de ingresar su contraseña"
              type="password"
              append-icon="mdi-shield-lock"
              dense
              outlined
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="d-block px-5">
          <v-btn class="mb-3" color="primary" block depressed>Ingresar</v-btn>
          <p class="ma-0 text-center text-overline">¿Olvidaste tu contraseña? Da click <a href="#">aquí</a></p>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.login {
  min-height: 100%;
}
</style>