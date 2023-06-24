<template>
  <div class="langswitch">
    <select
      class="langswitch__select"
      :value="currentLocale"
      @input="switchLanguage"
    >
      <option value="en">EN</option>
      <option value="id">ID</option>
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
    currentLocale() {
      return this.$i18n.locale;
    },
  },

  methods: {
    switchLanguage(event: Event) {
      const target = event.target as HTMLSelectElement;
      const locale = target.value;

      this.$router.push(this.switchLocalePath(locale));
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
