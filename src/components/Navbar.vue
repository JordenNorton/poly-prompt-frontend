<template>
  <nav class="bg-blue-600 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-xl font-bold">PolyPrompt</h1>
      <ul class="flex space-x-4">
        <li><router-link to="/" class="hover:underline">Home</router-link></li>
        <li><router-link to="/login" class="hover:underline">Login</router-link></li>
        <li><router-link to="/dashboard" class="hover:underline">Dashboard</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
/* Add navbar-specific styles here if needed */
</style>
