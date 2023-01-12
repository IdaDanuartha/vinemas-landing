<script setup>
</script>

<template>
  <section>
    <h1 class="mb-6">Cinemas</h1>
    <div class="grid grid-cols-3">
      <div class="col-span-2 relative">
        <img src="/src/assets/img/cinemas/vinemas_jimbaran.svg" class="rounded-[18px] w-full" alt="">
        <div class="absolute text-white bottom-6 left-6">
          <h4 class="font-montserrat-bold text-[28px]">Vinemas FIlm Jimbaran Area</h4>
        </div>
      </div>
      <div class="ml-3">
        <div class="card">
          <h4 class="font-montserrat-bold text-lg">Vinemas Film Denpasar City</h4>
          <p class="text-[12px]">Jl. Teuku Umar No.1, Kec. Denpasar Bar., Kota Denpasar, Bali 80113</p>
        </div>
        <div class="card active">
          <h4 class="font-montserrat-bold text-lg">Vinemas Film Jimbaran Area</h4>
          <p class="text-[12px]">Jl. Kediri, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361</p>
          <div class="button-group flex mt-8 -ml-2">
            <button class="btn-outline">More Details</button>
            <button class="btn-default">See On Map</button>
          </div>
        </div>
        <div class="card">
          <h4 class="font-montserrat-bold text-lg">Vinemas Film Tabanan City</h4>
          <p class="text-[12px]">Jl. Gelatik, Kec. Tabanan, Kabupaten Tabanan, Bali 82113</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  @apply bg-gradient-to-r from-secondary-color to-main-color rounded-[18px] px-6 py-8 mb-4 text-white;
}

.card.active {
  background: rgb(220,33,31) !important;
}

.card .btn-outline {
  @apply text-white outline outline-1 outline-white py-2 px-4 rounded-full ml-3 text-[12px] transition-all duration-300 hover:bg-white hover:text-main-color;
}

.card .btn-default {
  @apply text-main-color bg-white py-2 px-4 rounded-full ml-3 text-[12px] transition-all duration-300 hover:text-white hover:bg-transparent hover:outline hover:outline-1 hover:outline-white;
}
</style>