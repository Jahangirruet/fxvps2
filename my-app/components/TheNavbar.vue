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
    <header
      class="navigation header relative z-30 bg-transparent top-0 transition-all duration-200"
    >
      <div class="px-4">
        <div class="mx-auto container">
          <div class="relative flex items-center justify-between gap-5 py-4">
            <NuxtLink to="/" class="relative shrink-0">
              <figure>
                <img
                  class="w-32"
                  src="../assets/images/logo.svg"
                  alt="logo.svg"
                  width="98.623"
                  height="30"
                />
              </figure>
            </NuxtLink>
            <nav
              class="ease fixed -right-[999px] top-0 flex h-full w-72 flex-col justify-start gap-5 bg-white px-10 pt-20 transition-all duration-300 xl:static xl:w-full xl:items-center xl:justify-center xl:bg-transparent xl:px-0 xl:pt-0"
              id="navbar"
            >
              <button
                type="button"
                id="close"
                name="closeBtn"
                class="xl:hidden w-8 h-8 absolute top-0 -left-7 bg-white p-1"
                @click="closeMenuDialog"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <ul
                class="flex flex-col gap-8 xl:flex-row xl:items-center xl:gap-5 2xl:gap-10"
              >
                <li>
                  <NuxtLink to="/pricing">
                    <span class="font-bold text-base xl:text-xl text-black">
                      VPS PRICING
                    </span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/#">
                    <span class="font-bold text-base xl:text-xl text-black">
                      BROKER LATENCY
                    </span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/pricing#excl-vps">
                    <span class="font-bold text-base xl:text-xl text-black">
                      EXCL VPS
                    </span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/dedicated-server">
                    <span class="font-bold text-base xl:text-xl text-black"
                      >DEDICATED SERVER</span
                    >
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/affiliate">
                    <span class="font-bold text-base xl:text-xl text-black"
                      >AFFILIATE</span
                    >
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/free-vps">
                    <span class="font-bold text-base xl:text-xl text-black"
                      >FREE VPS</span
                    >
                  </NuxtLink>
                </li>
                <li class="xl:hidden flex">
                  <a
                    href="https://secure.fxvps.pro/clientarea.php"
                    target="_blank"
                    class="group rounded-full bg-gradient-to-r from-primary to-secondary p-1 text-lg font-normal text-black"
                  >
                    <span
                      class="flex h-full w-full items-center gap-2 rounded-full bg-white py-1 px-6 sm:py-2.5 transition-all group-hover:bg-transparent sm:px-10"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 group-hover:stroke-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                        />
                      </svg>
                      <span class="group-hover:text-white">Login</span>
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
            <div class="shrink-0">
              <ul class="flex gap-3 items-center justify-end">
                <li class="xl:flex hidden">
                  <a
                    href="https://secure.fxvps.pro/clientarea.php"
                    target="_blank"
                    class="group rounded-full bg-gradient-to-r from-primary to-secondary p-1 text-lg font-normal text-black"
                  >
                    <span
                      class="flex h-full w-full items-center gap-2 rounded-full bg-white py-1 px-6 sm:py-2.5 transition-all group-hover:bg-transparent sm:px-10"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 group-hover:stroke-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                        />
                      </svg>
                      <span class="group-hover:text-white">Login</span>
                    </span>
                  </a>
                </li>
                <li class="shrink-0 xl:hidden">
                  <button
                    type="button"
                    id="burger"
                    class="border-0 bg-transparent"
                    @click="openMenuDialog"
                  >
                    <svg
                      class="stroke-primary"
                      width="26"
                      height="22"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1H17M1 7H17M1 13H17"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="mobile-overlay fixed left-0 top-0 right-0 bottom-0 z-50 hidden h-full w-full bg-black bg-opacity-30 transition-all duration-500 ease-in-out xl:hidden"
        ></div>
      </div>
    </header>
    <!-- <slot name="mainn"></slot> -->
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
  },
};
</script>
