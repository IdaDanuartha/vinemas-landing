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
    <h1 class="mb-6">Coming Soon</h1>
    <swiper
      :slides-per-view="4"
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
      }"
    >
      <swiper-slide>
        <a href="#">
          <img
            class="rounded-tr-[18px] rounded-tl-[18px] w-full"
            src="/src/assets/img/coming_soon/black_adam.svg"
            alt=""
          />
        </a>
        <div class="detail-card">
          <div class="flex justify-between">
            <h6>Black Adam 2022</h6>
            <i class="fa-regular fa-heart text-white cursor-pointer"></i>
            <!-- <i class="fa-solid fa-heart text-red-500 cursor-pointer d-none"></i> -->
          </div>
          <p>Available on July 2022</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <a href="#">
          <img
            class="rounded-tr-[18px] rounded-tl-[18px] w-full"
            src="/src/assets/img/coming_soon/john_wick4.svg"
            alt=""
          />
        </a>
        <div class="detail-card">
          <div class="flex justify-between">
            <h6>John Wick Chapter 4</h6>
            <i class="fa-regular fa-heart text-white cursor-pointer"></i>
            <!-- <i class="fa-solid fa-heart text-red-500 cursor-pointer d-none"></i> -->
          </div>
          <p>Available on May 2022</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <a href="#">
          <img
            class="rounded-tr-[18px] rounded-tl-[18px] w-full"
            src="/src/assets/img/coming_soon/the_batman.svg"
            alt=""
          />
        </a>
        <div class="detail-card">
          <div class="flex justify-between">
            <h6>The Batman 2022</h6>
            <i class="fa-regular fa-heart text-white cursor-pointer"></i>
            <!-- <i class="fa-solid fa-heart text-red-500 cursor-pointer d-none"></i> -->
          </div>
          <p>Available on April 2022</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <a href="#">
          <img
            class="rounded-tr-[18px] rounded-tl-[18px] w-full"
            src="/src/assets/img/coming_soon/morbius.svg"
            alt=""
          />
        </a>
        <div class="detail-card">
          <div class="flex justify-between">
            <h6>Morbius 2022</h6>
            <i class="fa-regular fa-heart text-white cursor-pointer"></i>
            <!-- <i class="fa-solid fa-heart text-red-500 cursor-pointer d-none"></i> -->
          </div>
          <p>Available on July 2022</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <a href="#">
          <img
            class="rounded-tr-[18px] rounded-tl-[18px] w-full"
            src="/src/assets/img/coming_soon/black_adam.svg"
            alt=""
          />
        </a>
        <div class="detail-card">
          <div class="flex justify-between">
            <h6>Black Adam 2022</h6>
            <i class="fa-regular fa-heart text-white cursor-pointer"></i>
            <!-- <i class="fa-solid fa-heart text-red-500 cursor-pointer d-none"></i> -->
          </div>
          <p>Available on July 2022</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <a href="#">
          <img
            class="rounded-tr-[18px] rounded-tl-[18px] w-full"
            src="/src/assets/img/coming_soon/john_wick4.svg"
            alt=""
          />
        </a>
        <div class="detail-card">
          <div class="flex justify-between">
            <h6>John Wick Chapter 4</h6>
            <i class="fa-regular fa-heart text-white cursor-pointer"></i>
            <!-- <i class="fa-solid fa-heart text-red-500 cursor-pointer d-none"></i> -->
          </div>
          <p>Available on May 2022</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <a href="#">
          <img
            class="rounded-tr-[18px] rounded-tl-[18px] w-full"
            src="/src/assets/img/coming_soon/the_batman.svg"
            alt=""
          />
        </a>
        <div class="detail-card">
          <div class="flex justify-between">
            <h6>The Batman 2022</h6>
            <i class="fa-regular fa-heart text-white cursor-pointer"></i>
            <!-- <i class="fa-solid fa-heart text-red-500 cursor-pointer d-none"></i> -->
          </div>
          <p>Available on April 2022</p>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<style scoped>
.swiper {
  @apply h-[290px];
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
  @apply my-5 mx-6;
}

.swiper-slide h6 {
  @apply text-white text-[14px] font-montserrat-bold mb-3;
}

.swiper-slide p {
  @apply text-white text-[10px] font-montserrat-regular;
}

.swiper-slide .btn-book-now {
  @apply bg-main-color py-2 px-4 rounded-full text-white text-[12px] mt-3 font-montserrat-regular transition-all duration-300 hover:opacity-80 focus:outline-4 focus:outline-main-color/50 focus:outline;
}
</style>