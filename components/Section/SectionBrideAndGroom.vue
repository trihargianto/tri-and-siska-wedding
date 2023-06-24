<template>
  <div class="bridegroom">
    <div class="bridegroom__head">
      <div class="window-button window-button--close"></div>
      <div class="window-button window-button--minimize"></div>
      <div class="window-button window-button--maximize"></div>
    </div>

    <div class="bridegroom__content">
      <ts-language-switcher />

      <picture>
        <source
          type="image/webp"
          srcset="~/assets/img/bride-and-groom-2.webp"
        />
        <img
          src="~/assets/img/bride-and-groom-2.png"
          alt="Bride and Groom"
          width="320"
          height="320"
          class="bridegroom__img"
        />
      </picture>

      <h1 class="bridegroom__heading">
        Tri <span class="bridegroom__ampersand">&</span> Siska
      </h1>

      <p class="text--body">{{ t("areMarried") }}</p>
    </div>
  </div>
</template>

<i18n lang="json">
{
  "id": {
    "areMarried": "Melaksanakan Pernikahan"
  },
  "en": {
    "areMarried": "Are Getting Married"
  }
}
</i18n>

<script lang="ts">
export default {
  setup() {
    const { t } = useI18n();

    return { t };
  },
};
</script>

<style lang="scss" scoped>
.bridegroom {
  margin: 16px;

  &__head {
    display: flex;
    justify-content: flex-start;
    padding: 10px;
    background-color: #f0eeed;
    border-radius: 16px 16px 0px 0px;
  }

  &__content {
    position: relative;
    border: 1px solid #f0eeed;
    border-radius: 0px 0px 16px 16px;
    text-align: center;
    padding: 16px;
  }

  &__img {
    margin: 32px 0 0 0;
    display: inline;
  }

  &__heading {
    margin-top: 22px;
    margin-bottom: 0;
    font-size: 40px;
    line-height: 48px;
    font-weight: 500;
  }

  &__ampersand {
    color: #ffe389;
  }
}

.window-button {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  height: 12px;
  width: 12px;
  margin: 0 5px;
  display: inline-block;

  &--close {
    background-color: #ff5f57;
  }

  &--minimize {
    background-color: #ffbd2e;
  }

  &--maximize {
    background-color: #28ca41;
  }
}
</style>
