<template>
  <ts-section
    class="stories"
    title="Sedikit Kisah Kami"
    :is-flower-visible="false"
  >
    <swiper
      slides-per-view="auto"
      :space-between="30"
      :modules="modules"
      :navigation="{ prevEl: '#prevStory', nextEl: '#nextStory' }"
    >
      <swiper-slide
        v-for="story in stories"
        :key="story.title"
        style="margin-right: 30px"
      >
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

    <button
      type="button"
      id="prevStory"
      class="stories__button stories__button--prev"
    >
      <client-only>
        <font-awesome-icon icon="fa-solid fa-chevron-left" />
      </client-only>
    </button>
    <button
      type="button"
      id="nextStory"
      class="stories__button stories__button--next"
    >
      <client-only>
        <font-awesome-icon icon="fa-solid fa-chevron-right" />
      </client-only>
    </button>
  </ts-section>
</template>

<script lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { STORIES } from "~/constants/stories";

export default {
  components: {
    Swiper,
    SwiperSlide,
    FontAwesomeIcon,
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

  &__button {
    display: inline-flex;
    width: 48px;
    height: 48px;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    background-color: white;
    color: black;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: absolute;
    margin: auto;
    top: -84px;
    bottom: 0;
    z-index: 2;

    &--prev {
      left: -12px;
    }

    &--next {
      right: -12px;
    }
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

  .swiper-button-disabled {
    display: none;
  }

  .swiper-slide {
    width: 280px;
  }
}
</style>
