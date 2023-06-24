<template>
  <div class="invitation">
    <div class="invitation__inner">
      <ts-language-switcher />

      <h1 class="text--heading-1">Tri & Siska</h1>

      <template v-if="!isValidating">
        <p class="text--body-1">{{ t("dear") }}</p>

        <p class="text--heading-3" style="margin: 4px 0">{{ guestName }}</p>

        <p class="text--body-1">
          {{ t("invitationText") }}
        </p>
      </template>

      <ts-button
        variant="primary"
        @click="openInvitation"
        :disabled="isValidating"
      >
        <template v-if="isValidating">{{ t("validating") }}</template>
        <template v-else>
          <client-only>
            <font-awesome-icon icon="fa-solid fa-envelope" />
          </client-only>

          &nbsp;{{ t("openInvitation") }}
        </template>
      </ts-button>

      <img src="~/assets/img/flower-1.png" class="invitation__flower" />
    </div>
  </div>
</template>

<i18n lang="json">
{
  "id": {
    "dear": "Kepada Yth Bapak/Ibu/Saudara/i",
    "invitationText": "Kami mengundang Anda untuk hadir dalam acara pernikahan kami",
    "openInvitation": "Buka Undangan",
    "validating": "Memvalidasi Undangan..."
  },
  "en": {
    "dear": "Dear,",
    "invitationText": "We invite you to attend our wedding",
    "openInvitation": "Open Invitation",
    "validating": "Validating Invitation..."
  }
}
</i18n>

<script lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    FontAwesomeIcon,
  },

  props: {
    isValidating: {
      type: Boolean,
      default: false,
    },

    guestName: {
      type: String,
      default: "...",
    },
  },

  setup() {
    const { t } = useI18n();

    return { t };
  },

  methods: {
    openInvitation() {
      this.$emit("click-open-invitation");
    },
  },
};
</script>

<style lang="scss" scoped>
.invitation {
  height: 100%;
  padding: 16px;

  &__inner {
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
  }

  &__flower {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
