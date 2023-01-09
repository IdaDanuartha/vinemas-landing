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
      modules: [Pagination],
    };
  },
};
</script>

<template>
  <section>
    <h1 class="mb-6">Trending Movie</h1>
    <swiper
      :slides-per-view="5"
      :space-between="12"
      :pagination="{
        el: 'pagination-wrapper',
        clickable: true,
        dinamicBullets: true,
      }"
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
        <img
          class="rounded-[18px] w-full"
          src="/src/assets/img/trending_movie/mulan.svg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide
        ><img
          class="rounded-[18px] w-full"
          src="/src/assets/img/trending_movie/doctor_strange.svg"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="rounded-[18px] w-full"
          src="/src/assets/img/trending_movie/turning_red.svg"
          alt=""
      /></swiper-slide>
      <swiper-slide>
        <img
          class="rounded-[18px] w-full"
          src="/src/assets/img/trending_movie/jurassic_world.svg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide
        ><img
          class="rounded-[18px] w-full"
          src="/src/assets/img/trending_movie/thor.svg"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="rounded-[18px] w-full"
          src="/src/assets/img/trending_movie/mulan.svg"
          alt=""
      /></swiper-slide>
    </swiper>
    <div class="pagination-wrapper">
      <div class="swiper-pagination"></div>
    </div>
  </section>
</template>

<style scoped>
</style>