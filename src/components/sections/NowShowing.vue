<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<span class="card-swiper-pagination-bullet ' +
            className +
            '"></span>'
          );
        },
      },
      modules: [Pagination],
    };
  },
};
</script>

<template>
  <section>
    <h1 class="mb-6">Now Showing</h1>
    <swiper
      :slides-per-view="5"
      :space-between="12"
      :pagination="pagination"
      :modules="modules"
      :breakpoints="{
        '0': {
          slidesPerView: 1,
        },
        '400': {
          slidesPerView: 2,
        },
        '768': {
          slidesPerView: 3,
        },
        '1024': {
          slidesPerView: 4,
        },
        '1440': {
          slidesPerView: 5,
        },
      }"
    >
      <swiper-slide>
        <a href="#">
          <img
            class="image rounded-tr-[18px] rounded-tl-[18px] w-full"
            src="/src/assets/img/now_showing/shang_chi.svg"
            alt=""
          />
        </a>
        <div class="detail-card">
          <h6>Shanchi and the Legend of the Ten rings</h6>
          <p>1 hour 33 min - English Sub - 18+</p>
          <button class="btn-book-now">Book Now!</button>
        </div>
      </swiper-slide>
      <swiper-slide>
        <a href="#">
          <img
            class="image rounded-tr-[18px] rounded-tl-[18px] w-full"
            src="/src/assets/img/now_showing/john_wick3.svg"
            alt=""
          />
        </a>
        <div class="detail-card">
          <h6>Jhon Wick Chapter 3 : Parrabellum</h6>
          <p>1 hour 33 min - English Sub - 18+</p>
          <button class="btn-book-now">Book Now!</button>
        </div></swiper-slide
      >
      <swiper-slide>
        <a href="#">
          <img
            class="image rounded-tr-[18px] rounded-tl-[18px] w-full"
            src="/src/assets/img/now_showing/dr_strange.svg"
            alt=""
          />
        </a>
        <div class="detail-card">
          <h6>Dr. Strange : in the Multiverse of Madness</h6>
          <p>1 hour 33 min - English Sub - 18+</p>
          <button class="btn-book-now">Book Now!</button>
        </div></swiper-slide
      >
      <swiper-slide>
        <a href="#">
          <img
            class="image rounded-tr-[18px] rounded-tl-[18px] w-full"
            src="/src/assets/img/now_showing/jurassic_world.svg"
            alt=""
          />
        </a>
        <div class="detail-card">
          <h6>Jurassic World : Dominion</h6>
          <p>1 hour 33 min - English Sub - 18+</p>
          <button class="btn-book-now">Book Now!</button>
        </div>
      </swiper-slide>
      <swiper-slide>
        <a href="#">
          <img
            class="image rounded-tr-[18px] rounded-tl-[18px] w-full"
            src="/src/assets/img/now_showing/spiderman.svg"
            alt=""
          />
        </a>
        <div class="detail-card">
          <h6>Spider-Man : No Way Home</h6>
          <p>1 hour 33 min - English Sub - 18+</p>
          <button class="btn-book-now">Book Now!</button>
        </div></swiper-slide
      >
      <swiper-slide>
        <a href="#">
          <img
            class="image rounded-tr-[18px] rounded-tl-[18px] w-full"
            src="/src/assets/img/now_showing/shang_chi.svg"
            alt=""
          />
        </a>
        <div class="detail-card">
          <h6>Shanchi and the Legend of the Ten rings</h6>
          <p>1 hour 33 min - English Sub - 18+</p>
          <button class="btn-book-now">Book Now!</button>
        </div></swiper-slide
      >
      <swiper-slide>
        <a href="#">
          <img
            class="image rounded-tr-[18px] rounded-tl-[18px] w-full"
            src="/src/assets/img/now_showing/john_wick3.svg"
            alt=""
          />
        </a>
        <div class="detail-card">
          <h6>Jhon Wick Chapter 3 : Parrabellum</h6>
          <p>1 hour 33 min - English Sub - 18+</p>
          <button class="btn-book-now">Book Now!</button>
        </div></swiper-slide
      >
      <swiper-slide>
        <a href="#">
          <img
            class="image rounded-tr-[18px] rounded-tl-[18px] w-full"
            src="/src/assets/img/now_showing/dr_strange.svg"
            alt=""
          />
        </a>
        <div class="detail-card">
          <h6>Dr. Strange : in the Multiverse of Madness</h6>
          <p>1 hour 33 min - English Sub - 18+</p>
          <button class="btn-book-now">Book Now!</button>
        </div></swiper-slide
      >
    </swiper>
  </section>
</template>

<style scoped>
.swiper {
  @apply h-[570px];
}
.swiper .swiper-slide {
  @apply relative;
  height: calc(100% - 15px);
}

.swiper-slide {
  @apply rounded-[18px];
  background: linear-gradient(to bottom, rgb(79, 79, 79), rgb(33, 33, 33));
}

.swiper-slide .detail-card {
  @apply my-5 mx-6 text-center;
}

.swiper-slide h6 {
  @apply text-white text-[12px] font-montserrat-bold mb-3;
}

.swiper-slide p {
  @apply text-white text-[10px] font-montserrat-medium;
}

.swiper-slide .btn-book-now {
  @apply bg-main-color py-2 px-4 rounded-full text-white text-[12px] mt-3 font-montserrat-regular transition-all duration-300 hover:opacity-80 focus:outline-4 focus:outline-main-color/50 focus:outline;
}
</style>