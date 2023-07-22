<template>
  <div class="kindwords">
    <ts-section :title="t('kindWord')" flower-variant="flower-3">
      <div class="kindwords__swiper-wrapper">
        <swiper
          autoplay
          slides-per-view="auto"
          :space-between="20"
          :modules="modules"
          :navigation="{ prevEl: '#prevKindWord', nextEl: '#nextKindWord' }"
        >
          <swiper-slide v-for="word in kindWords" :key="word.key">
            <div class="kindwords__content text--body">
              <p>"{{ word.message }}"</p>

              <p class="text--bold" style="margin-top: 6px">{{ word.name }}</p>
            </div>
          </swiper-slide>
        </swiper>

        <button
          type="button"
          id="prevKindWord"
          class="kindwords__button kindwords__button--prev"
        >
          <client-only>
            <font-awesome-icon icon="fa-solid fa-arrow-left" />
          </client-only>
        </button>
        <button
          type="button"
          id="nextKindWord"
          class="kindwords__button kindwords__button--next"
        >
          <client-only>
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </client-only>
        </button>
      </div>

      <slot />
    </ts-section>
  </div>
</template>

<i18n lang="json">
{
  "id": {
    "kindWord": "Kalimat Baik 😊"
  },
  "en": {
    "kindWord": "Kind Words 😊"
  }
}
</i18n>

<script lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
    FontAwesomeIcon,
  },

  props: {
    kindWords: {
      type: Array,
      required: true,
    },
  },

  setup() {
    const { t } = useI18n();

    return {
      modules: [Navigation],
      t,
    };
  },
};
</script>

<style lang="scss">
.kindwords {
  display: flex;
  flex-direction: column;

  &__content {
    text-align: center;
    padding: 16px 42px;
    background-color: #f7f5f4;
    min-height: 260px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  &__swiper-wrapper {
    position: relative;
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
