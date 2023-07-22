<template>
  <div class="location">
    <h3 class="text--heading-3">{{ t("location") }}</h3>

    <div class="location__content">
      <picture>
        <source type="image/webp" srcset="~/assets/img/location-map.webp" />
        <img
          src="~/assets/img/location-map.png"
          class="location__map"
          loading="lazy"
          @click="goToLocationMap"
        />
      </picture>

      <div class="location__address">
        Nitikan Timur RT 06 RW 11, Semanu, Semanu, Gunungkidul,
        D.I.Yogyakarta<br />
        <br />

        <ts-button variant="primary" @click="goToLocationMap">
          <client-only>
            <font-awesome-icon icon="fa-solid fa-location-arrow" />
          </client-only>

          {{ t("openMap") }}
        </ts-button>
      </div>
    </div>
  </div>
</template>

<i18n lang="json">
{
  "id": {
    "location": "Lokasi",
    "openMap": "Buka Google Maps"
  },
  "en": {
    "location": "Location",
    "openMap": "Open Google Maps"
  }
}
</i18n>

<script lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { MAP_LOCATION } from "~/constants/config";

export default {
  components: {
    FontAwesomeIcon,
  },

  methods: {
    goToLocationMap() {
      window.open(MAP_LOCATION, "_blank", "noopener");
    },
  },

  setup() {
    const { t } = useI18n();

    return { t };
  },
};
</script>

<style lang="scss" scoped>
.location {
  margin-bottom: 48px;
  padding: 0 var(--container-padding) 0 var(--container-padding);

  &__content {
    background-color: #f7f5f4;
    padding: 16px;
  }

  &__address {
    margin-top: 16px;
    text-align: center;
    padding: 16px;
  }

  &__map {
    cursor: pointer;
    aspect-ratio: 1/1;
    border-radius: 16px;
    border: 4px solid #e2e0df;
  }
}
</style>
