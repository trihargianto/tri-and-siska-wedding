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
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faEnvelope, faChevronRight, faChevronLeft, faLocationArrow);

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
