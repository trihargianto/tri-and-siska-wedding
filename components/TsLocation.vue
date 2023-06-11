<template>
  <div class="location">
    <h3 class="text--heading-3">Lokasi</h3>

    <div class="location__content">
      <img src="~/assets/img/location-map.png" width="100%" />

      <div class="location__address">
        Nitikan Timur, Semanu, Semanu, Gunungkidul RT 06 RW 11 Samping Bank Arum
        Mandiri Melati <br />
        <br />

        <ts-button variant="primary" @click="goToLocationMap">
          <client-only>
            <font-awesome-icon icon="fa-solid fa-location-arrow" />
          </client-only>

          Buka Maps
        </ts-button>
      </div>
    </div>
  </div>
</template>

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
};
</script>

<style lang="scss" scoped>
.location {
  // TODO: avoid negative value here
  margin-top: -20px;
  margin-bottom: 48px;

  &__content {
    background-color: #f7f5f4;
    padding: 16px;
  }

  &__address {
    margin-top: 16px;
    text-align: center;
    padding: 16px;
    background-color: #f0eeed;
  }
}
</style>
