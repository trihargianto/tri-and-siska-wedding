<template>
  <div class="alert">
    <div class="alert__content">
      <p class="alert__title text--heading-3">{{ title }}</p>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: "Alert",
    },
  },
};
</script>

<style lang="scss" scoped>
.alert {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 70%);
  z-index: 2;
  display: flex;
  align-content: center;
  justify-content: center;

  &__content {
    background-color: #fff;
    border: 1px solid #e2e0df;
    border-radius: 16px;
    padding: 16px 24px;
    margin: auto;
    width: 80%;
    padding: 32px;
  }

  &__title {
    margin-top: 0;
    margin-bottom: 16px;
  }

  &__close {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }
}
</style>
