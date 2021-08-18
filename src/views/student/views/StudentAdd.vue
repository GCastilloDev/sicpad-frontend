<template>
  <v-container>
    <h1 class="text-center mb-5">Registrar alumno</h1>
    <formulario />
  </v-container>
</template>

<script>
  export default {
    components: {
      formulario: () => import('../components/formulario.vue'),
    },
  };
</script>

<style></style>
