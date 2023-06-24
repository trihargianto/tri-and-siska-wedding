<template>
  <div class="footer text--align-center">
    <h2 class="text--heading-2">{{ t("thankYou") }}</h2>

    <p class="text--body" style="color: #fff9e4">{{ t("gratefulWords") }}</p>

    <br />

    <p class="text--body" style="color: #ffd966">
      {{ t("madeWithLove") }}
    </p>
  </div>
</template>

<i18n lang="json">
{
  "id": {
    "thankYou": "Terima Kasih",
    "gratefulWords": "Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.",
    "madeWithLove": "Situs ini dibuat dengan ❤️"
  },
  "en": {
    "thankYou": "Thank You",
    "gratefulWords": "It is an honor and joy for us, if you would kindly attend and give your blessings. We thank you for your presence and prayers.",
    "madeWithLove": "This site was made with ❤️"
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
.footer {
  background: #242424;
  padding: 64px 24px;
  color: #fff;
}
</style>
