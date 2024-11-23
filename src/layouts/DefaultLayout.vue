<template>
  <div>
    <Navbar />
    <main class="p-4">
      <HomePage />
    </main>
  </div>
</template>

<script>
import HomePage from '@/pages/HomePage.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'DefaultLayout',
  components: { Navbar, HomePage },
}
</script>
