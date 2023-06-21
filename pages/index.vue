<template>
  <ts-alert v-if="isNonClosableAlertVisible" title="Mohon Maaf">
    Sepertinya kamu tidak ada di daftar undangan.
  </ts-alert>

  <section-invitation
    v-if="!isInvitationOpened"
    :guest-name="guestName"
    :is-validating="isButtonOpenInvitationLoading"
    @click-open-invitation="openInvitation"
  />

  <template v-else>
    <section-bride-and-groom />

    <section-stories />

    <section-event />

    <section-location />

    <section-kind-words :kind-words="kindWords">
      <section-kind-word-form
        v-if="!isGuestAlreadySubmittedKindWords"
        :guest-id="guestId"
        @on-submit="getGuestBookMessages"
      />
    </section-kind-words>

    <section-footer />
  </template>
</template>

<script lang="ts">
import { getGuestBookMessages, getGuestByName } from "~/utils/api";
import { getGuestNameFromQueryParams } from "~/utils/queryStringHelper";

export default {
  data() {
    return {
      kindWords: [],
      guestId: 0,
      guestName: "",
      isInvitationOpened: false,
      isNonClosableAlertVisible: false,
      isButtonOpenInvitationLoading: true,
    };
  },

  computed: {
    isGuestAlreadySubmittedKindWords() {
      return this.kindWords.some(({ guest_id }) => guest_id === this.guestId);
    },
  },

  methods: {
    openInvitation() {
      this.isInvitationOpened = true;
    },

    async getGuestBookMessages() {
      const guestBookMessages = await getGuestBookMessages();

      this.kindWords = guestBookMessages?.map((item) => ({
        key: item.id,
        name: item.guest.name,
        message: item.message,
        guest_id: item.guest_id,
      }));
    },

    async getGuestByName(name: string) {
      const guest = await getGuestByName(name);

      return guest;
    },

    async checkGuest() {
      this.isButtonOpenInvitationLoading = true;

      const guestName = getGuestNameFromQueryParams();

      const guest = await this.getGuestByName(guestName);

      if (!guest) {
        this.showNonClosableAlert();
        return;
      }

      this.guestName = guest.name;
      this.guestId = guest.id;

      this.isButtonOpenInvitationLoading = false;
    },

    showNonClosableAlert() {
      this.isNonClosableAlertVisible = true;
    },
  },

  async mounted() {
    await this.getGuestBookMessages();

    await this.checkGuest();
  },
};
</script>

<style lang="scss" scoped></style>
