<template>
  <div class="bridegroom">
    <div class="bridegroom__head">
      <div class="window-button window-button--close"></div>
      <div class="window-button window-button--minimize"></div>
      <div class="window-button window-button--maximize"></div>
    </div>

    <div class="bridegroom__content">
      <img
        src="~/assets/img/bride-and-groom.svg"
        alt="Bride and Groom"
        width="240"
        height="233"
        class="bridegroom__img"
      />

      <h1 class="bridegroom__heading">
        Tri <span class="bridegroom__ampersand">&</span> Siska
      </h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bridegroom {
  &__head {
    display: flex;
    justify-content: flex-start;
    padding: 10px;
    background-color: #f0eeed;
    border-radius: 16px 16px 0px 0px;
  }

  &__content {
    border: 1px solid #f0eeed;
    border-radius: 0px 0px 16px 16px;
    text-align: center;
    padding: 16px;
  }

  &__img {
    margin: 32px 0;
    display: inline;
  }

  &__heading {
    font-size: 40px;
    line-height: 48px;
    font-weight: 400;
  }

  &__ampersand {
    color: #ffe389;
  }
}

.window-button {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  height: 12px;
  width: 12px;
  margin: 0 5px;
  display: inline-block;

  &--close {
    background-color: #ff5f57;
  }

  &--minimize {
    background-color: #ffbd2e;
  }

  &--maximize {
    background-color: #28ca41;
  }
}
</style>
