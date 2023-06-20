<template>
  <div>
    <div class="py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary px-4">
      <div class="container mx-auto">
        <div
          class="sm:gap-3 flex flex-wrap gap-1.5 justify-between items-center"
        >
          <a
            href="#"
            class="hidden md:flex gap-1.5 sm:gap-2 text-white items-center text-sm sm:text-base lg:text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <span>Email: support@fxvps.pro</span>
          </a>
          <ul class="sm:gap-3 flex gap-1.5 flex-wrap md:gap-6 items-center">
            <li>
              <NuxtLink
                to="/blog"
                class="flex gap-1.5 sm:gap-2 text-white items-center text-sm sm:text-base lg:text-lg"
              >
                <img src="~/assets/images/blogs.svg" alt="blogs.svg" />
                <span>Blogs </span>
              </NuxtLink>
            </li>
            <li>
              <a
                href="#"
                class="flex gap-1.5 sm:gap-2 text-white items-center text-sm sm:text-base lg:text-lg"
              >
                <img src="~/assets/images/cart.svg" alt="cart.svg" />
                <span>View Cart </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex gap-1.5 sm:gap-2 text-white items-center text-sm sm:text-base lg:text-lg"
              >
                <img src="~/assets/images/lang.svg" alt="lang.svg" />
                <span>Choose Language </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheNavbar",
  methods: {
    openMenuDialog() {
      let navbar = document.querySelector("#navbar");
      let overlay = document.querySelector(".mobile-overlay");
      overlay.classList.remove("hidden");
      overlay.classList.add("block");
      navbar.classList.add("active");
    },
    closeMenuDialog() {
      let overlay = document.querySelector(".mobile-overlay");
      let navbar = document.querySelector("#navbar");
      navbar.classList.remove("active");
      overlay.classList.remove("block");
      overlay.classList.add("hidden");
    },

    stickyElement() {
      var header = document.querySelector(".header");
      var headerHeight = getComputedStyle(header).height.split("px")[0];
      var navbar = document.querySelector(".navigation");
      var scrollValue = window.scrollY + 59;

      if (scrollValue > headerHeight) {
        navbar.classList.add("is-fixed");
      } else if (scrollValue < headerHeight) {
        navbar.classList.remove("is-fixed");
      }
    },
  },
};
</script>

<style>

</style>
