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

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  padding: 16px;

  .app-wrapper {
    width: 360px;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
}
</style>
