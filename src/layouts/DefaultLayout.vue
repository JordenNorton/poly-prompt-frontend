<template>
  <div>
    <Navbar />
    <main class="p-4">
      <HomePage />
    </main>
    <Footer />
  </div>
</template>

<script>



import HomePage from '@/pages/HomePage.vue'

export default {
  name: "DefaultLayout",
  components: { HomePage },
};
</script>
