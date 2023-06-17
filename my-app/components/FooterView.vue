<template>
  <div>
    <footer class="border-t border-gray-400 pt-12 md:pt-20">
      <div class="px-4">
        <div class="container mx-auto">
          <div
            class="w-full xl:px-24 grid grid-cols-1 sm:flex flex-wrap lg:flex-nowrap lg:justify-between gap-7 xl:gap-10 pb-8 sm:pb-14"
          >
            <div class="space-y-4 sm:space-y-6">
              <h2 class="text-lg md:text-xl font-bold text-black">
                OUR SERVICES
              </h2>
              <ul class="grid gap-2">
                <li>
                  <NuxtLink
                    to="/pricing"
                    class="inline-block text-base lg:text-lg text-black hover:underline"
                    >Regular VPS</NuxtLink
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="inline-block text-base lg:text-lg text-black hover:underline"
                  >
                    Managed Dedd. Server</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="inline-block text-base lg:text-lg text-black hover:underline"
                    >Exclusive VPS</a
                  >
                </li>
                <li>
                  <NuxtLink
                    to="/ultra-low-latency-vps"
                    class="inline-block text-base lg:text-lg text-black hover:underline"
                    >Latency Optimized VPS</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    to="/best-forex-vps"
                    class="inline-block text-base lg:text-lg text-black hover:underline"
                    >Best Forex VPS</NuxtLink
                  >
                </li>
              </ul>
            </div>
            <div class="space-y-4 sm:space-y-6">
              <h2 class="text-lg md:text-xl font-bold text-black">COMPANY</h2>
              <ul class="grid gap-2">
                <li>
                  <NuxtLink
                    to="/privacy-policy"
                    class="inline-block text-base lg:text-lg text-black hover:underline"
                    >Privacy Policy</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    to="/terms-and-conditions"
                    class="inline-block text-base lg:text-lg text-black hover:underline"
                    >Terms Of Service</NuxtLink
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="inline-block text-base lg:text-lg text-black hover:underline"
                    >Contact Us</a
                  >
                </li>
              </ul>
            </div>
            <div class="space-y-4 sm:space-y-6">
              <h2 class="text-lg md:text-xl font-bold text-black">
                BROKERAGE SOLUTIONS
              </h2>
              <ul class="grid gap-2">
                <li>
                  <a
                    href="#"
                    class="inline-block text-base lg:text-lg text-black hover:underline"
                    >FOREX CRM</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="inline-block text-base lg:text-lg text-black hover:underline"
                    >MT4/MT5 Manager API</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="inline-block text-base lg:text-lg text-black hover:underline"
                    >Auto Trading Copy Trading</a
                  >
                </li>
              </ul>
            </div>
            <div class="space-y-4 sm:space-y-6">
              <h2 class="text-lg md:text-xl font-bold text-black">CONNECT</h2>
              <ul class="grid gap-2">
                <li class="flex items-center gap-2">
                  <img
                    class="w-5"
                    src="~/assets/images/facebook.png"
                    alt="facebook"
                  />
                  <a
                    href="#"
                    class="inline-block text-base lg:text-lg text-black hover:underline"
                    >Facebook</a
                  >
                </li>
                <li class="flex items-center gap-2">
                  <img
                    class="w-5"
                    src="~/assets/images/twitter.png"
                    alt="twitter"
                  />
                  <a
                    href="#"
                    class="inline-block text-base lg:text-lg text-black hover:underline"
                    >Twitter</a
                  >
                </li>
                <li class="flex items-center gap-2">
                  <img
                    class="w-5"
                    src="~/assets/images/linkedin.png"
                    alt="linkedin"
                  />
                  <a
                    href="#"
                    class="inline-block text-base lg:text-lg text-black hover:underline"
                    >Linkedin</a
                  >
                </li>
                <li class="flex items-center gap-2">
                  <img
                    class="w-5"
                    src="~/assets/images/youtube.png"
                    alt="youtube"
                  />
                  <a
                    href="#"
                    class="inline-block text-base lg:text-lg text-black hover:underline"
                    >Youtube</a
                  >
                </li>
              </ul>
            </div>
            <div class="space-y-4 sm:space-y-6">
              <h2 class="text-lg md:text-xl font-bold text-black">WE ACCEPT</h2>
              <ul class="flex gap-3">
                <li>
                  <a
                    href="#"
                    class="inline-block text-base lg:text-lg text-black hover:underline"
                  >
                    <img src="~/assets/images/pay-1.png" alt="pay-one" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="inline-block text-base lg:text-lg text-black hover:underline"
                  >
                    <img src="~/assets/images/pay-2.png" alt="pay-two" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="inline-block text-base lg:text-lg text-black hover:underline"
                  >
                    <img src="~/assets/images/pay-3.png" alt="pay-three" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="inline-block text-base lg:text-lg text-black hover:underline"
                  >
                    <img src="~/assets/images/pay-4.png" alt="pay-four" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="py-6 border-t border-gray-400 px-4">
        <p class="text-base md:text-lg text-center">
          Copyright 2016 - 2017
          <a href="#" class="font-semibold text-secondary">Fxvps.pro </a> All
          Rights Reserved.
        </p>
      </div>
    </footer>
    <slot />
  </div>
</template>

<script>
export default{}
</script>

<style>

</style>