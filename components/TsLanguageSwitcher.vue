<template>
  <div class="langswitch">
    <select class="langswitch__select" v-model="selectedLocale">
      <option value="id">ID</option>
      <option value="en">EN</option>
    </select>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    const switchLocalePath = useSwitchLocalePath();

    return {
      switchLocalePath,
    };
  },

  computed: {
    selectedLocale: {
      set(locale: string) {
        this.$router.push(this.switchLocalePath(locale));
      },
      get() {
        return this.$i18n.locale;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.langswitch {
  &__select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 10px;
    border-radius: 12px;
    border: 1px solid #e8edf1;
    position: absolute;
    right: 16px;
    top: 16px;
    margin: 0;
    font-size: 1rem;
    text-align: center;
  }
}
</style>
