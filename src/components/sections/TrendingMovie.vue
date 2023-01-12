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
    <h1 class="mb-6">Trending Movie</h1>
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
            class="image rounded-[18px] w-full"
            src="/src/assets/img/trending_movie/mulan.svg"
            alt=""
          />
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="#">
          <img
            class="image rounded-[18px] w-full"
            src="/src/assets/img/trending_movie/doctor_strange.svg"
            alt="" /></a
      ></swiper-slide>
      <swiper-slide>
        <a href="#">
          <img
            class="image rounded-[18px] w-full"
            src="/src/assets/img/trending_movie/turning_red.svg"
            alt="" /></a
      ></swiper-slide>
      <swiper-slide>
        <a href="#">
          <img
            class="image rounded-[18px] w-full"
            src="/src/assets/img/trending_movie/jurassic_world.svg"
            alt=""
        /></a>
      </swiper-slide>
      <swiper-slide>
        <a href="#">
          <img
            class="image rounded-[18px] w-full"
            src="/src/assets/img/trending_movie/thor.svg"
            alt="" /></a
      ></swiper-slide>
      <swiper-slide>
        <a href="#">
          <img
            class="image rounded-[18px] w-full"
            src="/src/assets/img/trending_movie/mulan.svg"
            alt="" /></a
      ></swiper-slide>
      <swiper-slide>
        <a href="#">
          <img
            class="image rounded-[18px] w-full"
            src="/src/assets/img/trending_movie/doctor_strange.svg"
            alt="" /></a
      ></swiper-slide>
      <swiper-slide>
        <a href="#">
          <img
            class="image rounded-[18px] w-full"
            src="/src/assets/img/trending_movie/turning_red.svg"
            alt="" /></a
      ></swiper-slide>
    </swiper>
  </section>
</template>

<style scoped>
.swiper .swiper-slide {
  @apply relative -top-5 pt-5;
}
</style>