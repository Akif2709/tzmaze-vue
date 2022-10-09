<script setup lang="ts">
import { ref } from "vue";

let lastScrollTop: number;
const navbar = ref();
const isHamburgerMenuActive = ref(false);

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    //if it will be greater than the previous
    navbar.value.style.top = "-80px";
    //set the value to the negetive of height of navbar
  } else {
    navbar.value.style.top = "0px";
  }

  lastScrollTop = scrollTop; //New Position Stored
});
</script>

<template>
  <nav
    class="navbar is-primary is-fixed-top has-shadow"
    role="navigation"
    aria-label="main navigation"
    ref="navbar"
  >
    <div class="navbar-brand">
      <a class="navbar-item mr-4" href="https://www.tvmaze.com/api#show-search">
        <img
          src="@/assets/tvmaze-logo.png"
          alt="tcmaze-logo"
          width="140"
          height="80"
        />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        :class="{ 'is-active': isHamburgerMenuActive }"
        :aria-expanded="isHamburgerMenuActive"
        @click="isHamburgerMenuActive = !isHamburgerMenuActive"
        data-role="hamburger-menu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': isHamburgerMenuActive }">
      <div class="navbar-start">
        <router-link
          class="abc navbar-item has-text-weight-bold"
          to="/shows"
          data-role="router-link-shows"
        >
          Shows
        </router-link>
        <router-link
          class="navbar-item has-text-weight-bold"
          to="/people"
          data-role="router-link-peoples"
        >
          Peoples
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar-menu {
  .navbar-item {
    display: block;
    width: 7rem;
    font-weight: 500;
    text-align: center;
    padding: 1rem;
    height: 100%;
  }
}

.navbar {
  transition: 0.5s;
}

.router-link-active {
  background-color: #00b89c;
}
</style>
