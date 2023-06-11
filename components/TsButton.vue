<template>
  <button
    v-bind="$attrs"
    :class="['button', { 'button--primary': variant === 'primary' }]"
    type="button"
  >
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  props: {
    variant: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  border: 0;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;

  &--primary {
    background-color: var(--color-primary);
  }
}
</style>
