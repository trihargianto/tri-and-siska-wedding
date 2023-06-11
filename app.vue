<template>
  <div class="container">
    <div class="app-wrapper">
      <bride-and-groom />

      <ts-stories />

      <ts-section title="Akad">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet recusandae
        illo adipisci, repellat quaerat perspiciatis quam dignissimos hic, sit,
        repellendus reprehenderit facilis quis laborum. Laborum et ipsum quo
        dolore porro!
      </ts-section>

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
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faChevronRight, faChevronLeft);
</script>

<style lang="scss" scoped>
.container {
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
