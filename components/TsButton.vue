<template>
  <button
    v-bind="$attrs"
    :class="[
      'button',
      {
        'button--primary': variant === 'primary',
        'button--full-width': isFullWidth,
        'button--disabled': disabled,
      },
    ]"
    :disabled="disabled"
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

    disabled: {
      type: Boolean,
      default: false,
    },

    isFullWidth: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  border: 0;
  border-radius: 8px;
  padding: 14px 20px;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  color: #242424;

  &--primary {
    background-color: var(--color-primary);
  }

  &--full-width {
    width: 100%;
  }

  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
