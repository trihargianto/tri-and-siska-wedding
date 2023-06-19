<template>
  <ts-invitation
    v-if="!isInvitationOpened"
    @click-open-invitation="openInvitation"
  />

  <template v-else>
    <bride-and-groom />

    <ts-stories />

    <ts-event />

    <ts-location />

    <ts-section-kind-words />

    <ts-footer />
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
