<template>
  <div class="level has-text-centered mt-5">
    <div class="level-item">
      <span class="loader-mixin"></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin loader() {
  animation: spinAround 0.5s infinite linear;
  border: 2px solid #dbdbdb;
  border-radius: 9999px;
  border-right-color: transparent;
  border-top-color: transparent;
  display: block;
  height: 3em;
  position: relative;
  width: 3em;
}

.loader-mixin {
  @include loader();
}

.spinner-container {
  min-height: 200px;
  width: 100%;
}
</style>
