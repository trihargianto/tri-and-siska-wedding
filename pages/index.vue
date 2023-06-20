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

    <section-kind-words />

    <section-footer />
  </template>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isInvitationOpened: true,
    };
  },

  methods: {
    openInvitation() {
      this.isInvitationOpened = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
