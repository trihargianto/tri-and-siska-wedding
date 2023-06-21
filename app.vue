<template>
  <div class="container">
    <div class="app-wrapper">
      <nuxt-page />
    </div>
  </div>
</template>

<script lang="ts">
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronRight,
  faChevronLeft,
  faLocationArrow,
  faEnvelope,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

/* Add icons to the library */
library.add(
  faArrowRight,
  faArrowLeft,
  faEnvelope,
  faChevronRight,
  faChevronLeft,
  faLocationArrow
);

export default {};
</script>

<style lang="scss" scoped>
.container {
  background: var(--background-color);
  display: flex;
  min-height: 100vh;
  justify-content: center;

  .app-wrapper {
    width: 360px;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
}
</style>
