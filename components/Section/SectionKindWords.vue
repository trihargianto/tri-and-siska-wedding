<template>
  <div class="kindwords">
    <ts-section title="Kalimat Baik" flower-variant="flower-3">
      <swiper
        autoplay
        slides-per-view="auto"
        :space-between="20"
        :modules="modules"
        :navigation="{ prevEl: '#prevStory', nextEl: '#nextStory' }"
      >
        <swiper-slide v-for="word in kindWords" :key="word.key">
          <div class="kindwords__content text--body">
            <p>"{{ word.description }}"</p>

            <p class="text--bold" style="margin-top: 6px">{{ word.name }}</p>
          </div>
        </swiper-slide>
      </swiper>

      <button
        type="button"
        id="prevStory"
        class="kindwords__button kindwords__button--prev"
      >
        <client-only>
          <font-awesome-icon icon="fa-solid fa-arrow-left" />
        </client-only>
      </button>
      <button
        type="button"
        id="nextStory"
        class="kindwords__button kindwords__button--next"
      >
        <client-only>
          <font-awesome-icon icon="fa-solid fa-arrow-right" />
        </client-only>
      </button>
    </ts-section>
  </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import { KIND_WORDS } from "~/constants/kindWords";

export default {
  components: {
    Swiper,
    SwiperSlide,
    FontAwesomeIcon,
  },

  data() {
    return {
      kindWords: KIND_WORDS,
    };
  },

  setup() {
    return {
      modules: [Navigation],
    };
  },

  methods: {
    getImageUrl(imagePath: string) {
      return new URL(imagePath, import.meta.url).href;
    },
  },
};
</script>

<style lang="scss">
.kindwords {
  display: flex;
  flex-direction: column;

  &__content {
    text-align: center;
    padding: 16px 38px;
    background-color: #f7f5f4;
    min-height: 260px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  &__button {
    display: inline-flex;
    width: 38px;
    height: 38px;
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
    top: -60px;
    bottom: 0;
    z-index: 2;

    &--prev {
      left: -14px;
    }

    &--next {
      right: -14px;
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
}
</style>
