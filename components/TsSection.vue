<template>
  <section
    :class="['section', { 'section--flower-background': isFlowerVisible }]"
  >
    <div class="section__text">
      <h2 class="text--heading-2 section__title">
        {{ title }}
      </h2>

      <div class="section__content">
        <slot />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "TsSection",

  props: {
    title: {
      type: String,
      required: true,
    },

    isFlowerVisible: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  padding: 54px 0 54px 0;

  &--flower-background {
    background-image: url("~/assets/img/flower.png");
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: 16px;
    background-size: 170px;
  }

  &__title {
    margin: 0;
    margin-bottom: 32px;
  }

  &__content {
    position: relative;
    margin-top: 0;
  }
}
</style>
