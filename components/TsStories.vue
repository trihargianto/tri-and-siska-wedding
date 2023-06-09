<template>
  <ts-section class="stories" title="Sedikit Kisah Kami">
    <swiper
      slides-per-view="auto"
      :space-between="30"
      :modules="modules"
      :navigation="true"
    >
      <swiper-slide v-for="story in stories" :key="story.title">
        <img
          :src="story.image"
          :alt="story.title"
          width="280"
          height="280"
          class="stories__image"
        />

        <h3 class="text--body">{{ story.title }}</h3>

        <p class="text--body">{{ story.description }}</p>
      </swiper-slide>
    </swiper>
  </ts-section>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { STORIES } from "~/constants/stories";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      stories: STORIES,
    };
  },

  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>

<style lang="scss">
.stories {
  &__image {
    border-radius: 18px;
  }

  &__title {
    font-weight: 700;
  }

  /** 
   * =================
   * SwiperJS Styling
   * =================
   */
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    width: 280px;
  }
}
</style>
