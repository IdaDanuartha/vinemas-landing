<script setup>
import { ref } from 'vue'

// let activeNav = ref(false)

// window.addEventListener('scroll', function () {
//   if (window.scrollY > 50) {
//     activeNav.value = true
//   } else {
//     activeNav.value = false
//   }
// })
</script>

<template>
  <nav class="px-2 sm:px-4 py-8 absolute w-full z-[99] top-0 left-0" :class="{ active: activeNav }">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <div class="flex w-full">
        <a href="#" class="flex items-center">
          <img
            src="/src/assets/img/header/logo_vinema.svg"
            class="mr-3"
            alt="Vinemas Logo"
          />
        </a>
        <div class="w-full flex justify-between">
          <ul class="flex nav-left ml-8">
            <li class="nav-item"><a class="nav-link" href="#">MOVIE</a></li>
            <li class="nav-item"><a class="nav-link" href="#">CINEMA</a></li>
            <li class="nav-item"><a class="nav-link" href="#">OFFERS</a></li>
          </ul>
          <ul class="flex ml-8">
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><i class="fa-solid fa-magnifying-glass mr-2"></i>Search Film</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><i class="fa-solid fa-location-dot mr-2"></i>Location<i
                  class="fa-solid fa-chevron-down ml-3 fa-sm"
                ></i
              ></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><i class="fa-regular fa-user mr-2"></i>Sign Up</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav.active {
  background: rgba(33, 33, 33, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.9px);
  -webkit-backdrop-filter: blur(4.9px);
}

.nav-left .nav-item {
  @apply transition-all duration-500;
}

.nav-left .nav-item::after {
  content: "";
  @apply w-0 h-0 transition-all duration-500;
}

.nav-left .nav-item:hover::after {
  content: "";
  @apply w-[40px] h-[3px] rounded bg-main-color/80 block relative top-2 left-5;
}

.nav-link {
  @apply text-white mx-5 text-[20px] relative top-2 font-montserrat-light;
}
</style>