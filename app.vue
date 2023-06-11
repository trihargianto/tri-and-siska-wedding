<template>
  <div class="container">
    <div class="app-wrapper">
      <bride-and-groom />

      <ts-stories />

      <ts-event />

      <ts-location />

      <ts-section-kind-words />

      <ts-footer />
    </div>
  </div>
</template>

<script lang="ts">
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronRight,
  faChevronLeft,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faChevronRight, faChevronLeft, faLocationArrow);

export default {};
</script>

<style lang="scss" scoped>
.container {
  background: var(--background-color);
  display: flex;
  justify-content: center;
  padding: var(--container-padding);

  .app-wrapper {
    width: 360px;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
}
</style>
