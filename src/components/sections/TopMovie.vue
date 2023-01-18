<script setup>
</script>

<template>
  <section>
    <h1 class="mb-6">Top Movie This Week</h1>
    <div class="min-[1280px]:flex grid md:grid-cols-2 grid-cols-1 w-full">
      <div class="card-vertical min-[1280px]:w-[75%] w-full">
        <div class="rating">
          <h6 class="text-[12px] font-montserrat-semibold">8.1</h6>
          <span class="font-montserrat-regular text-[8px] mt-[3px]"
            ><span class="mx-0.5">/</span>10</span
          >
          <i
            class="fa-solid fa-star text-[14px] mt-0.5 text-main-color ml-1"
          ></i>
        </div>
        <img
          src="/src/assets/img/top_movie/spiderman.svg"
          class="rounded-[18px] w-full"
          alt=""
        />
        <div class="detail-card">
          <h4>01</h4>
          <h5>Spider-Man : No Way Home</h5>
        </div>
      </div>
      <div class="flex flex-col md:ml-3 md:mt-0 mt-5 w-full">
        <div class="card-horizontal mb-3">
          <div class="rating">
            <h6 class="text-[12px] font-montserrat-semibold">8.1</h6>
            <span class="font-montserrat-regular text-[8px] mt-[3px]"
              ><span class="mx-0.5">/</span>10</span
            >
            <i
              class="fa-solid fa-star text-[14px] mt-0.5 text-main-color ml-1"
            ></i>
          </div>
          <img
            src="/src/assets/img/top_movie/jurassic_world.svg"
            class="rounded-[18px] w-full"
            alt=""
          />
          <div class="detail-card flex">
            <h4>02</h4>
            <h5>Jurassic World Dom...</h5>
          </div>
        </div>
        <div class="card-horizontal">
          <div class="rating">
            <h6 class="text-[12px] font-montserrat-semibold">8.1</h6>
            <span class="font-montserrat-regular text-[8px] mt-[3px]"
              ><span class="mx-0.5">/</span>10</span
            >
            <i
              class="fa-solid fa-star text-[14px] mt-0.5 text-main-color ml-1"
            ></i>
          </div>
          <img
            src="/src/assets/img/top_movie/dr_strange.svg"
            class="rounded-[18px] lg:w-full"
            alt=""
          />
          <div class="detail-card flex">
            <h4>03</h4>
            <h5>Dr. Strange : In the...</h5>
          </div>
        </div>
      </div>
      <div class="flex flex-col min-[1280px]:ml-3 min-[1280px]:mt-0 mt-5 w-full">
        <div class="card-small-horizontal flex">
          <div class="flex items-center">
            <h4
              class="
                font-montserrat-bold
                text-[30px]
                mr-3
                text-white
                border-r-2
                pr-3
                border-main-color
              "
            >
              4
            </h4>
            <div>
              <h4 class="text-[20px] text-white font-montserrat-bold">
                Thor: Love and Thunder
              </h4>
              <p class="text-[12px] text-white">123.456.789 Views</p>
            </div>
          </div>
          <img
            src="/src/assets/img/top_movie/thor.svg"
            class="ml-3 rounded-lg"
            alt=""
          />
        </div>
        <div class="card-small-horizontal flex">
          <div class="flex items-center">
            <h4
              class="
                font-montserrat-bold
                text-[30px]
                mr-3
                text-white
                border-r-2
                pr-3
                border-main-color
              "
            >
              5
            </h4>
            <div>
              <h4 class="text-[20px] text-white font-montserrat-bold">
                Disney’s Mulan
              </h4>
              <p class="text-[12px] text-white">123.456.789 Views</p>
            </div>
          </div>
          <img
            src="/src/assets/img/top_movie/mulan.svg"
            class="ml-3 rounded-lg"
            alt=""
          />
        </div>
        <div class="card-small-horizontal flex">
          <div class="flex items-center">
            <h4
              class="
                font-montserrat-bold
                text-[30px]
                mr-3
                text-white
                border-r-2
                pr-3
                border-main-color
              "
            >
              6
            </h4>
            <div>
              <h4 class="text-[20px] text-white font-montserrat-bold">
                Minions : The Rise of Gru
              </h4>
              <p class="text-[12px] text-white">123.456.789 Views</p>
            </div>
          </div>
          <img
            src="/src/assets/img/top_movie/minions.svg"
            class="ml-3 rounded-lg"
            alt=""
          />
        </div>
        <div class="card-small-horizontal min-[1536px]:flex hidden">
          <div class="flex items-center">
            <h4
              class="
                font-montserrat-bold
                text-[30px]
                mr-3
                text-white
                border-r-2
                pr-3
                border-main-color
              "
            >
              7
            </h4>
            <div>
              <h4 class="text-[20px] text-white font-montserrat-bold">
                Mortal Kombat
              </h4>
              <p class="text-[12px] text-white">123.456.789 Views</p>
            </div>
          </div>
          <img
            src="/src/assets/img/top_movie/mortal_kombat.svg"
            class="ml-3 rounded-lg"
            alt=""
          />
        </div>
        <div class="card-small-horizontal">
          <h2 class="text-[24px] font-montserrat-bold m-[14px] text-white">See All Rank Movie...</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card-vertical .detail-card {
  @apply min-[1280px]:bottom-[14px] bottom-0 !important;
}

.card-vertical,
.card-horizontal {
  @apply relative cursor-pointer;
}

.card-vertical .rating,
.card-horizontal .rating {
  @apply flex absolute top-6 right-4 text-white bg-[#212121]/70 px-2 py-[6px] rounded-lg;
}

.card-horizontal .rating {
  @apply top-4 right-4;
}

.card-vertical .detail-card,
.card-horizontal .detail-card {
  @apply absolute bottom-0 rounded-bl-[18px] rounded-br-[18px] p-[18px] bg-[#212121]/70 w-full;
}

.card-vertical .detail-card h4 {
  @apply font-montserrat-bold text-[42px] text-white -mb-1;
}

.card-vertical .detail-card h4::after {
  content: "";
  @apply w-[43px] h-[2px] -top-1 block relative bg-main-color;
}

.card-vertical .detail-card h5 {
  @apply font-montserrat-bold text-[32px] text-white;
}

.card-horizontal .detail-card {
  @apply absolute bottom-0 rounded-bl-[18px] rounded-br-[18px] p-[18px] bg-[#212121]/70 w-full;
}

.card-horizontal .detail-card h4,
.card-horizontal .detail-card h5 {
  @apply font-montserrat-bold text-[30px] text-white -mb-1;
}

.card-horizontal .detail-card h4 {
  @apply border-r-2 mr-3 pr-3 border-main-color;
}

.card-small-horizontal {
  @apply cursor-pointer justify-between mb-3 w-full items-center px-3 py-3 rounded-[18px] bg-gradient-to-r from-secondary-color to-main-color;
}
</style>