<template>
  <div>
    <section class="bg-blue-100 text-center py-20">
      <div class="container mx-auto">
        <h1 class="text-5xl font-bold text-blue-600">Welcome to PolyPrompt</h1>
        <p class="text-gray-700 mt-4 text-lg">
          Your personalized language-learning journey starts here. Build your vocabulary, track your progress, and achieve your goals.
        </p>
        <router-link
          to="/login"
          class="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
/* Optional hero-specific styles */
</style>
