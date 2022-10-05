<script setup lang="ts">
import { ref } from "vue";

let lastScrollTop: number;
const navbar = ref();

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    //if it will be greater than the previous
    navbar.value.style.top = "-80px";
    //set the value to the negetive of height of navbar
  } else {
    navbar.value.style.top = "0px";
    console.log("hello");
  }

  lastScrollTop = scrollTop; //New Position Stored
});
</script>

<template>
  <nav
    class="navbar is-primary is-fixed-top"
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
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu is-active">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/shows"> Shows </router-link>
        <router-link class="navbar-item" to="/people"> Peoples </router-link>
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
