<template>
  <div class="location">
    <h3 class="text--heading-3">{{ t("location") }}</h3>

    <div class="location__content">
      <img
        src="~/assets/img/location-map.png"
        class="location__map"
        @click="goToLocationMap"
      />

      <div class="location__address">
        Nitikan Timur, Semanu, Semanu, Gunungkidul RT 06 RW 11<br />
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
  margin-top: 38px;
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
    aspect-ratio: 1/1;
    border-radius: 16px;
    border: 4px solid #e2e0df;
  }
}
</style>
