<template>
  <section
    :class="[
      'section',
      {
        'section--flower-1': flowerVariant === 'flower-1',
        'section--flower-2': flowerVariant === 'flower-2',
        'section--flower-3': flowerVariant === 'flower-3',
        'section--flower-4': flowerVariant === 'flower-4',
      },
    ]"
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

    flowerVariant: {
      type: String,
      validator: (value: string) => {
        return ["flower-1", "flower-2", "flower-3", "flower-4"].includes(value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  margin: 32px 0;
  padding: var(--container-padding);

  &--flower-1 {
    background-image: url("~/assets/img/flower-1.png");
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: 16px;
    background-size: 112px;
  }

  &--flower-2 {
    background-image: url("~/assets/img/flower-2.png");
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: 16px;
    background-size: 64px;
  }

  &--flower-3 {
    background-image: url("~/assets/img/flower-3.png");
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: 16px;
    background-size: 112px;
  }

  &--flower-4 {
    background-image: url("~/assets/img/flower-4.png");
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
