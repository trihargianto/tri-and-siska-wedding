<template>
  <section-invitation
    v-if="!isInvitationOpened"
    @click-open-invitation="openInvitation"
  />

  <template v-else>
    <section-bride-and-groom />

    <section-stories />

    <section-event />

    <section-location />

    <section-kind-words :kind-words="kindWords" />

    <section-footer />
  </template>
</template>

<script lang="ts">
import { getGuestBookMessages } from "~/utils/api";

export default {
  data() {
    return {
      kindWords: [],
      isInvitationOpened: false,
    };
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
      }));
    },
  },

  async mounted() {
    this.getGuestBookMessages();

    // const insert = await addNewGuestMessage({
    //   guestId: 1,
    //   message: "Hello World",
    // });
  },
};
</script>

<style lang="scss" scoped></style>
