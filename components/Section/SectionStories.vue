<template>
  <ts-section
    class="stories"
    :title="t('storyTitle')"
    :is-flower-visible="false"
  >
    <swiper
      slides-per-view="auto"
      :space-between="20"
      :modules="modules"
      :navigation="{ prevEl: '#prevStory', nextEl: '#nextStory' }"
    >
      <swiper-slide v-for="story in stories" :key="story.title">
        <div class="stories__emoji">{{ story.emoji }}</div>

        <img
          :src="story.image"
          :alt="story.title(selectedLocale)"
          width="280"
          height="280"
          class="stories__image"
        />

        <h3 class="text--body">{{ story.title(selectedLocale) }}</h3>

        <p class="text--body">{{ story.description(selectedLocale) }}</p>
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

<i18n lang="json">
{
  "id": {
    "storyTitle": "Sedikit Kisah Kami"
  },
  "en": {
    "storyTitle": "Our Story"
  }
}
</i18n>

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
    const switchLocalePath = useSwitchLocalePath();
    const { t } = useI18n();

    return {
      modules: [Navigation],
      switchLocalePath,
      t,
    };
  },

  computed: {
    selectedLocale() {
      return this.$i18n.locale;
    },
  },
};
</script>

<style lang="scss">
.stories {
  position: relative;

  &__image {
    border-radius: 18px;
  }

  &__emoji {
    position: absolute;
    top: 12px;
    left: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    background: #fff;
    border-radius: 50%;
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
      left: -16px;
    }

    &--next {
      right: -16px;
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
