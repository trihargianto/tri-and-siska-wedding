<template>
  <div class="invitation">
    <h1 class="text--heading-1">Tri & Siska</h1>

    <p class="text--body-1">Kepada Yth Bapak/Ibu/Saudara/i</p>

    <p class="text--heading-3" style="margin: 4px 0">{{ guest }}</p>

    <p class="text--body-1">
      Kami mengundang Anda untuk hadir dalam acara pernikahan kami
    </p>

    <ts-button variant="primary" @click="openInvitation">
      <client-only>
        <font-awesome-icon icon="fa-solid fa-envelope" />
      </client-only>

      &nbsp;Buka Undangan
    </ts-button>

    <img src="~/assets/img/flower-1.png" class="invitation__flower" />
  </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import isRunOnClient from "~/utils/isRunOnClient";

export default {
  components: {
    FontAwesomeIcon,
  },

  computed: {
    guest() {
      return this.getGuestFromQueryParams() || "Guest";
    },
  },

  methods: {
    getGuestFromQueryParams() {
      if (!isRunOnClient) {
        return null;
      }

      const searchParams = new URLSearchParams(window.location.search);

      return searchParams.get("guest");
    },

    openInvitation() {
      this.$emit("click-open-invitation");
    },
  },
};
</script>

<style lang="scss" scoped>
.invitation {
  background-image: url("~/assets/img/ellipse-blur.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  border: 1px solid #e2e0df;
  border-radius: 16px;
  text-align: center;
  padding: 0 32px;
  position: relative;

  &__flower {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
