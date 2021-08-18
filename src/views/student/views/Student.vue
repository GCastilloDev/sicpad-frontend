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
  export default {};
</script>

<style></style>
