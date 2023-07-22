<template>
  <ts-section class="gift" :title="t('giftTitle')" flower-variant="flower-1">
    <div class="gift__description">{{ t("giftDescription") }}</div>

    <div class="gift__address">
      <div class="gift__address__name">Tri Hargianto</div>
      <div class="gift__address__address">
        Nitikan Timur, RT 06/11, Kec. Semanu (Rumah barat Bank Arum Mandiri
        Melati), Gunungkidul, D.I.Yogyakarta, 55892
      </div>
      <div class="gift__address__phone">087839446204</div>
    </div>
  </ts-section>
</template>

<i18n lang="json">
{
  "id": {
    "giftTitle": "Hadiah Pernikahan 🎁",
    "giftDescription": "Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi kado adalah ungkapan tanda kasih Anda, Anda dapat mengirimkan kado anda ke alamat berikut:"
  },
  "en": {
    "giftTitle": "Wedding Gift 🎁",
    "giftDescription": "Your blessing is a gift that means a lot to us. And if giving a gift is an expression of your love, you can send your gift to the following address:"
  }
}
</i18n>

<script lang="ts">
import "swiper/css";
import "swiper/css/navigation";

export default {
  setup() {
    const { t } = useI18n();

    return { t };
  },
};
</script>

<style lang="scss">
.gift {
  position: relative;

  &__address {
    border-radius: 16px;
    margin-top: 16px;
    padding: 24px;
    border: 1px solid #e2e8f0;

    &__name {
      font-weight: bold;
    }

    &__address {
      margin-top: 4px;
    }

    &__phone {
      color: #718096;
      margin-top: 4px;
    }
  }
}
</style>
