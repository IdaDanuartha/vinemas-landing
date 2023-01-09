<script setup>
import Navbar from "./components/sections/Navbar.vue";
import Hero from "./components/sections/Hero.vue";
import TrendingMovie from "./components/sections/TrendingMovie.vue";
import TopMovie from "./components/sections/TopMovie.vue";
import NowShowing from "./components/sections/NowShowing.vue";
import ComingSoon from "./components/sections/ComingSoon.vue";
import Cinemas from "./components/sections/Cinemas.vue";
import Footer from "./components/sections/Footer.vue";
</script>

<template>
  <div>
    <Navbar />
    <Hero />
    <main class="container mx-auto">
      <TrendingMovie />
      <TopMovie />
      <NowShowing />
      <ComingSoon />
      <Cinemas />
      <Footer />
    </main>
  </div>
</template>

<style scoped>
</style>
