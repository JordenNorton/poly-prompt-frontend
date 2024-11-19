<template>
  <DefaultLayout>
    <router-view /> <!-- This renders the current route -->
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "./layouts/DefaultLayout.vue";

export default {
  name: "App",
  components: { DefaultLayout },
};
</script>

<style>
/* Add any global styling here */
</style>
