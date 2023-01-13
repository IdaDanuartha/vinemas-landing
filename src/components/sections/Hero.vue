<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>

<template>
  <swiper
    :slides-per-view="1"
    :navigation="{
      nextEl: '.swiper-next-hero',
      prevEl: '.swiper-prev-hero',
    }"
    :modules="modules"
  >
    <swiper-slide>
      <div class="overlay-1"></div>
      <div class="overlay-2"></div>
      <div class="container description-hero">
        <img src="/src/assets/img/header/logo_thor.svg" alt="" />
        <h1 class="mt-12">Thor : Love and Thunder</h1>
        <h3 class="font-montserrat-medium text-white mt-3 text-sm uppercase">
          Christopher Hemsworth, Christian Bale, Natalie Portman
        </h3>
        <div class="flex text-white my-3">
          <p>1 Hour 59 Minute</p>
          <p>
            <i class="fa-solid fa-circle text-[8px] relative -top-0.5 mx-3"></i>
          </p>
          <p>6 July 2022</p>
          <p>
            <i class="fa-solid fa-circle text-[8px] relative -top-0.5 mx-3"></i>
          </p>
          <p>English</p>
        </div>
        <p class="font-montserrat-light text-white/80">
          "Thor: Love and Thunder" tells Thor on a journey he has never been on <br>
          – the search for inner peace. However, his retirement is interrupted
          by <br> a galactic assassin known as Gorr the Butcher God, who wants to<br>
          exterminate the gods.
        </p>
        <div class="flex mt-12">
          <button class="btn-hero flex mr-3">
            <span>Trailer</span>
            <img src="/src/assets/img/header/trailer_icon.svg" class="mt-1.5 ml-2" alt="">
          </button>
          <button class="btn-hero flex">
            <span>Booking Now!</span>
            <img src="/src/assets/img/header/booking_icon.svg" class="mt-0.5 ml-2" alt="">
          </button>
        </div>
      </div>
      <div class="hero-img">
        <img
          class="w-full hero-img"
          src="/src/assets/img/header/hero_img.svg"
          alt=""
        />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="overlay-1"></div>
      <div class="overlay-2"></div>
      <div class="container description-hero">
        <img src="/src/assets/img/header/logo_thor.svg" alt="" />
        <h1 class="mt-12">Thor : Love and Thunder</h1>
        <h3 class="font-montserrat-medium text-white mt-3 text-sm uppercase">
          Christopher Hemsworth, Christian Bale, Natalie Portman
        </h3>
        <div class="flex text-white my-3">
          <p>1 Hour 59 Minute</p>
          <p>
            <i class="fa-solid fa-circle text-[8px] relative -top-0.5 mx-3"></i>
          </p>
          <p>6 July 2022</p>
          <p>
            <i class="fa-solid fa-circle text-[8px] relative -top-0.5 mx-3"></i>
          </p>
          <p>English</p>
        </div>
        <p class="font-montserrat-light text-white/80">
          "Thor: Love and Thunder" tells Thor on a journey he has never been on <br>
          – the search for inner peace. However, his retirement is interrupted
          by <br> a galactic assassin known as Gorr the Butcher God, who wants to<br>
          exterminate the gods.
        </p>
        <div class="flex mt-12">
          <button class="btn-hero flex mr-3">
            <span>Trailer</span>
            <img src="/src/assets/img/header/trailer_icon.svg" class="mt-1.5 ml-2" alt="">
          </button>
          <button class="btn-hero flex">
            <span>Booking Now!</span>
            <img src="/src/assets/img/header/booking_icon.svg" class="mt-0.5 ml-2" alt="">
          </button>
        </div>
      </div>
      <div class="hero-img">
        <img
          class="w-full hero-img"
          src="/src/assets/img/header/hero_img.svg"
          alt=""
        />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="overlay-1"></div>
      <div class="overlay-2"></div>
      <div class="container description-hero">
        <img src="/src/assets/img/header/logo_thor.svg" alt="" />
        <h1 class="mt-12">Thor : Love and Thunder</h1>
        <h3 class="font-montserrat-medium text-white mt-3 text-sm uppercase">
          Christopher Hemsworth, Christian Bale, Natalie Portman
        </h3>
        <div class="flex text-white my-3">
          <p>1 Hour 59 Minute</p>
          <p>
            <i class="fa-solid fa-circle text-[8px] relative -top-0.5 mx-3"></i>
          </p>
          <p>6 July 2022</p>
          <p>
            <i class="fa-solid fa-circle text-[8px] relative -top-0.5 mx-3"></i>
          </p>
          <p>English</p>
        </div>
        <p class="font-montserrat-light text-white/80">
          "Thor: Love and Thunder" tells Thor on a journey he has never been on <br>
          – the search for inner peace. However, his retirement is interrupted
          by <br> a galactic assassin known as Gorr the Butcher God, who wants to<br>
          exterminate the gods.
        </p>
        <div class="flex mt-12">
          <button class="btn-hero flex mr-3">
            <span>Trailer</span>
            <img src="/src/assets/img/header/trailer_icon.svg" class="mt-1.5 ml-2" alt="">
          </button>
          <button class="btn-hero flex">
            <span>Booking Now!</span>
            <img src="/src/assets/img/header/booking_icon.svg" class="mt-0.5 ml-2" alt="">
          </button>
        </div>
      </div>
      <div class="hero-img">
        <img
          class="w-full hero-img"
          src="/src/assets/img/header/hero_img.svg"
          alt=""
        />
      </div>
    </swiper-slide>
    <div class="swiper-next-hero right-[145px] mt-[400px]">
      <i class="fa-solid fa-chevron-right"></i>
    </div>
    <div class="swiper-prev-hero right-[200px] top-12 mt-[400px]">
      <i class="fa-solid fa-chevron-left"></i>
    </div>
  </swiper>
</template>

<style scoped>
.swiper {
  @apply h-[916px] relative;
}

.swiper-next-hero,
.swiper-prev-hero {
  @apply hover:bg-main-color hover:text-white cursor-pointer transition-all flex w-9 h-9 rounded-full absolute -translate-y-1/2 top-1/2 border-2 border-main-color text-main-color z-10 items-center justify-center;
}

/* .swiper-next-hero.swiper-button-disabled {
  @apply bg-main-color text-white;
} */

.overlay-1 {
  @apply w-full h-full absolute bg-gradient-to-r from-black to-transparent;
}

.overlay-2 {
  @apply w-full h-1/2 bottom-0 absolute bg-gradient-to-t from-black to-transparent;
}

.description-hero {
  @apply absolute top-56 left-40;
}

.btn-hero {
  @apply bg-main-color text-white px-8 py-3 rounded-full hover:opacity-80 transition-all duration-300 focus:outline focus:outline-4 focus:outline-main-color/50;
}
</style>